export function fitsInOneBox(boxes) {
  return boxes.sort((a, b) => {
    return Object.values(a).reduce((acc, val) => acc * val, 1) - Object.values(b).reduce((acc, val) => acc * val, 1)
  }).reduce((acc, box, index, array) => {
    if (index === array.length - 1) return acc

    const [l, w, h] = Object.values(box)
    const [l2, w2, h2] = Object.values(array[index + 1])

    return acc && (l < l2 && w < w2 && h < h2)
  }, true)
}
