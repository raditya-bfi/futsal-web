import { apiUrl } from '~/config/index'

import Axios from './axiosWrapper'

export const doLogin = (payload = {}) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/v1/auth/login`,
    method: 'POST',
    data: payload,
  })

export const getLoggedUserData = () =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/v1/auth/me`,
    method: 'GET',
  })
