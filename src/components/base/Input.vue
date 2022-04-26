<template>
  <div class="border-b-2 border-sr-read-only w-full">
    <input
      style="background:none;"
      :type="type"
      :placeholder="placeholder" class="w-full px-2 py-4 focus:outline-none"
    >
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Isi ... anda'
    }
  }
}
</script>
