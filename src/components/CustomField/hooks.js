import { useState } from 'react'

const useCustom = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  return {
    handler: {
      handleClickShowPassword,
      handleMouseDownPassword,
    },
    state: {
      showPassword,
    },
  }
}

export default useCustom
