import { useMutation } from 'react-query'

import useAuth from '~/utils/auth/useAuth'

const useAuthMutation = (mutationKey, mutationFn, options) => {
  const mutation = useMutation(mutationKey, mutationFn ?? undefined, options)

  const { handler } = useAuth()

  if (mutation?.error?.response?.status === 401) {
    handler.handleLogout()
  }

  return mutation
}

export default useAuthMutation
