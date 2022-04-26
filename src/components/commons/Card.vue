<template>
  <div class="p-6 flex flex-col gap-6 bg-white shadow-sr-drop-shadow rounded-lg">
    <div class="flex gap-3">
      <img
        class="w-24 flex-1"
        :src="src"
        alt=""
      >
      <div class="flex-1 text-left">
        <p class="text-sr-primary text-sm font-semibold">{{ foodMenu }}</p>
        <p class="pt-4 pb-2 text-xs text-sr-secondary">
          {{ foodDescription }}
        </p>
        <p class="text-sr-primary text-sm font-semibold">{{ foodPrice }}</p>
      </div>
    </div>
    <Input type="textarea" placeholder="Catatan..." />
    <div class="flex items-center justify-around text-xl">
      <Icon @click="decrement" icon="bx-minus-circle" class="text-sr-green" />
      <p class="text-sr-secondary">{{ total }}</p>
      <Icon @click="increment" icon="bx-plus-circle" class="text-sr-green" />
    </div>
    <div>

    </div>
  </div>
</template>

<script>

import Input from '../base/Input.vue'
import Icon from '../base/Icon.vue'
export default {
  name: 'Card',

  components: {
    Icon,
    Input
  },

  data () {
    return {
      total: 0
    }
  },

  methods: {
    increment() {
      this.total++  
    },
    decrement() {
      this.total--
    }
  },

  props: {
    src: {
      type: String,
      default: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
    },
    foodMenu: {
      type: String,
      required: true,
    },
    foodDescription: {
      type: String,
      default: ''
    },
    foodPrice: {
      type: String,
      default: 'Gratis'
    }
  }
}
</script>
