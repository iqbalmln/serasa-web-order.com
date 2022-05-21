<template>
  <div class="relative h-screen bg-sr-bg">
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
    <article class="px-16 pt-10">
      <header class="flex flex-col gap-8">
        <div class="flex items-center gap-2">
          <p class="font-semibold text-xl">Status Pesanan</p>
          <Icon icon="bxs-hourglass-bottom" class="text-xl" />
        </div>
        <div class="flex items-center gap-4">
          <Icon icon="bxs-hourglass-bottom" class="text-5xl" />
          <div class="flex flex-col gap-2 text-sm">
            <p class="font-semibold">Pesanan kamu sedang disajikan</p>
            <p class="text-sr-secondary">15 Menit</p>
          </div>
        </div>
        <div class="flex items-center gap-4 mt-16 text-sm">
          <Icon icon="bxs-check-circle" class="text-5xl text-sr-green progress" />
          <div class="flex flex-col gap-2">
            <p class="font-semibold">Yes! Pesanan kamu telah disajikan</p>
            <p class="text-sr-secondary">Tunggu.. Makanan mu segera diantar. Selamat makan!</p>
          </div>
        </div>
      </header>
      <section class="mt-10">
        <p class="font-semibold mb-4">
          <span class="text-sr-secondary font-normal">Nomor Order :</span>
          #021
        </p>
        <article class="bg-white rounded p-6 card">
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
      <button class="w-full bg-sr-green mt-64 py-3 text-white rounded-lg">Kembali ke menu</button>
    </article>
  </div>  
</template>

<script>

import Icon from '../components/base/Icon.vue'
import MenuItem from '../components/commons/MenuItem.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'Order',

  components: {
    Icon,
    MenuItem,
    Nav
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
  }
}
</script>
