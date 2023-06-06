import { apiUrl } from '~/config/index'

import Axios from './axiosWrapper'
import { toFormData } from './general'

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

export const getLaporanPendapatan = () =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/dashboard/income`,
    method: 'GET',
  })

export const getLaporanWaktuSewa = () =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/dashboard/rent-time`,
    method: 'GET',
  })

export const handleAddOperator = (payload = {}) => {
  const data = toFormData(payload)
  return Axios({
    MAIN_URL: apiUrl,
    url: `/user/operators`,
    method: 'POST',
    data,
    isFormData: true,
  })
}
