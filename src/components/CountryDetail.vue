<script setup>
import { ref } from 'vue'
import { getCountry } from '@/services/request-client'
import { formatCurrencies, formatLanguages } from '@/services/country-service'
import { formatNumber } from '@/services/helpers'
import { state } from '@/store/store'
import GoBack from './GoBack.vue'
import AppHeader from './AppHeader.vue'

const props = defineProps({
  code: { type: String, required: true },
})
const country = ref({})

getCountry(props.code).then((data) => (country.value = data))
</script>

<template>
  <div>
    <AppHeader />
    <GoBack />
    <div class="country-card">
      <div class="country-flag"><img :src="country?.flags?.svg" :alt="country?.flags?.alt" /></div>
      <div class="country-info">
        <h2>{{ country?.name?.common }}</h2>
        <div class="country-details">
          <div class="country-detail-left">
            <p><span>Native Name: </span>{{ country?.name?.official }}</p>
            <p><span>Population: </span>{{ formatNumber(country?.population) }}</p>
            <p><span>Region: </span>{{ country?.region }}</p>
            <p><span>Sub Region: </span>{{ country?.subregion }}</p>
            <p><span>Capital: </span>{{ country?.capital?.join(', ') }}</p>
          </div>
          <div class="country-detail-right">
            <p><span>Top Level Domain: </span>{{ country?.tld?.join(', ') }}</p>
            <p><span>Currencies: </span>{{ formatCurrencies(country?.currencies) }}</p>
            <p><span>Languages: </span>{{ formatLanguages(country?.languages) }}</p>
          </div>
        </div>
        <div class="country-borders">
          <h4>Border Countries:</h4>
          <ul role="list" v-if="country?.borders">
            <li v-for="border in country?.borders" :key="border" class="border-country">
              {{ state.countryCodeToName[border] }}
            </li>
          </ul>
          <div v-else>None</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.country-card {
  margin: 1rem;
  font-size: var(--detail-font-size);
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}
.country-details p span {
  font-weight: bold;
}
.country-borders ul {
  display: flex;
  justify-content: flex-start;
  row-gap: 0.5rem;
  flex-wrap: wrap;
}
.country-borders li {
  font-size: 0.725rem;
  margin-inline-start: 1rem;
  border: 1px solid var(--grey-250);
  padding: 0.325rem 1rem;
}
img {
  width: 100%;
  border-radius: 0.5rem;
}

@media (min-width: 30rem) {
  .country-details {
    display: flex;
    gap: 2rem;
    justify-content: flex-start;
  }
  .country-borders {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  img {
    border-radius: 0.5rem;
  }
}
@media (min-width: 48rem) {
  .country-card {
    display: gap;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
