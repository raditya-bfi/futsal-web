import { useContext, useCallback } from 'react'

import jwtDecode from 'jwt-decode'

import { AuthContext } from '~/context/AuthProvider'

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

  const handleLogout = useCallback(async () => {
    removeTokens()
    // removeUserInfoData()
  }, [removeTokens])

  const decodeToken = useCallback(
    (token) => {
      try {
        const result = jwtDecode(token)
        return result
      } catch (err) {
        handleLogout()
        return null
      }
    },
    [handleLogout],
  )

  const getUserInformationData = useCallback(
    (token) => {
      const userInfoData = decodeToken(token)
      return userInfoData
    },
    [decodeToken],
  )

  const handleLogin = useCallback(
    async (token) => {
      await setAuthTokens(token)
      const userInfoData = await getUserInformationData(token)
      await setUserData(userInfoData)
      await setIsLoggedIn(true)
    },
    [getUserInformationData, setAuthTokens, setIsLoggedIn, setUserData],
  )

  return {
    handler: {
      decodeToken,
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
