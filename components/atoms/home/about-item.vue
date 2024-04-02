<template>
  <div class="about-item">
    <div class="logo-container">
      <img :src="image">
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="def-text">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
defineProps({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.logo-container {
  border-radius: 20px;
  background: #008CFF;
  height: 176px;
  @apply flex items-center justify-center w-full;
}

.title {
  color: #008CFF;
  font-family: satoshi-black;
  @apply text-2xl font-semibold;
}

.about-item {
  min-height: 400px;
  width: 400px;
  border-radius: 20px;
  padding: 24px;
  background: #F7F9FC;
  @apply flex flex-col justify-start sm:items-start items-center sm:text-justify text-center gap-3;
}

</style>
