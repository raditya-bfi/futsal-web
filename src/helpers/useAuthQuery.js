import { useQuery } from 'react-query'

import useAuth from '~/utils/auth/useAuth'

const useAuthQuery = (queryKey, queryFn, options) => {
  const queryResult = useQuery(queryKey, queryFn, options)

  const { handler } = useAuth()

  if (queryResult?.error?.response?.status === 401) {
    handler.handleLogout()
  }

  return queryResult
}

export default useAuthQuery
