export function missingReindeer(ids) {
  const sortedIds = ids.sort()
  const comparator = [...Array(sortedIds.length + 1).keys()]

  return comparator.filter(x => !sortedIds.includes(x))[0]
}
