export function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  if (height < 1 || height > 100 ) {
    return false
  }

  const width = height + (height - 1)
  let tree = []

  for (let row = height - 1; row >= 0; row--) {
    const treeDrawer = [...Array(width - (row * 2))].fill('*').join('')
    const treePartByRow = treeDrawer.padStart(width - row, '_').padEnd(width, '_')
    tree.push(treePartByRow)
  }

  let trunk = '#'.padStart(width / 2 + 1, '_').padEnd(width, '_')
  tree.push(trunk)
  tree.push(trunk)

  return tree.join("\n")
}
