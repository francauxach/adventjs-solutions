import { expect, test } from 'vitest'
import { fitsInOneBox } from './solution.js'

test('challenge 2022/04', () => {
  const examples = [
    [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ],
    [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ],
    [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ]
  ]

  const result = examples.map(fitsInOneBox)

  expect(result).toEqual([
    true,
    false,
    true
  ])
})
