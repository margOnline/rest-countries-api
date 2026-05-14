import { state } from '@/store/store'

export const setUpCountryStore = (data) => {
  state.value.countries = data
}
export const countrySort = async (data) => {
  const sorted = data.sort((a, b) => a.name.common.localeCompare(b.name.common, 'en'))
  return sorted
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
export const getBorderCountries = (borders) => {
  console.log('borders: ', borders)
  const countries = borders?.map((code, _) => findCountryByCode(code))
  console.log('border coutnries: ', countries)
  return countries
}
const capitalise = (word) => {
  word.charAt(0).toUpperCase() + word.slice(1)
}
const findCountryByCode = (code) => {
  console.log('code: ', code)
  const country = state.value.countries.find((country) => country.cca3 === code)
  console.log('country: ', country)
  return country.name.common
}
