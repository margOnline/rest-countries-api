<script setup>
import { state } from '@/store/store'

const lightDarkMode = () => {
  return state.value.darkMode ? 'dark' : 'light'
}
const toggleMode = () => {
  state.value.darkMode = !state.value.darkMode
}
</script>
<template>
  <header>
    <div class="title">Where in the world?</div>
    <div class="mode-switch">
      <button @click="toggleMode" class="modeToggler">
        <font-awesome-icon icon="fa-regular fa-moon" class="icon" />
        {{ lightDarkMode() }} Mode
      </button>
    </div>
  </header>
</template>
