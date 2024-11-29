export function distributeGifts(packOfGifts, reindeers) {
  const giftsWeight = packOfGifts.reduce((acc, gift) => acc + gift.length, 0)

  const maxWeight = reindeers.reduce((acc, reindeer) => acc + (2 * reindeer.length), 0)

  return Math.floor(maxWeight / giftsWeight)
}
