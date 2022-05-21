<template>
  <button class="flex items-center justify-center w-full text-white">
    <Icon icon="bxs-basket" />
    Tambahkan item - {{priceItem}}
  </button>
</template>

<script>

import Icon from '../base/Icon.vue'
export default {
  name: 'Modal',
  components: {
    Icon
  },
  props: {
    priceItem: {
      type: Number,
      default: null
    }
  }
}
</script>
