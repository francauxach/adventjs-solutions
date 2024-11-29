export function contains(store, product) {
  let products = generateProductsByObject(store, [])

  return products.includes(product)
}

function generateProductsByObject(object, products) {
  Object.entries(object).forEach((entry) => {
    if (typeof entry[1] === 'string') {
      products.push(entry[1])
    } else {
      products = generateProductsByObject(entry[1], products)
    }
  })

  return products
}
