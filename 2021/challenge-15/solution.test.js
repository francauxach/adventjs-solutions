import { expect, test } from 'vitest'
import { checkSledJump } from './solution.js'

test('challenge 2021/15', () => {
  const examples = [
    [1, 2, 3, 2, 1],
    [0, 1, 0],
    [0, 3, 2, 1],
    [0, 1000, 1],
    [2, 4, 4, 6, 2],
    [1, 2, 3],
    [1, 2, 3, 2, 1, 2, 3]
  ]

  const results = examples.map(checkSledJump)

  expect(results).toEqual([
    true,
    true,
    true,
    true,
    false,
    false,
    false
  ])
})
