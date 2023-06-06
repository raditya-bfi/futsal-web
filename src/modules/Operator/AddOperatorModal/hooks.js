import { useCallback, useRef, useState } from 'react'

import { handleAddOperator } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

const useCustom = ({ setAlert, setIsNeedRefetch, setOpenModal }) => {
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
  const [photoFiles, setPhotoFiles] = useState([])
  const [ktpFiles, setKtpFiles] = useState([])

  const handleChangeGender = (value) => {
    setSelectedGender(value)
  }

  const validateUpload = useCallback(() => {
    if (photoFiles && photoFiles.length <= 0) {
      setAlert((prev) => ({
        ...prev,
        open: true,
        title: '',
        severity: 'error',
        message: 'Silahkan mengupload foto terlebih dahulu',
      }))
      return false
    }
    if (ktpFiles && ktpFiles.length <= 0) {
      setAlert((prev) => ({
        ...prev,
        open: true,
        title: '',
        severity: 'error',
        message: 'Silahkan mengupload foto ktp terlebih dahulu',
      }))
      return false
    }
    return true
  }, [setAlert, photoFiles, ktpFiles])

  const handleAdd = useCallback(
    async (values) => {
      await setIsLoading(true)
      const response = await handleAddOperator({
        name: values?.name,
        no_hp: values?.phone,
        email: values?.email,
        address: values?.address,
        password: values?.password,
        gender: selectedGender,
        thumbnail: photoFiles && photoFiles.length > 0 ? photoFiles[0] : null,
        ktp: ktpFiles && ktpFiles.length > 0 ? ktpFiles[0] : null,
      })
      if (response && response?.status === 200) {
        setAlert((prev) => ({
          ...prev,
          open: true,
          title: '',
          severity: 'success',
          message: 'Berhasil menambah Operator',
        }))
      } else {
        setAlert((prev) => ({
          ...prev,
          open: true,
          title: '',
          severity: 'error',
          message: response?.data?.message || response?.statusText,
        }))
      }
      await setIsLoading(false)
      setOpenModal(false)
      setIsNeedRefetch(true)
    },
    [setAlert, setIsNeedRefetch, setOpenModal, setIsLoading, selectedGender, photoFiles, ktpFiles],
  )

  return {
    data: {},
    handler: {
      handleChangeGender,
      handleAdd,
      setKtpFiles,
      setPhotoFiles,
      validateUpload,
    },
    ref: {
      formikRef,
    },
    state: {
      initialValue,
      ktpFiles,
      photoFiles,
      selectedGender,
    },
  }
}

export default useCustom
