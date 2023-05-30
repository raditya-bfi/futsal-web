import { round, get, replace } from 'lodash-es'

export const thousandSeparator = (
  number,
  decimalPlaces = 1,
  isDecimalShown = false,
  decimalSep = ',',
  thousandSep = '.',
) => {
  let fixed = round(number, decimalPlaces)

  if (isDecimalShown) {
    fixed = fixed.toFixed(decimalPlaces)
  }

  const parts = decimalPlaces > 0 ? fixed.toString().split('.') : [fixed]
  parts[0] = replace(get(parts, 0), /\B(?=(\d{3})+(?!\d))/g, thousandSep)
  return parts.join(decimalSep)
}
