import { expect, test } from 'vitest'
import { fixFiles } from './solution.js'

test('challenge 2021/18', () => {
  const examples = [
    ['photo', 'postcard', 'photo', 'photo', 'video'],
    ['file', 'file', 'file', 'game', 'game'],
    ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
  ]

  const results = examples.map(fixFiles)

  expect(results).toEqual([
    ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'],
    ['file', 'file(1)', 'file(2)', 'game', 'game(1)'],
    ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
  ])
})
