import { expect, test } from 'vitest'
import { pangram } from './solution.js'

test('challenge 2021/20', () => {
  const examples = [
    'Extraño pan de col y kiwi se quemó bajo fugaz vaho',
    'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!',
    'Esto es una frase larga pero no tiene todas las letras del abecedario',
    'De la a a la z, nos faltan letras'
  ]

  const results = examples.map(pangram)

  expect(results).toEqual([
    true,
    true,
    false,
    false
  ])
})
