export function isValid(letter) {
  let indexOpenMark = letter.indexOf('(')
  let indexCloseMark = letter.indexOf(')')

  while (true) {
    if (indexOpenMark === -1 && indexCloseMark === -1) return true
    if (indexOpenMark === -1 || indexCloseMark === -1) return false

    if (indexOpenMark > indexCloseMark) return false

    const gift = letter.substring(indexOpenMark + 1, indexCloseMark)
    if (gift === '') return false
    if (gift.match(/[(){}[\]]/)) return false

    indexOpenMark = letter.indexOf('(', indexCloseMark + 1)
    indexCloseMark = letter.indexOf(')', indexCloseMark + 1)
  }
}
