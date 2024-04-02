<template>
  <button class="custom-button" :class="variant">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.custom-button {
  height: 50px;
  width: 140px;
  font-family: satoshi-black;
  @apply flex items-center justify-center ss:text-base text-sm px-2;
}

.white-btn {
  border-radius: 39px;
  background: white;
}

.blue-btn {
  border-radius: 8px;
  background: #008CFF;
  @apply text-white;
}
</style>
