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
        <Input type="text" placeholder="Isi Nama Anda" />
      </div>
      <div class="flex items-center w-full">
        <Icon icon="bxs-phone" class="text-sr-icon text-3xl" />
        <Input type="number" placeholder="Isi Nomor Telepon Anda" />
      </div>
      <button class="bg-sr-green p-14px text-white rounded-lg">Masuk</button>
    </div>
  </div>
</template>

<script>

import Input from '/Users/iqbalmaulana/Documents/Final Project/serasaapp/serasaresto.com/src/components/base/Input.vue'
import Icon from '/Users/iqbalmaulana/Documents/Final Project/serasaapp/serasaresto.com/src/components/base/Icon.vue'

export default {
  name: 'Login',
  components: {
    Icon,
    Input
  }
}
</script>
