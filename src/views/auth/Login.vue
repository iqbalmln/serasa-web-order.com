<template>
  <form
		class="h-screen flex flex-col gap-20 items-center justify-center bg-sr-bg"
		@submit.prevent="onSubmit"
	>
    <div class="w-1/2 text-center flex flex-col items-center">
      <h1 class="text-3xl font-semibold text-gray-500">
        <span class="text-sr-green">Serasa Restaurant</span> Penuh Rasa, Harga terjangkau <span class="text-sr-green">kualitas juara</span>
      </h1>

      <div>
        <img src="@/assets/illustration.png" alt="">
      </div>

      <p class="flex items-center text-sr-green text-sm">Supported by <img src="@/assets/logo.png" alt=""></p>
    </div>

    <div class="w-3/4 flex flex-col gap-4 rounded-sr-14 shadow-sr-drop-shadow p-10 bg-white">
      <div class="flex items-center w-full">
        <Icon
					icon="bx-user-circle"
					class="text-sr-icon text-3xl"
				/>

        <Input
					v-model="user.username"
					type="text"
					placeholder="Isi Nama Anda"
				/>
      </div>

      <div class="flex items-center w-full">
        <Icon
					icon="bxs-phone"
					class="text-sr-icon text-3xl"
				/>

        <Input
					v-model="user.phone_number"
					type="number"
					placeholder="Isi Nomor Telepon Anda"
				/>
      </div>

      <button
				class="bg-sr-green p-14px text-white rounded-lg"
				type="submit"
			>
				Masuk
      </button>
    </div>

		<p v-if="errorMessage">
			{{ errorMessage }}
		</p>
  </form>
</template>

<script>
import axios, { AxiosError } from 'axios'

import Input from '@/components/base/Input.vue'
import Icon from '@/components/base/Icon.vue'

export default {
  name: 'Login',
  components: {
    Icon,
    Input
  },

  data () {
    return {
			baseUrl: "http://localhost:8000/v1",
      user: {
        username: '',
        phone_number: ''
      },
			errorMessage: null,
    }
  },

  methods: {
		async onSubmit() {
			// 2. kita mau phone number wajib diisi, semua harus berupa angka tidak ada huruf, minimal 10 max 15
			const username = this.user.username;

			// Username gak boleh kosong
			if (!username.trim().length) {
				alert("Nama harus diisi");
				return;
			}

			// Username minimal 2 karakter
			if (username.length < 2) {
				alert("Tolong isi lebih lengkap apaan kek");
				return;
			}

			// Username maksimal 50 karakter
			if (username.length > 50) {
				alert("Tolong isi lebih lengkap apaan kek");
				return;
			}

			const phone_number = this.user.phone_number;

			// Phone Number gak boleh kosong
			if (!phone_number.trim().length) {
				alert("Nama harus diisi");
				return;
			}

			// Phone Number harus angka aja
			const numberRegex = /^[0-9]$/g
			if (numberRegex.test(phone_number)) {
				alert("Mohon masukkan nomor HP yang valid");
				return;
			}

			// Send login request
			try {
				const response = await axios.post(`${this.baseUrl}/auth/user`, this.user)
				const { user, table, token } = response.data.data

				// Simpen data ke localStorage
				localStorage.setItem("access_token", token);
				localStorage.setItem("user_data", JSON.stringify(user));
				localStorage.setItem("table_data", JSON.stringify(table));

				// Simpen data ke vuex
				this.$store.commit("SET_ACCESS_TOKEN", token);
				this.$store.commit("SET_USER", user);
				this.$store.commit("SET_TABLE", table);

				// Redirect ke home
				this.$router.replace({ name: "Home" })
			} catch (error) {
				if (error instanceof AxiosError) {
					const { message } = error.response.data;
					this.errorMessage = message;
				}
			}
		}
  }
}
</script>
