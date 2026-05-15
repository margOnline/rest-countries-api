import { state } from '@/store/store'

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
export const countrySort = async (data) => {
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
const capitalise = (word) => {
  word.charAt(0).toUpperCase() + word.slice(1)
}
