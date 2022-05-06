<template>
  <div class="border-b-2 border-sr-read-only w-full">
    <input
      style="background:none;"
      :type="type"
      :placeholder="placeholder" class="w-full px-2 py-4 focus:outline-none"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'Input',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  props: {
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Isi ... anda'
    },
    modelValue: {
      type: String,
      default: ''
    }
  }
}
</script>
