export function countPackages(carriers, carrierID, result = 0) {
  const carrier = carriers.find((carrier) => carrier[0] === carrierID)
  result = carrier[1]

  if (carrier[2].length) {
    return carrier[2].reduce((prev, curr) => {
      return prev + countPackages(carriers, curr, result)
    }, result)
  }

  return result
}
