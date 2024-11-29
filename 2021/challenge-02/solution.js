export function listGifts(letter) {
  const filteredLetter = letter.trim().split(' ')
  const result = {}

  filteredLetter.forEach((item) => {
    if (!item.includes('_')) {
      result[item] = result.hasOwnProperty(item) ? result[item] + 1 : 1
    }
  })

  return result
}
