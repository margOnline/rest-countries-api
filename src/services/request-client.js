import axios from 'axios'
import { countrySort } from '../services/country-service'
import { state } from '@/store/store'

const api = 'https://restcountries.com/v3.1/'
const axiosInstance = axios.create({
  baseURL: api,
  headers: { 'Content-Type': 'application/json}' },
})

export const allCountriesEndpoint = 'all?fields=name,flags,population,region,capital,cca3'
const countryFields =
  'name,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3'

export const getCountries = async (endpoint = allCountriesEndpoint) => {
  try {
    const res = await axiosInstance.get(endpoint)
    return countrySort(res.data)
  } catch (error) {
    throw error
  }
}

export const getCountryByCode = async (code) => {
  try {
    const res = await axiosInstance(`alpha/${code.toLowerCase()}`)
    return res.data[0]
  } catch (error) {
    throw error
  }
}

export const getCountryByName = async (name) => {
  try {
    const res = await axiosInstance(`name/${name.toLowerCase()}?fields=${countryFields}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getCountriesByRegion = async (region) => {
  try {
    const res = await axiosInstance(`region/${region}`)
    return res.data
  } catch (error) {
    throw error
  }
}
