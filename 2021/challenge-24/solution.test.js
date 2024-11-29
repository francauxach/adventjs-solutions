import { expect, test } from 'vitest'
import { checkIsSameTree } from './solution.js'

test('challenge 2021/24', () => {
  const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
  }

  const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
  }

  const examples = [
    [tree, tree],
    [tree, tree2],
    [tree2, tree2]
  ]

  const results = examples.map(([a, b]) => checkIsSameTree(a, b))

  expect(results).toEqual([
    true,
    false,
    true
  ])
})
