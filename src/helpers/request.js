import { apiUrl } from '~/config/index'

import Axios from './axiosWrapper'

export const doLogin = (payload = {}) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/auth/login`,
    method: 'POST',
    data: payload,
  })
