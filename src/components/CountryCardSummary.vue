<script setup>
import { formatNumber } from '@/services/helpers'

const props = defineProps({
  country: Object,
})

const capitalFormatted = () => {
  return Array.isArray(props.country.capital) ? props.country.capital[0] : props.country.capital
}
</script>

<template>
  <article class="country-card custom-shadow">
    <router-link
      :to="{
        name: 'countries.show',
        params: { code: props?.country?.cca3 },
      }"
    >
      <img
        v-lazy="{
          src: props.country?.flags?.svg,
        }"
        :alt="props.country?.flags.alt"
      />

      <div class="country-detail">
        <h2>{{ props.country?.name?.common }}</h2>
        <p><span>Population: </span>{{ formatNumber(props.country?.population) }}</p>
        <p><span>Region: </span>{{ props.country?.region }}</p>
        <p><span>Capital: </span>{{ capitalFormatted() }}</p>
      </div>
    </router-link>
  </article>
</template>

<style scoped>
.country-card {
  font-size: var(--summary-font-size);
  border-radius: 0.5rem;
  overflow: hidden;

  transition: transform 0.2s ease-out;
  cursor: pointer;
}
.country-card:hover {
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  transform: translateY(-4px);
}
.country-card:hover:before {
  transform: scale(2.15);
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
