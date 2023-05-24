import { useContext, useCallback } from 'react'

import { AuthContext } from '~/context/AuthProvider'
import { getLoggedUserData } from '~/helpers/request'

const useAuth = () => {
  const {
    authTokens,
    setAuthTokens,
    removeTokens,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    // removeUserInfoData,
  } = useContext(AuthContext)

  const handleLogin = useCallback(
    async (token) => {
      await setAuthTokens(token)
      const response = await getLoggedUserData()
      const responseData = response?.data
      if (responseData?.status === true) {
        await setUserData(responseData?.data)
      }
      // Redirect to protected layout
      await setIsLoggedIn(true)
    },
    [setAuthTokens, setIsLoggedIn, setUserData],
  )

  const handleLogout = useCallback(async () => {
    removeTokens()
    // removeUserInfoData()
  }, [removeTokens])

  return {
    handler: {
      handleLogin,
      handleLogout,
      removeTokens,
      setAuthTokens,
      setIsLoggedIn,
      setUserData,
    },
    state: {
      authTokens,
      isLoggedIn,
      userData,
    },
  }
}

export default useAuth
