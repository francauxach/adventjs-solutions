import { expect, test } from 'vitest'
import { createFrame } from './solution.js'

test('challenge 2024/02', () => {
  const examples = [
    ['midu', 'madeval', 'educalvolpz'],
    ['midu'],
    ['a', 'bb', 'ccc']
  ]

  const results = examples.map(createFrame)

  expect(results).toEqual([
    "***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************",
    "********\n* midu *\n********",
    "*******\n* a   *\n* bb  *\n* ccc *\n*******"
  ])
})
