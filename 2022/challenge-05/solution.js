export function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let maxGiftsFound = 0

  const getCombinations = (index = 0, citiesCount = 0, currentSum = 0) => {
    if (citiesCount > maxCities || currentSum > maxGifts) {
      return
    }

    maxGiftsFound = Math.max(maxGiftsFound, currentSum)

    for (let i = index; i < giftsCities.length; i++) {
      getCombinations(i + 1, citiesCount + 1, currentSum + giftsCities[i])
    }
  }

  getCombinations()
  return maxGiftsFound
}
