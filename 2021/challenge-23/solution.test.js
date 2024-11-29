import { expect, test } from 'vitest'
import { canReconfigure } from './solution.js'

test('challenge 2021/23', () => {
  const examples = [
    ['BAL', 'LIB'],
    ['CON', 'JUU'],
    ['XBOX', 'XXBO'],
    ['XBOX', 'XOBX'],
    ['MMM', 'MID'],
    ['AA', 'MID']
  ]

  const results = examples.map(([from, to]) => canReconfigure(from, to))

  expect(results).toEqual([
    true,
    false,
    false,
    true,
    false,
    false
  ])
})
