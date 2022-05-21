<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
	created() {
		// Persist local storage to vuex object
		const user = JSON.parse(localStorage.getItem("user_data"));
		const table = JSON.parse(localStorage.getItem("table_data"));
		const token = localStorage.getItem("access_token");
		
		if(!user || !table || !token) return

		this.$store.commit("SET_USER", user)
		this.$store.commit("SET_TABLE", table)
		this.$store.commit("SET_ACCESS_TOKEN", token)
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
