import { expect, test } from 'vitest'
import { prepareGifts } from './solution.js'

test('challenge 2024/01', () => {
  const examples = [
    [3, 1, 2, 3, 4, 2, 5],
    [6, 5, 5, 5, 5],
    []
  ]

  const results = examples.map(prepareGifts)

  expect(results).toEqual([
    [1, 2, 3, 4, 5],
    [5, 6],
    []
  ])
})
