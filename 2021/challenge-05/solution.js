export function daysToXmas(date) {
  const limitDate = new Date('Dec 25, 2021')
  const diff = limitDate.getTime() - date.getTime()

  return Math.ceil(diff / (1000 * 3600 * 24))
}
