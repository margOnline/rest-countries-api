<script setup>
import { ref } from 'vue'
import { state } from '@/store/store'
import DownArrowIcon from './DownArrowIcon.vue'

const emit = defineEmits(['filterCountries'])
const regionFilters = ['--All--'].concat(state.value.regions)
// const regionFilters = ['--All--', 'Africa', 'Antarctic', 'America', 'Asia', 'Europe', 'Oceania']
const dropdownLabel = ref('')
const toggleDropdown = () => {
  state.value.isDropdownActive = !state.value.isDropdownActive
  dropdownLabel.value = state.value.currentRegion ? state.value.currentRegion : 'Filter by region'
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
.filter-container {
  display: flex;
  justify-content: end;
}
.filter-container button {
  font-size: 1rem;
  background-color: var(--white);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
}
.custom-shadow {
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.05);
}
.region-dropdown-content {
  overflow: hidden;
  position: absolute;
  background-color: var(--white);
  top: 5.5rem;
  right: 1rem;
  width: 30%;
  visibility: hidden;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  transition:
    opacity 0.3s ease,
    visibility 0s ease 0.3s;
  z-index: 10;
}
.region-dropdown-content.active {
  opacity: 1;
  transform: scaleY(1);
  visibility: visible;
  transition:
    opacity 0.3s ease,
    visibility 0s ease;
}

@media (min-width: 30rem) {
  .filter-container {
    width: 30%;
  }
}
</style>
