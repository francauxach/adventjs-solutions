import { expect, test } from 'vitest'
import { groupBy } from './solution.js'

test('challenge 2021/09', () => {
  const examples = [
    [[6.1, 4.2, 6.3], Math.floor],
    [['one', 'two', 'three'], 'length'],
    [[{age: 23}, {age: 24}], 'age'],
    [[1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear()],
    [[{ title: 'JavaScript: The Good Parts', rating: 8 }, { title: 'Aprendiendo Git', rating: 10 }, { title: 'Clean Code', rating: 9 }], 'rating']
  ]

  const results = examples.map(([collection, it]) => groupBy(collection, it))

  expect(results).toEqual([
    { 6: [6.1, 6.3], 4: [4.2] },
    { 3: ['one', 'two'], 5: ['three'] },
    { 23: [{age: 23}], 24: [{age: 24}] },
    { 2013: [1363223700000], 2014: [1397639141184] },
    { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }], 9: [{ title: 'Clean Code', rating: 9 }], 10: [{ title: 'Aprendiendo Git', rating: 10 }] }
  ])
})
