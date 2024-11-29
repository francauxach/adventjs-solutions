import { expect, test } from 'vitest'
import { contains } from './solution.js'

test('challenge 2021/07', () => {
  const examples = [
    [
      {
        'estanteria1': {
          'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
          }
        },
        'estanteria2': {
          'cajon1': 'vacio',
          'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta'
          }
        }
      },
      'camiseta'
    ],
    [
      {
        'baul': {
          'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
          }
        }
      },
      'gameboy'
    ]
  ]

  const results = examples.map(([storage, product]) => contains(storage, product))

  expect(results).toEqual([
    true,
    false
  ])
})
