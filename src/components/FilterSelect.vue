<script setup>
import { ref } from 'vue'
import { state } from '@/store'
import { constants } from '@/services/helpers'
import DownArrowIcon from './DownArrowIcon.vue'

const emit = defineEmits(['filterCountries'])
const regionFilters = [constants.allLabel].concat(state.value.regions)
const dropdownLabel = ref('Filter by region')
const toggleDropdown = () => {
  state.value.isDropdownActive = !state.value.isDropdownActive
}
const handleRegionSelect = (event) => {
  const region = event.target.textContent
  dropdownLabel.value = state.value.regions.includes(region) ? region : constants.filterLabel
  emit('filterCountries', region)
}
</script>

<template>
  <div class="filter-container custom-shadow">
    <button @click="toggleDropdown()">
      <span>{{ dropdownLabel }}</span>
      <DownArrowIcon />
    </button>
    <ul
      role="list"
      id="regionFilter"
      :class="['region-dropdown-content', { active: state.isDropdownActive }]"
    >
      <li
        v-for="region in regionFilters"
        :key="region.toLowerCase()"
        :value="region"
        @click="handleRegionSelect"
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
li {
  padding: 0.5rem;
}
.filter-container {
  position: relative;
  border-radius: 0.5rem;
  background-color: var(--secondary-color);
}
.filter-container button {
  background-color: var(--secondary-color);
  width: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border: none;
  margin-block-start: 0.5rem;
}
.region-dropdown-content {
  overflow: hidden;
  position: absolute;
  background-color: var(--secondary-color);
  top: 4rem;
  right: 0rem;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 10;
}
.region-dropdown-content.active {
  opacity: 1;
  transform: scaleY(1);
  visibility: visible;
  transition: all 0.3s ease;
}

@media (min-width: 30rem) {
  .filter-container {
    width: 30%;
  }
}
</style>
