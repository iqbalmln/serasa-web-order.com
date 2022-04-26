<template>
  <i :class="`bx ${icon}`" @click="$emit('click')" />
</template>

<script>
export default {
  name: 'Icon',

  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
