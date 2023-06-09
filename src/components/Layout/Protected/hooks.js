import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { getCurrentRoute, getPageAuthorization } from '~/helpers/general'
import routes from '~/routes'
import useAuth from '~/utils/auth/useAuth'
import useLoading from '~/utils/loading/useLoading'

const useCustom = () => {
  const { state } = useAuth()
  const location = useLocation()
  const { isLoading } = useLoading()
  const navigate = useNavigate()

  const [currentRoute, setCurrentRoute] = useState({})

  useEffect(() => {
    if (location?.pathname && location?.pathname != '/' && state?.userData) {
      const currRoute = getCurrentRoute(routes, location?.pathname)
      setCurrentRoute(currRoute)
      const isAccessible = getPageAuthorization(currRoute, state?.userData)
      if (!isAccessible) {
        // ? : force into 403 page when user doesn't have authorization
        navigate('/403')
      }
    }
  }, [location?.pathname, state?.userData])

  return {
    state: {
      currentRoute,
      isLoading,
      userData: state?.userData,
    },
  }
}

export default useCustom
