import { countrySort } from '../services/country-service'
import { state } from '@/store/store'
const api = 'https://restcountries.com/v3.1/'

export const allCountriesEndpoint = 'all?fields=name,flags,population,region,capital,cca3'
const fields =
  'name,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3'

export const getCountries = async (endpoint) => {
  state.value.isLoading = true
  state.value.hasError = false
  const url = api + endpoint

  try {
    const res = await fetch(url)
    const data = await res.json()
    const sortedData = await countrySort(data)

    return sortedData
  } catch (error) {
    console.error('Error getting countries: ', error)
    state.value.hasError = true
  } finally {
    state.value.isLoading = false
  }
}

export const getCountryByCode = async (code) => {
  state.value.isLoading = true
  state.value.hasError = false
  try {
    const res = await fetch(`${api}alpha/${code.toLowerCase()}`)
    const data = await res?.json()
    return data?.[0]
  } catch (error) {
    console.error('Error getting country, code: ', code, 'Error: ', error)
    state.value.hasError = true
  } finally {
    state.value.isLoading = false
  }
}

export const getCountryByName = async (name) => {
  state.value.isLoading = true
  state.value.hasError = false
  try {
    const res = await fetch(`${api}name/${name.toLowerCase()}?fields=${fields}`)
    const data = await res?.json()
    return data
  } catch (error) {
    console.error('Error getting country, name: ', name, 'Error: ', error)
    state.value.hasError = true
  } finally {
    state.value.isLoading = false
  }
}
