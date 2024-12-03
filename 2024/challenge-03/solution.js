export function organizeInventory(inventory) {
  let result = {}

  for (let item of inventory) {
    if (!result.hasOwnProperty(item.category)) {
      result[item.category] = {}
    }

    const initialQuantity = result[item.category][item.name] ?? 0

    result[item.category][item.name] = initialQuantity + item.quantity
  }

  return result
}
