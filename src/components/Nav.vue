<template>
  <div class="w-full px-4 bg-sr-green">
    <div class="relative flex gap-2 py-6">
      <slot name="icon" />
      <div class="flex items-center gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span class="text-sm text-white">Supported by</span>
        <div>
          <img src="@/assets/logo-white.png" alt="Logo Majoo Putih">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import Icon from './base/Icon.vue'

export default {
  name: 'Nav',

  components: {
    // Icon
  }
}
</script>

<style>

</style>