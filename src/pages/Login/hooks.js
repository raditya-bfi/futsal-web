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
      username: values.username,
      password: values.password,
    })

    if (response?.data?.statusCode === 200 && response?.data?.isSuccess === true) {
      const responseData = response?.data
      const accessToken = responseData?.data?.accessToken
      handler.handleLogin(accessToken)
    } else {
      setAlert((prev) => ({
        ...prev,
        open: true,
        title: 'Login Failed',
        message: response?.data?.responseMessage,
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
