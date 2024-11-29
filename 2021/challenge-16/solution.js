export function decodeNumber(symbols) {
  const symbolsArray = symbols.split('')
  const VALUES = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  }

  let result = NaN

  if (symbolsArray.every((symbol) => Object.keys(VALUES).includes(symbol))) {
    result = 0

    symbolsArray.reduce((prev, curr, index) => {
      const currValue = VALUES[curr]

      result += (index + 1 <= symbolsArray.length && VALUES[symbolsArray[index + 1]] > currValue ? -1 : 1) * currValue

      return curr
    }, symbolsArray[0])
  }

  return result
}
