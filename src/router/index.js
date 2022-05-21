import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const auth = {
	isLoggedIn() {
		const accessToken = localStorage.getItem("access_token");

		if (accessToken === null || accessToken === undefined) {
			return false;
		}

		if (accessToken.trim().length === 0) {
			return false;
		}

		return true;
	}
}

const routes = [
  {
    path: '/auth/login',
    name: 'Login',
		component: () => import('../views/auth/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
		meta: {
			requiresAuth: true,
		}
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue'),
		meta: {
			requiresAuth: true,
		}
  },
  {
    path: '/home/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
		meta: {
			requiresAuth: true,
		}
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.VUE_APP_API_BASE_URL,
  routes
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    next({
			name: "Login",
      // path: '/auth/login',
      // query: { redirect: to.fullPath },
    })
  } else {
		next()
	}
})

export default router
