import { useCallback, useRef, useState } from 'react'

import useLoading from '~/utils/loading/useLoading'

const useCustom = () => {
  const formikRef = useRef()
  const { setIsLoading } = useLoading()

  const [initialValue, setInitialValue] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    password: '',
  })

  // ? : LK : Laki-laki | PR : Perempuan
  const [selectedGender, setSelectedGender] = useState('LK')

  const handleChangeGender = (value) => {
    setSelectedGender(value)
  }

  const handleAdd = useCallback(
    async (values) => {
      await setIsLoading(true)
    },
    [selectedGender],
  )

  return {
    data: {},
    handler: {
      handleChangeGender,
      handleAdd,
    },
    ref: {
      formikRef,
    },
    state: {
      initialValue,
      selectedGender,
    },
  }
}

export default useCustom
