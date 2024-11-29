import { expect, test } from 'vitest'
import { canCarry } from './solution.js'

test('challenge 2021/21', () => {
  const examples = [
    [4, [[2, 5, 8], [3, 6, 10]]],
    [3, [[1, 1, 5], [2, 2, 10]]],
    [3, [[2, 1, 5],[3, 5, 7]]],
    [4, [[2, 3, 8],[2, 5, 7]]],
    [1, [[2, 3, 8]]],
    [2, [[1, 2, 4], [2, 3, 8]]]
  ]

  const results = examples.map(([number, items]) => canCarry(number, items))

  expect(results).toEqual([
    false,
    true,
    true,
    true,
    false,
    false
  ])
})
