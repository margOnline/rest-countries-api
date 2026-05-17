import { ref } from 'vue'
export const allLabel = '--All--'

export const state = ref({
  countries: [],
  regions: [],
  countryCodeToName: {},
  isLoading: false,
  isDropdownActive: false,
  hasError: false,
  darkMode: false,
  currentRegion: '',
})
