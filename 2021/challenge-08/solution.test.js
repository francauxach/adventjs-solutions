import { expect, test } from 'vitest'
import { maxProfit } from './solution.js'

test('challenge 2021/08', () => {
  const examples = [
    [39, 18, 29, 25, 34, 32, 5],
    [10, 20, 30, 40, 50, 60, 70],
    [18, 15, 12, 11, 9, 7],
    [3, 3, 3, 3, 3]
  ]

  const results = examples.map(maxProfit)

  expect(results).toEqual([
    16,
    60,
    -1,
    -1
  ])
})
