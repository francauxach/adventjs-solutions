import { expect, test } from 'vitest'
import { canMouseEat } from './solution.js'

test('challenge 2021/25', () => {
  const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]

  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]

  const examples = [
    ['up', room],
    ['down', room],
    ['right', room],
    ['left', room],
    ['up', room2],
    ['down', room2],
    ['right', room2],
    ['left', room2]
  ]

  const results = examples.map(([direction, room]) => canMouseEat(direction, room))

  expect(results).toEqual([
    false,
    true,
    false,
    false,
    false,
    false,
    true,
    false
  ])
})
