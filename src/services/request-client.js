import { countrySort } from '../services/country-service'
import { state } from '@/store/store'
const api = 'https://restcountries.com/v3.1/'

export const allCountriesEndpoint = 'all?fields=name,flags,population,region,capital,cca3'

export const getCountries = async (endpoint) => {
  const url = api + endpoint
  const res = await fetch(url)
  const data = await res.json()
  const sortedData = await countrySort(data)

  return sortedData
}

export const getCountry = async (code) => {
  state.value.isLoading = true
  state.value.hasError = false
  try {
    const res = await fetch(`${api}alpha/${code.toLowerCase()}`)
    const data = await res?.json()
    return data?.[0]
  } catch (error) {
    console.error('Error getting country: ', error)
    state.value.hasError = true
  } finally {
    state.value.isLoading = false
  }
}
