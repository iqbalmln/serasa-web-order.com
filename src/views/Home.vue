<template>
  <div class="relative h-screen bg-sr-bg border border-blue-500">
    <Nav class="sticky top-0 left-0 z-20">
      <template #icon>
        <div>
					<Icon
						class="text-3xl text-white cursor-pointer"
						icon="bx-menu"
						@click="toggleMenu"
					/>
				</div>
      </template>
    </Nav>

		<aside
			class="fixed h-screen w-52 bg-sr-green transition-all ease-in-out duration-500 top-0 z-10"
			:class="[isActive ? 'left-0' : '-left-full']"
		>
      <div class="flex flex-col gap-4 ml-12 mt-24">
        <div class="flex items-center gap-2 justify-center text-white hover:bg-sr-old-green rounded-tl-3xl rounded-bl-3xl py-2">
          <Icon
						class="text-2xl"
						icon="bxs-food-menu"
					/>

          <router-link to="/home">
            <p class="font-semibold text-sm">Menu</p>
          </router-link>
        </div>

        <div class="flex items-center gap-2 justify-center text-white hover:bg-sr-old-green rounded-tl-3xl rounded-bl-3xl py-2">
          <Icon
						class="text-2xl"
						icon="bx-history"
					/>

          <router-link to="/history">
            <p class="font-semibold text-sm">Order</p>
          </router-link>
        </div>
      </div>
    </aside>

    <main class="px-16 pt-24">
      <div class="flex items-center w-full">
        <Icon
					class="text-3xl text-sr-icon"
					icon="bx-search"
				/>

        <Input
					type="text"
					placeholder="Cari Makanan / Minuman"
				/>
      </div>

      <!-- Makanan -->
      <section class="flex flex-col gap-6 py-8">
        <header class="flex items-center gap-2">
          <p class="text-left text-sr-primary text-xl font-semibold">
            Makanan
          </p>

					<Icon
						icon="bxs-bowl-rice"
						class="text-2xl text-sr-icon"
					/>
        </header>

        <div class="grid grid-cols-2 gap-8">
          <Card
            v-for="food in foods" :key="food.id"
            :description="food.description"
            :in_stock="food.in_stock"
            :name="food.name"
            :notes="carts.find(cart => cart.food_id === food.id) ? carts.find(cart => cart.food_id === food.id).notes : null"
            :price="food.price"
            :quantity="carts.find(cart => cart.food_id === food.id) ? carts.find(cart => cart.food_id === food.id).quantity : 0"
            :type="food.type"
          />
        </div>
      </section>

      <!-- Minuman -->
      <section class="flex flex-col gap-6 py-8">
        <header class="flex items-center gap-2">
          <p class="text-left text-sr-primary text-xl font-semibold">
            Minuman
          </p>

					<Icon
						icon="bxs-bowl-rice"
						class="text-2xl text-sr-icon"
					/>
        </header>

        <div class="grid grid-cols-2 gap-8">
          <Card
            v-for="beverage in beverages" :key="beverage.id"
            :description="beverage.description"
            :in_stock="beverage.in_stock"
            :name="beverage.name"
            :notes="carts.find(cart => cart.beverage_id === beverage.id) ? carts.find(cart => cart.beverage_id === beverage.id).notes : null"
            :price="beverage.price"
            :quantity="carts.find(cart => cart.beverage_id === beverage.id) ? carts.find(cart => cart.beverage_id === beverage.id).quantity : 0"
            :type="beverage.type"
          />
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
import axios from "axios";

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
			baseUrl: "http://localhost:8000/v1",
			beverages: [],
			carts: [],
			foods: [],
      isActive: false,
			pageNumber: {
				food: 1,
				beverages: 1,
			},
      priceItem: 0,
			showModal: true,
			total: 0,
    }
  },

	async created() {
		try {
			const axiosConfig = {
				headers: {
					authorization: `Bearer ${this.$store.state.token}`
				}
			}
			
			const getFoods = axios.get(`${this.baseUrl}/menu/list?type=makanan&page=${this.pageNumber.food}`, axiosConfig)
			const getBeverages = axios.get(`${this.baseUrl}/menu/list?type=minuman&page=${this.pageNumber.beverages}`, axiosConfig)

			const [ foodsResponse, beveragesResponse ] = await Promise.all([
				getFoods,
				getBeverages,
			]);

			const foods = foodsResponse.data.data
			const beverages = beveragesResponse.data.data

			this.foods = foods;
			this.beverages = beverages;
		} catch (error) {
			console.log({ error });
		}
	},

  methods: {
    toggleMenu() {
			this.isActive = !this.isActive;
    },
    // onIncrement(menuId) {
    //   const menu = this.carts.find(cart => cart.menu_id === menuId)
    //   if(!menu) {
    //     this.carts.push({
    //       id: menuId,
    //       quantity: 1,
    //       notes: null,
    //       menu: this.menus.find(menu => menu.id === menuId)
    //     })
    //   } else {
    //     menu.quantity++
    //     this.showModal = false
    //     this.priceItem = this.priceItem + menu.menu.price
    //   }
    // },
    // onDecrement(menuId) {
    //   // const menuFinder = cart => cart.menu_id === menuId
    //   const menu = this.carts.find(cart => cart.menu_id === menuId)

    //   if(menu) {

    //     if(menu.quantity === 0) {
    //       this.carts = this.carts.filter(cart => cart.menu_id === menuId)
    //     } else {
    //         menu.quantity--
    //         this.priceItem = this.priceItem - menu.menu.price
    //         if (menu.quantity < 1) {
    //           this.showModal = true
    //         }
    //     }
    //   }
    // }
  }
}
</script>
