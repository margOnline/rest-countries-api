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
