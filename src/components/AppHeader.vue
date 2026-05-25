<script setup>
import { state } from '@/store'
import { switchTheme } from '@/services/helpers'
import SunIcon from './SunIcon.vue'
import MoonIcon from './MoonIcon.vue'

const lightDarkMode = () => {
  return state.value.darkMode ? 'Dark' : 'Light'
}
const toggleMode = () => {
  state.value.darkMode = !state.value.darkMode
  switchTheme()
}
</script>
<template>
  <header>
    <div class="title">Where in the world?</div>
    <div class="mode-switch">
      <button @click="toggleMode">
        <SunIcon v-if="!state.darkMode" />
        <MoonIcon v-if="state.darkMode" />
        {{ lightDarkMode() }} Mode
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  border-bottom: 1px solid var(--bg_accent-color);
  background-color: var(--secondary-color);
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: var(--secondary-color);
  color: var(--primary-color);
}
.mode-switch:hover {
  border: 2px solid var(--bg_accent-color);
  background-color: var(--primary-color);
  border-radius: 0.5rem;
}
.title {
  font-weight: bold;
  font-size: 1.25rem;
}
</style>
