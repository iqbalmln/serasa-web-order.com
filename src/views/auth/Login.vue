<template>
  <div class="h-screen flex flex-col gap-20 items-center justify-center bg-sr-bg">
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
        <Icon icon="bx-user-circle" class="text-sr-icon text-3xl" />
        <Input type="text" placeholder="Isi Nama Anda" v-model="user.username" />
      </div>
      <div class="flex items-center w-full">
        <Icon icon="bxs-phone" class="text-sr-icon text-3xl" />
        <Input type="number" placeholder="Isi Nomor Telepon Anda" v-model="user.phone_number" />
      </div>
      <button class="bg-sr-green p-14px text-white rounded-lg" @click="inputUser">
        <router-link to="/home">
          Masuk
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>

import Input from '@/components/base/Input.vue'
import Icon from '@/components/base/Icon.vue'

import axios from 'axios'

export default {
  name: 'Login',
  components: {
    Icon,
    Input
  },

  data () {
    return {
      user: {
        username: '',
        phone_number: ''
      }
    }
  },

  methods: {
    inputUser() {
      axios.post('http://localhost:8000/v1/auth/user', this.user)
      .then( function(response) {
        console.log(response);
      }).catch( function(response) {
        console.log(response);
      })
    }
  }
}
</script>
