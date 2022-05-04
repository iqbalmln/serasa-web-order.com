<template>
  <div class="relative bg-sr-bg">
    <Nav class="sticky top-0 left-0 z-20">
      <template #icon>
        <div>
        <Icon @click="tes" icon="bx-menu" class="text-3xl text-white cursor-pointer" />
      </div>
      </template>
    </Nav>
    <aside class="fixed h-screen w-52 bg-sr-green transition-all ease-in-out duration-500 top-0 z-10"
      :class="[isActive ? 'left-0' : '-left-full']"
    >
      <div class="flex flex-col gap-4 ml-12 mt-24">
        <div class="flex items-center gap-2 justify-center text-white hover:bg-sr-old-green rounded-tl-3xl rounded-bl-3xl py-2">
          <Icon icon="bxs-food-menu" class="text-2xl" />
          <router-link to="/home">
            <p class="font-semibold text-sm">Menu</p>
          </router-link>
        </div>
        <div class="flex items-center gap-2 justify-center text-white hover:bg-sr-old-green rounded-tl-3xl rounded-bl-3xl py-2">
          <Icon icon="bx-history" class="text-2xl" />
          <router-link to="/history">
            <p class="font-semibold text-sm">Order</p>
          </router-link>
        </div>
      </div>
    </aside>
    <main class="px-16 pt-24">
      <div class="flex items-center w-full">
        <Icon icon="bx-search" class="text-3xl text-sr-icon" />
        <Input type="text" placeholder="Cari Makanan / Minuman" />
      </div>
      <section class="flex flex-col gap-6 py-8">
        <header class="flex items-center gap-2">
          <p class="text-left text-sr-primary text-xl font-semibold">
            History Order
          </p>
          <Icon icon="bx-history" class="text-2xl text-sr-icon" />
        </header>
        <article class="bg-white rounded p-6">
          <header class="flex justify-between items-center text-sm mb-4">
            <div class="flex flex-col gap-2">
            <p class="font-semibold">#Order21</p>
            <p class="text-sr-secondary">23 Juni 2022, 20:30 WIB</p>
            </div>
            <Status />
          </header>
          <MenuItem
            v-for="order in orders"
            :key="order.id"
            :src="order.src"
            :title="order.title"
            :note="order.note"
            :unit="order.unit"
            :price="order.price"
          />
          <div class="flex justify-between text-sm font-semibold">
            <p>Total</p>
            <p>{{ `Rp. ${totalPrice}` }}</p>
          </div>
        </article>
        <article class="bg-white rounded p-6">
          <header class="flex justify-between items-center text-sm mb-4">
            <div class="flex flex-col gap-2">
            <p class="font-semibold">#Order21</p>
            <p class="text-sr-secondary">23 Juni 2022, 20:30 WIB</p>
            </div>
            <Status />
          </header>
          <MenuItem
            v-for="order in orders"
            :key="order.id"
            :src="order.src"
            :title="order.title"
            :note="order.note"
            :unit="order.unit"
            :price="order.price"
          />
          <div class="flex justify-between text-sm font-semibold">
            <p>Total</p>
            <p>{{ `Rp. ${totalPrice}` }}</p>
          </div>
        </article>
      </section>
    </main>
  </div>  
</template>

<script>

import Nav from '../components/Nav.vue'
import Icon from '../components/base/Icon.vue'
import Input from '../components/base/Input.vue'
import Status from '../components/commons/Status.vue'
import MenuItem from '../components/commons/MenuItem.vue'

export default {
  name: 'History',


  components: {
    Icon,
    Input,
    MenuItem,
    Nav,
    Status
  },

  data () {
    return {
      isActive: false,
      orders: [
        {
          id: 0,
          src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          title: 'Prawn with Salad',
          note: 'Catatan : Tidak terlalu pedas',
          unit: 'x 2',
          price: 40000
        },
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80',
          title: 'Pizza With salad',
          note: 'Catatan : Tidak menggunakan mayonaise',
          unit: 'x 2',
          price: 300000
        },
      ],
      total: null
    }
  },

  methods: {
    tes() {
      if (!this.isActive) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  },

  computed: {
    totalPrice() {
      return this.orders[0].price + this.orders[1].price
    }
  }
}
</script>
