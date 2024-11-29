import { expect, test } from 'vitest'
import { sumPairs } from './solution.js'

test('challenge 2021/06', () => {
  const examples = [
    [[3, 5, 7, 2], 10],
    [[-3, -2, 7, -5], 10],
    [[2, 2, 3, 1], 4],
    [[6, 7, 1, 2], 8],
    [[0, 2, 2, 3, -1, 1, 5], 6]
  ]

  const results = examples.map(([numbers, target]) => sumPairs(numbers, target))

  expect(results).toEqual([
    [3, 7],
    null,
    [2, 2],
    [6, 2],
    [1, 5]
  ])
})
