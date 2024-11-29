export function sumPairs(numbers, result) {
  let foundResult = null
  let shiftedNumbers = [...numbers]

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]

    let foundCurrentValue = null
    shiftedNumbers.reduce((prevValue, currentValue, index) => {
      if (index >= 1 && prevValue + currentValue === result) {
        foundCurrentValue = currentValue
        return false
      }

      return prevValue
    }, number)

    if (foundCurrentValue) {
      foundResult = [number, foundCurrentValue]
      break
    }

    shiftedNumbers.shift()
  }

  return foundResult
}
