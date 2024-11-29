import { expect, test } from 'vitest'
import { createXmasTree } from './solution.js'

test('challenge 2021/04', () => {
  const tree = createXmasTree(5)

  expect(tree).toEqual('____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____')
})
