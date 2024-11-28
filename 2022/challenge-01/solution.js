export function wrapping(gifts) {
  return [...gifts.map((gift) => {
    const wrapperSide = [...Array(gift.length + 2)].fill('*')
    const content = '\n*' + gift + '*\n'

    return wrapperSide.concat(content).concat(wrapperSide).join('')
  })]
}
