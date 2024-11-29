import { expect, test } from 'vitest'
import { decodeNumber } from './solution.js'

test('challenge 2021/16', () => {
  const examples = [
    '...',
    '.,',
    ',.',
    ',...',
    '.........!',
    '.;',
    '..,',
    '..,!',
    '.;!',
    '!!!',
    ';!',
    ';.W'
  ]

  const results = examples.map(decodeNumber)

  expect(results).toEqual([
    3,
    4,
    6,
    8,
    107,
    49,
    5,
    95,
    49,
    300,
    50,
    NaN
  ])
})
