import { apiUrl } from '~/config/index'

import Axios from './axiosWrapper'

export const doLogin = (payload = {}) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/auth/login`,
    method: 'POST',
    data: payload,
  })

export const getListOfOperator = (params = {}) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/user/operators`,
    method: 'GET',
    params,
  })

export const getLaporanPendapatan = () => {
  Axios({
    MAIN_URL: apiUrl,
    url: `/dashboard/income`,
    method: 'GET',
  })
}

export const getLaporanWaktuSewa = () => {
  Axios({
    MAIN_URL: apiUrl,
    url: `/dashboard/rent-time`,
    method: 'GET',
  })
}
