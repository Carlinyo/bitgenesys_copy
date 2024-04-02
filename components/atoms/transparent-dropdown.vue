<template>
  <o-dropdown v-model="active">
    <template #trigger>
      <div class="cursor-pointer flex items-center gap-2">
        {{ active }}
        <img src="/images/icons/dropdown-icon.png">
      </div>
    </template>
    <o-dropdown-item v-for="(item, index) of items" :key="index" aria-role="listitem" :label="item" :value="item">
      <div>
        {{ item }}
      </div>
    </o-dropdown-item>
  </o-dropdown>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
const active = ref('En')
</script>

<style lang="scss" scoped>
:deep(.o-drop__menu) {
  padding: 0 !important;
}
:deep(.o-drop__item) {
  background: #fff;
}
</style>
