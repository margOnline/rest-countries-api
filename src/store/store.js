import { ref } from 'vue'
export const state = ref({
  countries: [],
  regions: [],
  countryCodeToName: {},
  darkMode: false,
  currentRegion: '',
})
