<script setup>
import { ref, watch, defineEmits } from 'vue'
import { state } from '@/store/store'
import { getCountryByName } from '@/services/request-client'
import { useDebounce } from '@/services/helpers'
import SearchIcon from './SearchIcon.vue'

const emit = defineEmits(['searchForCountry'])
const search = ref('')

const handleSearch = useDebounce(async () => {
  console.log('searchTerm: ', search.value)
  const searchTerm = search.value.trim()
  state.value.isLoading = true
  if (!searchTerm) {
    state.value.hasError = false
    state.value.isLoading = false
    return
  }

  try {
    const result = await getCountryByName(search.value.trim())
    state.value.hasError = result.length === 0
    console.log('cresult: ', result)
    state.value.countries = result
  } catch (error) {
    console.error(error)
    state.value.hasError = true
  } finally {
    state.value.isLoading = false
  }
}, 300)

watch(search, handleSearch)
</script>

<template>
  <form @submit.prevent class="custom-shadow" autocomplete="off">
    <button class="h-full px-4">
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
  max-width: 500px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  padding-block: 0.25rem;
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
  padding-inline: 0.25rem;
}
button {
  border: none;
}
</style>
