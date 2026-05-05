const api = 'https://restcountries.com/v3.1/'

export const allCountriesEndpoint = 'all?fields=name,flags,population,region,capital,cca3'
export const regions = ['Americas', 'Europe', 'Oceania', 'Africa', 'Antarctic']

export const getCountries = async (endpoint) => {
  const url = api + endpoint
  const res = await fetch(url)
  const data = await res.json()

  const sortedData = await sort(data)

  return sortedData
}

const sort = async (data) => {
  const sorted = data.sort((a, b) => a.name.common.localeCompare(b.name.common, 'en'))
  return sorted
}
