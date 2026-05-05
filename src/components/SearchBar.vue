<script setup>
import { ref } from 'vue'
const searchLocation = ref('')
</script>

<template>
  <form class="search-form">
    <input type="text" placeholder="Search for a country..." v-model="searchLocation" />
    <button @click="findCountries" type="submit">Search</button>
    {{ searchLocation }}
  </form>
</template>

<style scoped></style>
