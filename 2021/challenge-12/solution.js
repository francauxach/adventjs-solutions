export function getMinJump(obstacles) {
  const sortedObstacles = obstacles.sort()
  let result = 1

  for (let i = 1; i <= Math.max(...sortedObstacles); i++) {
    if (getNumberTableUntilMax(i, Math.max(...sortedObstacles)).every((value) => !obstacles.includes(value))) {
      result = i
      break
    }
  }

  return result
}

function getNumberTableUntilMax(number, max) {
  const table = []
  let index = 0

  while(!table.length || table.reverse()[0] < max) {
    table.push(number * ++index)
  }

  return table
}
