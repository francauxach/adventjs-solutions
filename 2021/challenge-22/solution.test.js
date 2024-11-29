import { expect, test } from 'vitest'
import { countDecorations } from './solution.js'

test('challenge 2021/22', () => {
  const examples = [
    {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    },
    {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null
        },
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    }
  ]

  const results = examples.map(countDecorations)

  expect(results).toEqual([
    6,
    28
  ])
})
