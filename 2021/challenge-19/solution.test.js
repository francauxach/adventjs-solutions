import { expect, test } from 'vitest'
import { learn } from './solution.js'

test('challenge 2021/19', () => {
  const examples = [
    [10, [2, 3, 8, 1, 4]],
    [15, [2, 10, 4, 1]],
    [25, [10, 15, 20, 5]],
    [8, [8, 2, 1]],
    [8, [8, 2, 1, 4, 3]],
    [4, [10, 14, 20]],
    [5, [5, 5, 5]]
  ]

  const results = examples.map(([number, files]) => learn(number, files))

  expect(results).toEqual([
    [0, 2],
    [1, 2],
    [0, 1],
    [1, 2],
    [3, 4],
    null,
    null
  ])
})
