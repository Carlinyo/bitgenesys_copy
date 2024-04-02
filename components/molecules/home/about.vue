<template>
  <div class="flex justify-center items-center container-alignment flex-wrap gap-6 mt-20">
    <about-item v-for="(item, index) of aboutItems" :key="index" :image="item.image" :title="item.title" :description="item.description" />
  </div>
</template>

<script setup>
import aboutItems from '~/data/about-items.json'
import aboutItem from '~/components/atoms/home/about-item.vue'
</script>

<style lang="scss" scoped>

</style>
