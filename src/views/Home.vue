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
      <!-- Makanan -->
      <section class="flex flex-col gap-6 py-8">
        <header class="flex items-center gap-2">
          <p class="text-left text-sr-primary text-xl font-semibold">
            Makanan
          </p>
            <Icon icon="bxs-bowl-rice" class="text-2xl text-sr-icon" />
        </header>
        <div class="grid grid-cols-2 gap-8">
          <Card
            v-for="food in foods" :key="food.id"
            :src="food.src"
            :foodMenu="food.foodMenu"
            :foodDescription="food.foodDescription"
            :foodPrice="food.foodPrice"
          />
        </div>
      </section>
      <!-- Minuman -->
      <section class="flex flex-col gap-6 py-8">
        <header class="flex items-center gap-2">
          <p class="text-left text-sr-primary text-xl font-semibold">
            Minuman
          </p>
            <Icon icon="bxs-drink" class="text-2xl text-sr-icon" />
        </header>
        <div class="grid grid-cols-2 gap-8">
          <Card
            v-for="drink in drinks" :key="drink.id"
            :src="drink.src"
            :foodMenu="drink.drinkMenu"
            :foodDescription="drink.drinkDescription"
            :foodPrice="drink.drinkPrice"
          />
        </div>
      </section>
    </main>
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
      foods: [
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
      drinks: [
        {
          id: 0,
          src: 'https://images.unsplash.com/photo-1638176066359-7bcd6289c9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          drinkMenu: 'Pome Juice',
          drinkDescription: 'Fresh Pome with Kiwi and berry',
          drinkPrice: 'Rp.40.000'
        },
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1638176066359-7bcd6289c9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          drinkMenu: 'Pome Juice',
          drinkDescription: 'Fresh Pome with Kiwi and berry',
          drinkPrice: 'Rp.40.000'
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
