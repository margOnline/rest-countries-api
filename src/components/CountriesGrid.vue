<script setup>
import { state } from '../store/store'
import { getCountries, allCountriesEndpoint, getCountryByName } from '@/services/request-client'
import { setUpCountryStore } from '@/services/country-service'
import AppHeader from './AppHeader.vue'
import CountryCardSummary from './CountryCardSummary.vue'
import FilterSelect from '@/components/FilterSelect.vue'
import SearchBar from '@/components/SearchBar.vue'

getCountries(allCountriesEndpoint).then((data) => setUpCountryStore(data))

const filterCountriesByRegion = async (region) => {
  state.value.currentRegion = region
  const endpoint = state.value.regions.find((r) => r === region)
    ? `region/${region}`
    : allCountriesEndpoint
  const data = await getCountries(endpoint)
  state.value.countries = data
  state.value.isDropdownActive = false
}

const getCountryInfo = async (searchTerm) => {
  console.log('countryinfo: ', searchTerm)

  try {
    const result = await getCountryByName(searchTerm)
    state.value.hasError = result.length === 0
    console.log('result: ', result)
    state.value.countries = result
  } catch (error) {
    console.error(error)
    state.value.hasError = true
  } finally {
    state.value.isLoading = false
  }
}
</script>

<template>
  <div>
    <AppHeader />
    <div class="actions">
      <SearchBar @searchForCountry="getCountryInfo" />
      <FilterSelect @filterCountries="filterCountriesByRegion" />
    </div>
    <main>
      <CountryCardSummary
        v-for="country in state.countries"
        :key="country?.name?.common.toLowerCase()"
        :country="country"
      />
    </main>
  </div>
</template>

<style scoped>
.dark {
  background-color: var(--blue-950);
}

main {
  padding: 1rem;
  margin-inline: 1rem;
  display: grid;
  gap: 1rem;
  font-size: var(--overview-font-size);
}
.modeToggler {
  text-transform: capitalize;
}
.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
}
.icon {
  font-size: 1.25rem;
  color: var(--grey-400);
}
.modeToggler {
  background-color: var(--white);
  cursor: pointer;
  border: none;
}
@media (min-width: 30rem) {
  main {
    grid-template-columns: repeat(2, 1fr);
  }
  .actions {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media (min-width: 48rem) {
  main {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
