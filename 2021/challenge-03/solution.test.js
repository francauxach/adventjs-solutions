import { expect, test } from 'vitest'
import { isValid } from './solution.js'

test('challenge 2021/03', () => {
  const examples = [
    "bici coche (balón) bici coche peluche",
    "(muñeca) consola bici",
    "bici coche (balón bici coche",
    "peluche (bici [coche) bici coche balón",
    "(peluche {) bici",
    "() bici"
  ]

  const results = examples.map(isValid)

  expect(results).toEqual([
    true,
    true,
    false,
    false,
    false,
    false
  ])
})
