<script setup>
import { ref } from 'vue'
import { regions } from '@/utils/helper'

const emit = defineEmits(['filterCountries'])
const regionFilters = ['--All--'].concat(regions)
const isDropdownOpen = ref(false)
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<template>
  <div class="filter-container">
    <button @click="toggleDropdown()">
      <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" />
    </button>
    <ul role="list" v-if="isDropdownOpen" id="regionFilter">
      <li
        v-for="region in regionFilters"
        :key="region.toLowerCase()"
        :value="region"
        @click="emit('filterCountries', region)"
      >
        {{ region }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding: 1rem;
}
</style>
