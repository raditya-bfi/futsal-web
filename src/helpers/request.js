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

export const getDetailOperator = (userId) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/user/operators/${userId}`,
    method: 'GET',
  })

export const patchStatusOperator = (userId, payload = {}) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/user/operators/${userId}`,
    method: 'PATCH',
    data: payload,
  })

export const handleEditOperator = (userId, payload = {}) => {
  const data = toFormData(payload)
  return Axios({
    MAIN_URL: apiUrl,
    url: `/user/operators/${userId}`,
    method: 'PUT',
    data,
    isFormData: true,
  })
}

export const getListOfFields = () =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/fields`,
    method: 'GET',
  })

export const getDetailField = (fieldId) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/fields/${fieldId}`,
    method: 'GET',
  })

export const handleEditField = (fieldId, payload = {}) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/fields/${fieldId}`,
    method: 'PUT',
    data: payload,
  })

export const handleDeleteFieldPhoto = (fieldId, galleryId) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `fields/${fieldId}/gallery/${galleryId}`,
    method: 'DELETE',
  })

export const handleAddFieldPhoto = (fieldId, payload = {}) => {
  const data = toFormData(payload)
  return Axios({
    MAIN_URL: apiUrl,
    url: `fields/${fieldId}`,
    method: 'POST',
    data,
    isFormData: true,
  })
}

export const getListOfBookings = (params = {}) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/bookings/fields`,
    method: 'GET',
    params,
  })

export const getMoreBookingsList = (params = {}) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/bookings/list`,
    method: 'GET',
    params,
  })

export const getDetailBooking = (bookingId) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/bookings/${bookingId}`,
    method: 'GET',
  })

export const getAvailableField = (fieldId, params = {}) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/bookings/field/${fieldId}`,
    method: 'GET',
    params,
  })

export const handleAddBooking = (payload = {}) => {
  const data = toFormData(payload)
  return Axios({
    MAIN_URL: apiUrl,
    url: `bookings`,
    method: 'POST',
    data,
  })
}

export const handleCancelBooking = (bookingId) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `/bookings/cancel/${bookingId}`,
    method: 'PUT',
  })

export const handleAddField = (data = {}) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `fields`,
    method: 'POST',
    data,
    isFormData: true,
  })

export const handleDeleteField = (fieldId) =>
  Axios({
    MAIN_URL: apiUrl,
    url: `fields/${fieldId}`,
    method: 'DELETE',
  })
