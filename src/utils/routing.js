import { createSearchParams, useNavigate } from 'react-router-dom'

import { isEmpty } from 'lodash-es'

export const useNavigateParams = () => {
  const navigate = useNavigate()

  return (pathname, params = {}, state = {}) => {
    const path = {
      pathname,
      search: !isEmpty(params) ? createSearchParams(params).toString() : '',
    }
    navigate(path, state)
  }
}
