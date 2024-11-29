import { expect, test } from 'vitest'
import { countHours } from './solution.js'

test('challenge 2022/02', () => {
  const year = 2022
  const holidays = ['01/06', '04/01', '12/25']

  const result = countHours(year, holidays)

  expect(result).toEqual(4)
})
