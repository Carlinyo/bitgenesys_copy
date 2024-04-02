<template>
  <div class="container-alignment">
    <div class="contact-banner">
      <div class="banner-title h1-text">
        Let's shape the future of digital finance together!
      </div>
      <custom-button variant="white-btn" class="gap-2 font-bold banner-btn">
        Contact Us <img src="/images/icons/arrow-right-black.png">
      </custom-button>
    </div>
  </div>
</template>

<script setup>
import customButton from '~/components/atoms/custom-button.vue'
</script>

<style lang="scss" scoped>
.contact-banner {
  border-radius: 12px;
  background: #008CFF;
  height: 300px;
  @apply flex flex-col sm:items-start items-center justify-center gap-6 sm:p-12 p-4 mt-20;
}

.banner-title {
  @screen sm {
    width: 80%;
  }
  @apply w-full md:text-5xl text-4xl sm:text-start text-white text-center;
}

.banner-btn {
  @screen sm {
    width: 180px !important;
  }
  width: 160px !important;
}
</style>
