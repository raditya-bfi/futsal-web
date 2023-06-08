export const toFormData = (object) => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    if (object[key]) {
      formData.append(key, object[key])
    }
  })
  return formData
}

export const getCurrentRoute = (routes, pathname) => {
  let res = {}

  if (routes && routes.length > 0) {
    res = routes.find((route) => route.path === pathname)
    return res
  }
  return res
}
