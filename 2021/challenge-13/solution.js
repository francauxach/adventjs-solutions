export function wrapGifts(gifts) {
  if (gifts.length) {
    const wrapper = ''.padStart(gifts[0].length + 2, '*')

    const content = gifts.map((gift) => {
      const giftLength = gift.toString().length
      return gift.padStart(giftLength + 1, '*').padEnd(giftLength + 2, '*')
    })

    return [wrapper, ...content, wrapper]
  }

  return []
}
