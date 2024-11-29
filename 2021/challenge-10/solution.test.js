import { expect, test } from 'vitest'
import { getCoins } from './solution.js'

test('challenge 2021/10', () => {
  const examples = [
    51,
    3,
    5,
    16,
    100
  ]

  const results = examples.map(getCoins)

  expect(results).toEqual([
    [1, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 2]
  ])
})
