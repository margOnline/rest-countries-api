<script setup>
import { ref } from 'vue'
import SearchIcon from './SearchIcon.vue'
const search = ref('')
</script>

<template>
  <form @submit.prevent class="custom-shadow" autocomplete="off">
    <button>
      <SearchIcon />
    </button>
    <input
      v-model="search"
      type="text"
      placeholder="Search for a country..."
      @keyup="handleSearch"
    />
  </form>
</template>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  background-color: var(--white);
  color: var(--grey-400);
  border-radius: 0.25rem;
  border: none;
  overflow: hidden;
}
input {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1rem;
}
input::placeholder {
  color: var(--grey-350);
}
input:focus {
  outline: none;
}
button {
  border: none;
}
svg {
  padding-block-start: 0.25rem;
}
</style>
