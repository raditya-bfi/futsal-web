export const getSliderData = (fieldsData) => {
  const res = {
    odd: [],
    even: [],
  }

  if (fieldsData && fieldsData.length > 0) {
    fieldsData.forEach((field, index) => {
      if ((index + 1) % 2 === 0) {
        res.even.push(field)
      } else {
        res.odd.push(field)
      }
    })
  }
  return res
}
