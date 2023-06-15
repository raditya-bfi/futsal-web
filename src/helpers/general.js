import { findIndex, toLower } from 'lodash-es'

import { ROLE_MENU_MAPPING } from '~/constants/general'

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

export const isRouteExist = (routes, currentRoute) => {
  const isExist = findIndex(routes, (route) => route?.path === currentRoute)
  return isExist >= 0
}

export const getPageAuthorization = (currentRoute, userData) => {
  const accessableMenu = ROLE_MENU_MAPPING[toLower(userData?.type)]
  const isAccessible = findIndex(accessableMenu, (menu) => menu === currentRoute)

  return isAccessible >= 0
}
