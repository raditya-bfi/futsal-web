import axios from 'axios'

import { apiUrl } from '~/config/index'

const request = async (options) => {
  let authTokens = localStorage.getItem('tokens') || ''
  authTokens = authTokens.replace(/["]+/g, '')

  let requestHeaders = options.customHeaders

  if (!options.customHeaders && authTokens) {
    requestHeaders = options.customHeaders || {
      'Content-type': 'application/json',
      Accept: '*/*',
      Token: authTokens,
    }
  }

  if (options.isFormData && options.isFormData === true) {
    requestHeaders = {
      'Content-type': 'multipart/form-data',
      Accept: '*/*',
      Token: authTokens,
    }
  }

  const client = axios.create({
    baseURL: options.MAIN_URL || apiUrl,
    headers: requestHeaders,
  })

  const onSuccess = (response) => response

  const onError = (error) => {
    console.log('Request Failed:', error.config)
    if (error.response) {
      console.log('Error Message:', error)
    }
    return error.response
  }

  return client(options).then(onSuccess).catch(onError)
}

export default request
