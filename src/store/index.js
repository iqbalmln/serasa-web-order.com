import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
		table: {},
		token: "",
    user: {},
  },
	getters: {

	},
  mutations: {
		SET_ACCESS_TOKEN (state, token) {
			state.token = token;
		},
		SET_TABLE (state, table) {
			state.table = table;
		},
		SET_USER (state, user) {
			state.user = user;
		},
  },
	actions: {

	}
})


export default store;
