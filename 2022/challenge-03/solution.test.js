import { expect, test } from 'vitest'
import { distributeGifts } from './solution.js'

test('challenge 2022/03', () => {
  const packOfGifts = ["book", "doll", "ball"]
  const reindeers = ["dasher", "dancer"]

  const result = distributeGifts(packOfGifts, reindeers)

  expect(result).toEqual(2)
})
