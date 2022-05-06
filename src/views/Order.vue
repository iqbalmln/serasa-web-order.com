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
    <section class="px-16 pt-10">
      <header class="flex flex-col gap-8">
        <div class="flex gap-2">
          <p>Status Pesanan</p>
          <Icon icon="bxs-hourglass-bottom" />
        </div>
        <div class="flex items-center gap-4">
          <Icon icon="bxs-hourglass-bottom" />
          <div class="flex flex-col gap-2">
            <p>Pesanan kamu sedang disajikan</p>
            <p>15 Menit</p>
          </div>
        </div>
      </header>
    </section>
  </div>  
</template>

<script>

import Icon from '../components/base/Icon.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'Order',

  components: {
    Icon,
    Nav
  },

  data () {
    return {
      isActive: false
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
