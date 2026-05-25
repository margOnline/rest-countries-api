import { ref, onUnmounted } from 'vue'
import { state } from '@/store'

export const constants = {
  allLabel: '--All--',
  filterLabel: 'Filter by region',
}
export const formatNumber = (number) => {
  return Intl.NumberFormat().format(number)
}
export const capitalise = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const switchTheme = () => {
  document.documentElement.setAttribute('data-theme', state.value.darkMode ? 'dark' : 'light')
}

export function useDebounce(fxn, delay) {
  // The purpose of this function is to apply
  // a delay before executing the passed function

  const timeoutID = ref(null)
  const debouncedFn = (...args) => {
    if (timeoutID.value !== null) {
      clearTimeout(timeoutID.value)
    }
    timeoutID.value = window.setTimeout(() => {
      fxn(...args)
    }, delay)
  }

  onUnmounted(() => {
    if (timeoutID.value !== null) {
      clearTimeout(timeoutID.value)
    }
  })

  return debouncedFn
}
