/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react'

export const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('tokens') || ''))
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('tokens') || '')
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userInfoData')) || {})

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data))
    setAuthTokens(data)
  }

  const removeTokens = () => {
    localStorage.removeItem('tokens')
    setAuthTokens('')
  }

  const setUserInfoData = (data) => {
    localStorage.setItem('userInfoData', JSON.stringify(data))
    setUserData(data)
  }

  const removeUserInfoData = () => {
    localStorage.removeItem('userInfoData')
    setUserData({})
  }

  return (
    <AuthContext.Provider
      value={{
        authTokens,
        setAuthTokens: setTokens,
        removeTokens,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData: setUserInfoData,
        removeUserInfoData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
