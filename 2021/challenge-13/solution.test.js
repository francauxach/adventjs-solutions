import { expect, test } from 'vitest'
import { wrapGifts } from './solution.js'

test('challenge 2021/13', () => {
  const examples = [
    ["📷", "⚽️"],
    ["🏈🎸", "🎮🧸"],
    ["📷"]
  ]

  const results = examples.map(wrapGifts)

  expect(results).toEqual([
    [
      '****',
      '*📷*',
      '*⚽️*',
      '****'
    ],
    [
      '******',
      '*🏈🎸*',
      '*🎮🧸*',
      '******'
    ],
    [
      '****',
      '*📷*',
      '****'
    ]
  ])
})
