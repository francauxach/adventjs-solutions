import { expect, test } from 'vitest'
import { listGifts } from './solution.js'

test('challenge 2021/02', () => {
  const carta = 'bici coche balón _playstation bici coche peluche'
  const regalos = listGifts(carta)

  expect(regalos).toEqual({
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
  })
})
