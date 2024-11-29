export function checkSledJump(heights) {
  const maxHeightIndex = heights.indexOf(Math.max(...heights))
  const toUpper = heights.slice(0, maxHeightIndex + 1)
  const toLower = heights.slice(maxHeightIndex, heights.length)

  if (toUpper.length <= 1 || toLower.length <= 1) {
    return false
  }

  return JSON.stringify(toUpper) === JSON.stringify(toUpper.sort().filter((item, pos) => toUpper.indexOf(item) === pos)) && JSON.stringify(toLower) === JSON.stringify(toLower.sort((a, b) => b - a).filter((item, pos) => toLower.indexOf(item) === pos))
}
