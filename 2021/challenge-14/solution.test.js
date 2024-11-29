import { expect, test } from 'vitest'
import { missingReindeer } from './solution.js'

test('challenge 2021/14', () => {
  const examples = [
    [0, 2, 3],
    [5, 6, 1, 2, 3, 7, 0],
    [0, 1],
    [3, 0, 1],
    [9, 2, 3, 5, 6, 4, 7, 0, 1],
    [0]
  ]

  const results = examples.map(missingReindeer)

  expect(results).toEqual([
    1,
    4,
    2,
    2,
    8,
    1
  ])
})
