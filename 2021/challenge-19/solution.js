export function learn(time, courses) {
  let foundCourse = {
    hours: 0,
    result: null
  }
  let shiftedCourses = [...courses]

  for (let i = 0; i < courses.length; i++) {
    const course = courses[i]
    let foundFirstExactCourses = null

    shiftedCourses.reduce((prevValue, currentValue, index) => {
      if (index) {
        const sumValues = prevValue + currentValue

        if (sumValues === time) {
          foundFirstExactCourses = index + (courses.length - shiftedCourses.length)
        } else {
          if (sumValues < time && sumValues > foundCourse.hours) {
            foundCourse = {
              hours: sumValues,
              result: [i, index + (courses.length - shiftedCourses.length)]
            }
          }
        }
      }

      return prevValue
    }, course)

    if (foundFirstExactCourses) {
      foundCourse = {
        hours: time,
        result: [i, foundFirstExactCourses]
      }

      break
    }

    shiftedCourses.shift()
  }

  return foundCourse.result
}
