import { useCallback, useRef, useState } from 'react'

import { doLogin } from '~/helpers/request'
import useAuth from '~/utils/auth/useAuth'

const useCustom = () => {
  const { handler } = useAuth()

  const formikRef = useRef()

  const [alert, setAlert] = useState({
    open: false,
    severity: 'error',
    title: '',
    message: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  const handleCloseSnackbar = () => {
    setAlert((prev) => ({
      ...prev,
      open: false,
    }))
  }
  const handleSubmit = useCallback(async (values) => {
    const response = await doLogin({
      email: values.username,
      password: values.password,
    })

    const responseData = response?.data
    if (responseData?.status === 200) {
      const accessToken = responseData?.data?.access_token
      await handler.handleLogin(accessToken)
    } else {
      setAlert((prev) => ({
        ...prev,
        open: true,
        title: 'Login Failed',
        message: response?.data?.message || response?.statusText,
      }))
    }
  }, [])

  return {
    handler: {
      handleClickShowPassword,
      handleCloseSnackbar,
      handleMouseDownPassword,
      handleSubmit,
    },
    refs: {
      formikRef,
    },
    state: {
      alert,
      showPassword,
    },
  }
}

export default useCustom
