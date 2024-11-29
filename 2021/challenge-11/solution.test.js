import { expect, test } from 'vitest'
import { shouldBuyFidelity } from './solution.js'

test('challenge 2021/11', () => {
  const examples = [
    1,
    100
  ]

  const results = examples.map(shouldBuyFidelity)

  expect(results).toEqual([
    false,
    true
  ])
})
