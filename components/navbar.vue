<template>
  <div class="navbar flex-element justify-between container-alignment">
    <logo v-if="!isMobile" logo="/images/landing/logo.png" name="/images/landing/bitgenesis.png" />
    <img v-else src="/images/landing/logo-sm.png">
    <div class="flex-element">
      <transparent-dropdown :items="langs" />
      <custom-button class="contact-btn" variant="blue-btn">
        CONTACT US
      </custom-button>
    </div>
  </div>
</template>

<script setup>
import logo from '~/components/atoms/logo.vue'
import transparentDropdown from '~/components/atoms/transparent-dropdown.vue'
import customButton from '~/components/atoms/custom-button.vue'
import langs from '~/data/langs.json'
import { useBreakpoints } from '@vueuse/core'
import { BreakPoint } from '~/model/break-points'

const breakPoints = useBreakpoints(BreakPoint)

const isMobile = computed(() => {
  return breakPoints.smallerOrEqual('ss').value
})
</script>

<style lang="scss" scoped>
.navbar {
  min-height: 70px;
}

.flex-element {
  @apply flex items-center gap-4;
}

@media (max-width: 540px) {
  .contact-btn {
    height: 40px;
    width: 110px;
  }
}
</style>
