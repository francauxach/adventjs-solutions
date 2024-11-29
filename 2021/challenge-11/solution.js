export function shouldBuyFidelity(times) {
  const totalNormal = 12 * times
  const totalBonus = calculatedDiscount(250, times)

  return totalBonus <= totalNormal
}

function calculatedDiscount(total, times) {
  if (times >= 1) {
    total += 12 * Math.pow(0.75, times)

    return calculatedDiscount(total, times - 1)
  }

  return total
}
