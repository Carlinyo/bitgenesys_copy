<template>
  <div class="footer container-alignment">
    <div class="detail icons">
        <div class="icons-container">
            <img v-for="(icon, index) of icons" :key="index" :src="icon" class="icon">
        </div>
        <div class="def-text footer-def-text">Copyright © BitGenisis.io 2023</div>
    </div>
    <div class="detail sm:items-end items-start">
        <div class="def-text footer-def-text">Stay in the Loop, Sign Up for Our Newsletter Today! </div>
        <div class="flex items-center justify-between gap-4">
            <input type="text" placeholder="Your email address here..." class="email-input">
            <custom-button variant="blue-btn">
              Subscribe
            </custom-button>
        </div>
    </div>
  </div>
</template>

<script setup>
import customButton from '~/components/atoms/custom-button.vue'
import icons from "~/data/icons.json"
</script>

<style lang="scss" scoped>
.footer {
  background: #F7F9FC;
  height: 350px;
  @apply mt-32 flex items-center justify-between;
}
.icons-container {
  @apply flex items-center justify-between gap-4;
}

.footer-def-text {
  letter-spacing: .3px;
  @apply ss:text-lg text-base font-semibold;
}

.icon {
  @apply cursor-pointer;
}

.email-input {
  border-radius: 12px;
  border: 1px solid #C5C5C5;
  height: 50px;
  width: 100%;
  padding-left: 15px;
}

.detail {
  @apply flex flex-col gap-4;
}

.icons {
  @apply sm:items-start items-center
}

@media (max-width: 1024px) {
  .footer {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 40px;
  }
}
</style>
