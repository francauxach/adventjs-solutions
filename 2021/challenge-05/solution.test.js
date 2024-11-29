import { expect, test } from 'vitest'
import { daysToXmas } from './solution.js'

test('challenge 2021/05', () => {
  const examples = [
    new Date('Dec 1, 2021'),
    new Date('Dec 24, 2021 00:00:01'),
    new Date('Dec 24, 2021 23:59:59'),
    new Date("December 20, 2021 03:24:00"),
    new Date('Dec 25, 2021'),
    new Date('Dec 26, 2021'),
    new Date('Dec 31, 2021'),
    new Date('Jan 1, 2022 00:00:01'),
    new Date('Jan 1, 2022 23:59:59')
  ]

  const results = examples.map(daysToXmas)

  expect(results).toEqual([
    24,
    1,
    1,
    5,
    0,
    -1,
    -6,
    -7,
    -7
  ])
})
