<script setup>
const props = defineProps({
  country: Object,
})

const capitalFormatted = () => {
  return Array.isArray(props.country.capital) ? props.country.capital[0] : props.country.capital
}
</script>

<template>
  <div class="country-card">
    <img :src="props.country.flags.svg" :alt="props.country.flags.alt" />
    <div class="country-detail">
      <h2>{{ props.country.name.common }}</h2>
      <p><span>Population: </span>{{ props.country.population }}</p>
      <p><span>Region: </span>{{ props.country.region }}</p>
      <p><span>Capital: </span>{{ capitalFormatted() }}</p>
    </div>
  </div>
</template>

<style scoped>
.country-card {
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}
img {
  width: 100%;
  height: 10.25rem;
}
.country-detail {
  padding: 1rem;
  font-size: var(--detail-font-size);
}
</style>
