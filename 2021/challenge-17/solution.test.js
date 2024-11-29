import { expect, test } from 'vitest'
import { countPackages } from './solution.js'

test('challenge 2021/17', () => {
  const examples = [
    [
      [
        ['dapelu', 5, ['midu', 'jelowing']],
        ['midu', 2, []],
        ['jelowing', 2, []]
      ],
      'dapelu'
    ],
    [
      [
        ['lolivier', 8, ['camila', 'jesuspoleo']],
        ['camila', 5, ['sergiomartinez', 'conchaasensio']],
        ['jesuspoleo', 4, []],
        ['sergiomartinez', 4, []],
        ['conchaasensio', 3, ['facundocapua', 'faviola']],
        ['facundocapua', 2, []],
        ['faviola', 1, []]
      ],
      'camila'
    ]
  ]

  const results = examples.map(([input, target]) => countPackages(input, target))

  expect(results).toEqual([
    9,
    15
  ])
})
