import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {},
		table: {},
		token: "",
  },
	getters: {

	},
  mutations: {
		SET_ACCESS_TOKEN(state, token) {
			state.token = token;
		},
		SET_USER(state, user) {
			state.user = user;
		},
		SET_TABLE(state, table) {
			state.table = table;
		}
  },
	actions: {

	}
})


export default store;
