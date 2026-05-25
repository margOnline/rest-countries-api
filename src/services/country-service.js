import { state } from '@/store'
import { capitalise } from './helpers'

export const setUpCountryStore = (data) => {
  const countryCodes = {}
  const regions = []
  data.forEach((country) => {
    countryCodes[country.cca3] = country.name.common
    if (!regions.includes(country.region)) regions.push(country.region)
  })

  state.value.countryCodeToName = countryCodes
  state.value.regions = regions.sort()
  state.value.countries = data
}
export const countrySort = (data) => {
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common, 'en'))
}
export const formatCurrencies = (currencies) => {
  return currencies
    ? Object.values(currencies)
        .map((currency) => capitalise(currency.name))
        .join(', ')
    : null
}
export const formatLanguages = (languages) => {
  return languages ? Object.values(languages).join(', ') : null
}

export const regionFilterLabels = ['--All--'].concat(state.value.regions)
