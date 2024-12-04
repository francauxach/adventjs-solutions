import { expect, test } from 'vitest'
import { createXmasTree } from './solution.js'

test('challenge 2024/04', () => {
  const examples = [
    [5, '*'],
    [3, '+'],
    [6, '@']
  ]

  const results = examples.map(([height, ornament]) => createXmasTree(height, ornament))

  expect(results).toEqual([
    '____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____',
    '__+__\n_+++_\n+++++\n__#__\n__#__',
    '_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____'
  ])
})
