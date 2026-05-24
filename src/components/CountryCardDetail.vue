<script setup>
import { ref } from 'vue'
import { getCountryByCode } from '@/services/request-client'
import { formatCurrencies, formatLanguages } from '@/services/country-service'
import { formatNumber } from '@/services/helpers'
import { state } from '@/store/store'
import router from '@/router'
import GoBack from './GoBack.vue'
import AppHeader from './AppHeader.vue'

const props = defineProps({
  code: { type: String, required: true },
})
const country = ref({})

const searchForCountryInfo = async (code) => {
  state.value.isLoading = true
  state.value.hasError = false

  try {
    const data = await getCountryByCode(code)
    country.value = data
    router.replace(`/countries/${code}`)
  } catch (error) {
    console.error('Error getting country: ', error)
    state.value.hasError = true
  } finally {
    state.value.isLoading = false
  }
}

searchForCountryInfo(props.code)
</script>

<template>
  <div>
    <AppHeader />
    <GoBack class="push-right" />
    <div class="country-card">
      <div class="country-flag">
        <img
          v-lazy="{
            src: country?.flags?.svg,
          }"
          :alt="country?.flags?.alt"
        />
      </div>
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
        <div class="country-borders-container">
          <h4>Border Countries:</h4>
          <div v-if="country?.borders" class="country-borders">
            <button
              v-for="(border, index) in country?.borders"
              :key="index"
              class="border-country"
              @click="searchForCountryInfo(border)"
            >
              {{ state.countryCodeToName[border] }}
            </button>
          </div>
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
.country-borders-container {
  display: flex;
  justify-content: flex-start;
  row-gap: 0.5rem;
  flex-wrap: wrap;
  h4 {
    margin-inline-end: 1rem;
  }
}
.country-borders {
  display: flex;
  justify-content: flex-start;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  flex-wrap: wrap;
}
.border-country {
  background-color: var(--secondary-color);

  font-size: 0.725rem;
  border: 1px solid var(--bg_accent-color);
  padding: 0.325rem 1rem;
}
img {
  width: 100%;
  border-radius: 0.5rem;
}
.push-right {
  margin: 1rem;
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
