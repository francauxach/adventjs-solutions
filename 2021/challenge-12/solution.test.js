import { expect, test } from 'vitest'
import { getMinJump } from './solution.js'

test('challenge 2021/12', () => {
  const examples = [
    [5, 3, 6, 7, 9],
    [2, 4, 6, 8, 10],
    [1, 2, 3, 5],
    [3, 7, 5],
    [9, 5, 1]
  ]

  const results = examples.map(getMinJump)

  expect(results).toEqual([
    4,
    7,
    4,
    2,
    2
  ])
})
