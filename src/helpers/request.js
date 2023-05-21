import { apiUrl } from '~/config/index'
import { toFormData } from '~/helpers/general'

import Axios from './axiosWrapper'

export const doLogin = (payload = {}) => {
  const data = toFormData(payload)
  return Axios({
    MAIN_URL: apiUrl,
    url: `/v1/auth/login`,
    method: 'POST',
    data,
  })
}

export const getLoggedUserData = () =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/v1/user/logged-user`,
    method: 'GET',
  })
