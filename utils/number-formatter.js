export function numberFormatter(
  value,
  locale = 'en-US',
  options = {
      style: 'currency',
      currency: 'USD'
  },
) {
  return new Intl.NumberFormat(locale, options).format(value)
}
