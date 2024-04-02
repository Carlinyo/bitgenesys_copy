<template>
  <div class="flex items-center gap-2">
    <img :src="logo">
    <img :src="name">
  </div>
</template>

<script setup>
defineProps({
    logo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>

@media (max-width: 540px) {
  img {
    max-width: 80%;
  }
}
</style>
