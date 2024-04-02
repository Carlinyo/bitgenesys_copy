<template>
  <div class="trusted-companies-container">
    <div class="title satishi-light-text font-semibold">
      <p>
        Trusted by great companies
      </p>
    </div>
    <div class="trusted-companies-details container-alignment">
      <img src="/images/icons/arrow-left-wl.png" class="arrow left-arrow" @click="prev">
      <img src="/images/icons/arrow-right-wl.png" class="arrow right-arrow" @click="next">
      <o-carousel
        v-model="selectedCompany"
        :arrow="false"
        :items-to-show="itemsToShow"
        :indicator="false"
        :items-to-list="1"
        :repeat="false"
        :has-drag="true"
        :has-grayscale="false"
        :has-opacity="false"
      >
        <o-carousel-item v-for="(props, index) of companies" :key="index" class="flex justify-center items-center h-full">
          <logo :logo="props.logo" :name="props.text" />
        </o-carousel-item>    
      </o-carousel>
    </div>
  </div>
</template>

<script setup>
import companies from '~/data/trusted-companies.json'
import logo from '~/components/atoms/logo.vue'
import { useBreakpoints } from '@vueuse/core'
import { BreakPoint } from '~/model/break-points'

const selectedCompany = ref(0)

const breakpoints = useBreakpoints(BreakPoint)

const isSmall = breakpoints.smaller('md')

const next = () => {
  if (selectedCompany.value < companies.length - 1) selectedCompany.value++
}

const prev = () => {
  if (selectedCompany.value > 0) selectedCompany.value--
}

const itemsToShow = computed(() => {
  return isSmall.value ? 1 : 3
})

</script>

<style lang="scss" scoped>
.trusted-companies-container {
  background: #F7F9FC;
  @apply mt-20 py-24;
}

:deep(.o-car__items) {
  height: 120px;
}

.trusted-companies-details {
  margin-top: 50px;
  background: #008CFF;
  height: 120px;
  position: relative;
}

.title {
  color: #333;
  p {
    border-bottom: 2px solid #008CFF;
    padding: 4px
  }
  @apply flex justify-center items-center text-center text-xl;
}

.arrow {
  @apply absolute top-0 bottom-0 m-auto cursor-pointer z-10;
}

.left-arrow {
  @screen md {
    left: 40px;
  }
  @screen lg {
    left: 144px;
  }
  @screen xl {
    left: 13%;
  }
  @screen 2xl {
    left: 15%;
  }
  left: 20px;
}

.right-arrow {
  @screen md {
    right: 40px;
  }
  @screen lg {
    right: 144px;
  }
  @screen xl {
    right: 13%;
  }
  @screen 2xl {
    right: 15%;
  }
  right: 20px;
}

</style>
