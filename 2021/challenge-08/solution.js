export function maxProfit(prices) {
  let maxProfitNumber = -1
  let shiftedPrices = [...prices]

  prices.forEach(() => {
    shiftedPrices.reduce((prevValue, currentValue) => {
      const difference = currentValue - prevValue

      if (difference > 0 && difference > maxProfitNumber) {
        maxProfitNumber = currentValue - prevValue
      }

      return prevValue
    })

    shiftedPrices.shift()
  })

  return maxProfitNumber
}
