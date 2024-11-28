import { expect, test } from 'vitest'
import { wrapping } from './solution.js'

test('challenge 2022/01', () => {
  const gifts = ['cat', 'game', 'socks']
  const wrapped = wrapping(gifts)

  expect(wrapped).toEqual([
    "*****\n*cat*\n*****",
    "******\n*game*\n******",
    "*******\n*socks*\n*******"
  ])
})
