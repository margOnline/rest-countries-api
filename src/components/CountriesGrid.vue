<script setup>
import { state } from '../store'
import { getCountries, getCountryByName, getCountriesByRegion } from '@/services/request-client'
import { setUpCountryStore } from '@/services/country-service'
import AppHeader from './AppHeader.vue'
import CountryCardSummary from './CountryCardSummary.vue'
import FilterSelect from '@/components/FilterSelect.vue'
import SearchBar from '@/components/SearchBar.vue'
import NotFound from './NotFound.vue'

getCountries()
  .then((data) => setUpCountryStore(data))
  .catch((error) => console.error(error))

const filterCountriesByRegion = async (region) => {
  state.value.isLoading = true
  try {
    const data = state.value.regions.find((r) => r === region)
      ? await getCountriesByRegion(region)
      : await getCountries()
    state.value.countries = data
    state.value.isDropdownActive = false
  } catch (error) {
    console.error(error)
    state.value.hasError = true
  } finally {
    state.value.isLoading = false
    state.value.currentRegion = null
  }
}

const fetchCountry = async (searchTerm) => {
  state.value.isLoading = true
  state.value.hasError = false
  try {
    const result = await getCountryByName(searchTerm)
    state.value.hasError = result.length === 0
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
  <div v-if="state.hasError">
    <NotFound />
  </div>

  <div v-else>
    <AppHeader />
    <div class="actions">
      <SearchBar @searchForCountry="fetchCountry" />
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
