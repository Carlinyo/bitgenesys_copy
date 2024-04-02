<template>
  <div class="info-container">
    <div class="details">
      <div class="h1-text md:text-6xl text-3xl" style="color: #008CFF;">
        Experience the Next Dimension of Blockchain
      </div>
      <div class="def-text">
        BitGenesis is at the forefront of blockchain innovation, driving the evolution of digital finance. We empower visionary entrepreneurs and projects to thrive in the ever-changing blockchain landscape, creating a brighter digital future
      </div>
      <custom-button variant="blue-btn" style="width: 180px; gap: 8px; border-radius: 30px; font-size: 16px;">
        Contact Us <img src="/images/icons/arrow-right.png">
      </custom-button>
    </div>
  </div>
</template>

<script setup>
import customButton from '~/components/atoms/custom-button.vue'
</script>

<style lang="scss" scoped>
.info-container {
  background: #F7F9FC;
  padding: 5% 0;
  @apply flex items-center flex-col justify-center gap-6;
}

.details {
  @screen sm {
    width: 70%;
  }
  @screen md {
    width: 50%;
  }
  @apply flex items-center flex-col justify-center gap-6 text-center w-full;
}
</style>
