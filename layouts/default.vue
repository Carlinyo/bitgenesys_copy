<template>
  <div>
    <navbar />
    <slot />
    <my-footer />
  </div>
</template>

<script setup>
import navbar from '~/components/navbar.vue'
import myFooter from '~/components/footer.vue'
</script>

<style lang="scss" scoped>

</style>
