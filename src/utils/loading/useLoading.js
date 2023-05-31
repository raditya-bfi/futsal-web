import { useContext } from 'react'

import { LoadingContext } from '~/context/LoadingProvider'

const useLoading = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext)

  return {
    isLoading,
    setIsLoading,
  }
}

export default useLoading
