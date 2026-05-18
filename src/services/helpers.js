import { ref, onUnmounted } from 'vue';

export const constants = {
  allLabel: '--All--',
  filterLabel: 'Filter by region',
}
export const formatNumber = (number) => {
  return Intl.NumberFormat().format(number)
}
export const capitalise = (word) => {
  word.charAt(0).toUpperCase() + word.slice(1)
}

export function useDebounce(fxn, delay) {
// Define a function that takes 2 arguments:
// 1. a function that can accept any number of arguments and returns a value of any type
// 2. the delay in ms before executing the function
  const timeoutID = ref(null);

  const debouncedFn = (...args) => {
    if (timeoutID.value !== null) {
      clearTimeout(timeoutID.value);
    }

    timeoutID.value = window.setTimeout(() => {
      fxn(...args);
    }, delay);
  };

  onUnmounted(() => {
    if (timeoutID.value !== null) {
      clearTimeout(timeoutID.value);
    }
  });

  return debouncedFn;
}