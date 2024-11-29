export function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50].reverse()
  const result = [...Array(coins.length)].map(() => 0)
  let total = 0

  for (let i = 0; i < coins.length; i++) {
    coins.reduce((prevValue) => {
      if (total + prevValue <= change) {
        total += prevValue
        result[coins.indexOf(prevValue)] += 1
      }

      return prevValue
    }, coins[i])

    if (total === change) break
  }

  return result.reverse()
}
