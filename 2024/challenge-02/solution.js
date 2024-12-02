export function createFrame(names) {
  const maxLength = names.reduce((max, name) => Math.max(max, name.length), 0)

  const wrapper = ['*'.repeat(maxLength + 4)]

  let result = [...wrapper]

  for (let name of names) {
    result.push(`* ${name.padEnd(maxLength)} *`)
  }

  return result.concat(wrapper).join('\n')
}
