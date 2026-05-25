import axios from 'axios'
import { countrySort } from '../services/'

const api = 'https://restcountries.com/v3.1/'
const axiosInstance = axios.create({
  baseURL: api,
  headers: { 'Content-Type': 'application/json' },
})

export const allCountriesEndpoint = 'all?fields=name,flags,population,region,capital,cca3'
const countryFields =
  'name,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3'

export const getCountries = async (endpoint = allCountriesEndpoint) => {
  const res = await axiosInstance.get(endpoint)
  return countrySort(res.data)
}

export const getCountryByCode = async (code) => {
  const res = await axiosInstance(`alpha/${code.toLowerCase()}`)
  return res.data[0]
}

export const getCountryByName = async (name) => {
  const res = await axiosInstance(`name/${name.toLowerCase()}?fields=${countryFields}`)
  return res.data
}

export const getCountriesByRegion = async (region) => {
  const res = await axiosInstance(`region/${region}`)
  return res.data
}
