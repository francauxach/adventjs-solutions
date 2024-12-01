import { expect, test } from 'vitest'
import { getMaxGifts } from './solution.js'

test('challenge 2022/05', () => {
  const examples = [
    [[12, 3, 11, 5, 7], 20, 3],
    [[50], 15, 1],
    [[50], 100, 1],
    [[50, 70], 100, 1],
    [[50, 70, 30], 100, 2],
    [[50, 70, 30], 100, 3],
    [[50, 70, 30], 100, 4],
  ]

  const result = examples.map(([giftsCities, maxGifts, maxCities]) =>
    getMaxGifts(giftsCities, maxGifts, maxCities)
  )

  expect(result).toEqual([
    20,
    0,
    50,
    70,
    100,
    100,
    100
  ])
})
