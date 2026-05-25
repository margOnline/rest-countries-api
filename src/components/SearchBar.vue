<script setup>
import { ref, watch } from 'vue'
import { state } from '@/store'
import { useDebounce } from '@/services/'
import SearchIcon from './SearchIcon.vue'

const emit = defineEmits(['searchForCountry'])
const search = ref('')

const handleSearch = useDebounce(async () => {
  const searchTerm = search.value.trim()
  state.value.isLoading = true
  if (!searchTerm) {
    state.value.hasError = false
    state.value.isLoading = false
    return
  }

  emit('searchForCountry', searchTerm)
}, 300)

watch(search, handleSearch)
</script>

<template>
  <form @submit.prevent class="custom-shadow" autocomplete="off">
    <div>
      <span class="sr-only">Search for a country</span>
      <SearchIcon />
    </div>
    <input v-model="search" type="text" placeholder="Search for a country ..." />
  </form>
</template>

<style scoped>
form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 500px;
  background-color: var(--secondary-color);
  border-radius: 0.5rem;
  border: none;
  overflow: hidden;
}
input {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1rem;
  background-color: var(--secondary-color);
}
input::placeholder {
  color: var(--primary-color);
}
input:focus {
  outline: none;
}
button {
  border: none;
  border-radius: 0rem;
  background-color: var(--secondary-color);
  padding-block: 0;
}
svg {
  padding-block-start: 0.25rem;
}
</style>
