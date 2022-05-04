<template>
  <div class="flex justify-between items-end mb-6 pb-6 border-b border-sr-read-only">
    <div class="flex gap-4">
      <div class="w-16 h-16">
        <img :src="src" class="object-cover" >
      </div>
      <div>
        <p class="text-sm font-semibold">
          {{ title }}
        </p>
        <p class="text-xs">
          {{ note }}
        </p>
        <p class="text-sm font-semibold">
          {{ unit }}
        </p>
      </div>
    </div>
    <p class="text-sm font-semibold">{{ `Rp. ${price}` }}</p>
  </div>  
</template>

<script>
export default {
  name: 'MenuItem',

  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    note: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
}
</script>
