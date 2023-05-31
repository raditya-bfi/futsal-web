/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react'

export const LoadingContext = React.createContext()

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}
