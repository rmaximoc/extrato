import { toMoney, toNumber } from 'vanilla-masker'

export const formatMoney = (entry: number) => {
  const moneyFormatter = {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$'
  }

  return toMoney(toNumber(entry), moneyFormatter)
}
