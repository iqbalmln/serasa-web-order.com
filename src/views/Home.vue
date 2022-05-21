<template>
  <div class="relative h-screen bg-sr-bg border border-blue-500">
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
            v-for="menu in menus" :key="menu.id"
            :name="menu.name"
            :price="menu.price"
            :description="menu.description"
            :in_stock="menu.in_stock"
            :type="menu.type"
            :quantity="carts.find(cart => cart.menu_id === menu.id) ? carts.find(cart => cart.menu_id === menu.id).quantity : 0"
            :notes="carts.find(cart => cart.menu_id === menu.id) ? carts.find(cart => cart.menu_id === menu.id).notes : null"
            @increment="onIncrement(menu.id)"
            @decrement="onDecrement(menu.id)"
          >
          </Card>
        </div>
      </section>
    </main>
    <Modal
      class="absolute bottom-24 bg-sr-green text-center mx-auto py-3 font-semibold text-base"
      :class="{ 'invisible' : showModal }"
      :priceItem='priceItem'
    />
  </div>
</template>

<script>

import Card from '../components/commons/Card.vue'
import Icon from '../components/base/Icon.vue'
import Input from '../components/base/Input.vue'
import Modal from '../components/base/Modal.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'Home',
  
  components: {
    Card,
    Icon,
    Input,
    Modal,
    Nav
  },

  data () {
    return {
      menus: [
        {
          id: 0,
          name: 'Nasi Goreng',
          thumbnail: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          price: 5000,
          description: 'blabla',
          in_stock: true,
          type: 'makanan'
        },
        {
          id: 1,
          name: 'Nasi Padang',
          thumbnail: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          price: 9000,
          description: 'blabla',
          in_stock: true,
          type: 'makanan'
        }
      ],
      carts: [
        {
          id: 0,
          quantity: 0,
          notes: 'Gak pedes',
          menu_id: 0,
          menu: {
            name: 'Nasi Goreng',
            price: 5000,
            description: 'blabla',
            in_stock: true
          }
        },
        {
          id: 1,
          quantity: 0,
          notes: 'Ga pake sambel',
          menu_id: 1,
          menu: {
            name: 'Nasi Padang',
            price: 9000,
            description: 'blabla',
            in_stock: true
          }
        }
      ],
      isActive: false,
      showModal: true,
      total: 0,
      priceItem: 0
    }
  },

  methods: {
    tes() {
      if (!this.isActive) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    // menuFinder(cart, menuId) {
    //   return cart.menu_id === menuId
    // },
    onIncrement(menuId) {
      const menu = this.carts.find(cart => cart.menu_id === menuId)
      if(!menu) {
        this.carts.push({
          id: menuId,
          quantity: 1,
          notes: null,
          menu: this.menus.find(menu => menu.id === menuId)
        })
      } else {
        menu.quantity++
        this.showModal = false
        this.priceItem = this.priceItem + menu.menu.price
      }
    },
    onDecrement(menuId) {
      // const menuFinder = cart => cart.menu_id === menuId
      const menu = this.carts.find(cart => cart.menu_id === menuId)

      if(menu) {

        if(menu.quantity === 0) {
          this.carts = this.carts.filter(cart => cart.menu_id === menuId)
        } else {
            menu.quantity--
            this.priceItem = this.priceItem - menu.menu.price
            if (menu.quantity < 1) {
              this.showModal = true
            }
        }
      }
    }
  }
}
</script>
