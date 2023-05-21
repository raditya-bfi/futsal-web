import { useContext, useCallback } from 'react'

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
  } = useContext(AuthContext)

  const handleLogin = useCallback(
    // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
    async (token) => {
      // await setAuthTokens(token)
      await setIsLoggedIn(true)

      // const response = await getLoggedUserData()
      // const responseData = response?.data
      // if (responseData?.statusCode === 200 && responseData?.isSuccess === true) {
      //   const loggedUserData = get(responseData, 'data', {})
      //   await setUserData(loggedUserData)
      // }
    },
    [setAuthTokens, setIsLoggedIn, setUserData],
  )

  const handleLogout = useCallback(async () => {
    removeTokens()
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
