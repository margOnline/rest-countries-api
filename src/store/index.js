import { ref } from 'vue'

export const state = ref({
  countries: [],
  regions: ['Africa', 'Antarctic', 'Americas', 'Asia', 'Europe', 'Oceania'],
  countryCodeToName: {},
  isLoading: false,
  isDropdownActive: false,
  hasError: false,
  darkMode: false,
  currentRegion: '',
})
