export function groupBy(collection, it) {
  let result = {}

  collection.reduce((prevValue, currentValue) => {
    if (typeof it === 'function') {
      if (typeof result[it(currentValue)] !== 'object') {
        result[it(currentValue)] = []
      }

      result[it(currentValue)].push(currentValue)
    } else {
      if (typeof result[currentValue[it]] !== 'object') {
        result[currentValue[it]] = []
      }

      result[currentValue[it]].push(currentValue)
    }

    return prevValue
  }, collection[0])

  return result
}
