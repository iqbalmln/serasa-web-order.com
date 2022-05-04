<template>
  <div :class="isProses" class="flex gap-2 items-center py-2 px-4 rounded">
    <Icon icon="bxs-check-circle" class="text-2xl" />
    <span class="text-sm">Selesai</span>
  </div>
</template>

<script>

import Icon from '../base/Icon.vue'

export default {
  name: 'Status',
  
  components: {
    Icon
  },

  data () {
    return {
      pending: 'berhasil'
    }
  },

  computed: {
    isProses() {
      return this.pending == 'pending' ? 'text-yellow-500' : 'text-sr-green bg-sr-bg-success'
    }
  }
}
</script>
