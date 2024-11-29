export function countHours(year, holidays) {
  let hours = holidays.map((date) => {
    const [month, day] = date.split('/')
    const holiday = new Date(year, month - 1, day)
    const dayOfWeek = holiday.getDay()

    return [0, 6].includes(dayOfWeek) ? 0 : 2
  })

  return hours.reduce((acc, curr) => acc + curr, 0)
}
