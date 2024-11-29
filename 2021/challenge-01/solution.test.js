import { expect, test } from 'vitest'
import { contarOvejas } from './solution.js'

test('challenge 2021/01', () => {
  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  const ovejasFiltradas = contarOvejas(ovejas)

  expect(ovejasFiltradas).toEqual([
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' }
  ])
})
