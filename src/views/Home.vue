<template>
  <div class="relative h-screen bg-sr-bg">
    <Nav>
      <template #icon>
        <div>
        <Icon @click="tes" icon="bx-menu" class="text-3xl text-white cursor-pointer" />
      </div>
      </template>
    </Nav>
    <aside class="absolute h-screen w-40 bg-sr-green" :class="{ hidden : isActive }">
      tes
    </aside>
    <div class="px-16 py-10">
      <div class="flex items-center w-full">
        <Icon icon="bx-search" class="text-3xl text-sr-icon" />
        <Input type="text" placeholder="Cari Makanan / Minuman" />
      </div>
      <section class="flex flex-col gap-6 py-8">
        <header class="flex items-center gap-2">
          <p class="text-left text-sr-primary text-xl font-semibold">
            Makanan
          </p>
            <Icon icon="bxs-bowl-rice" class="text-2xl text-sr-icon" />
        </header>
        <div class="grid grid-cols-2 gap-8">
          <Card
            v-for="menu in menus" :key="menu.id"
            :src="menu.src"
            :foodMenu="menu.foodMenu"
            :foodDescription="menu.foodDescription"
            :foodPrice="menu.foodPrice"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import Card from '../components/commons/Card.vue'
import Icon from '../components/base/Icon.vue'
import Input from '../components/base/Input.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'Home',
  
  components: {
    Card,
    Icon,
    Input,
    Nav
  },

  data () {
    return {
      menus: [
        {
          id: 0,
          src: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          foodMenu: 'Nasi Padang',
          foodDescription: 'lorem ipsum dolor sit amet',
          foodPrice: 'Rp.50.000'
        },
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          foodMenu: 'Nasi Padang',
          foodDescription: 'lorem ipsum dolor sit amet',
          foodPrice: 'Rp.50.000'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1509482560494-4126f8225994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          foodMenu: 'Pile of cookies',
          foodDescription: 'lorem ipsum dolor sit amet',
          foodPrice: 'Rp.50.000'
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1559070135-f259b369bf87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          foodMenu: 'Nasi Padang',
          foodDescription: 'lorem ipsum dolor sit amet',
          foodPrice: 'Rp.50.000'
        }
      ],
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
