<template>
  <div class="p-6 flex flex-col gap-6 bg-white shadow-sr-drop-shadow rounded-lg">
    <div class="flex gap-3">
      <img
        class="w-24 flex-1"
        :src="src"
        alt=""
      >
      <div class="flex-1 text-left">
        <p class="text-sr-primary text-sm font-semibold">{{ name }}</p>
        <p class="pt-4 pb-2 text-xs text-sr-secondary">
          {{ description }}
        </p>
        <p class="text-sr-primary text-sm font-semibold">{{ formatPrice(price) }}</p>
      </div>
    </div>
    <Input type="textarea" placeholder="Catatan..." />
    <div class="flex items-center justify-around text-xl">
      <Icon @click="$emit('decrement')" icon="bx-minus-circle" class="text-sr-green" />
      <p class="text-sr-secondary">{{ quantity }}</p>
      <Icon @click="$emit('increment')" icon="bx-plus-circle" class="text-sr-green" />
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

  props: {
    src: {
      type: String,
      default: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      default: 0
    }
  },

	methods: {
		formatPrice (angka, prefix = "Rp") {
			var number_string = String(angka).replace(/[^,\d]/g, '').toString(),
			split   		= number_string.split(','),
			sisa     		= split[0].length % 3,
			rupiah     		= split[0].substr(0, sisa),
			ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
		
			// tambahkan titik jika yang di input sudah menjadi angka ribuan
			if(ribuan){
				const separator = sisa ? '.' : '';
				rupiah += separator + ribuan.join('.');
			}
		
			rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
			return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
		}
	}
}
</script>
