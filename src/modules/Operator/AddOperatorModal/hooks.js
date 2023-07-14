import { useCallback, useEffect, useRef, useState } from 'react'

import { handleAddOperator } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

const useCustom = ({ setAlert, setIsNeedRefetch, open, setOpenModal }) => {
  const formikRef = useRef()
  const { setIsLoading } = useLoading()

  const [initialValue, setInitialValue] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    password: '',
    gender: '',
  })

  // ? : LK : Laki-laki | PR : Perempuan
  const [selectedGender, setSelectedGender] = useState('')
  const [photoFiles, setPhotoFiles] = useState([])
  const [ktpFiles, setKtpFiles] = useState([])

  const [notificationModal, setNotificationModal] = useState({
    open: false,
    message: '',
  })

  const handleCloseNotificationModal = () => {
    setNotificationModal((prev) => ({
      ...prev,
      open: false,
      message: '',
    }))
  }

  const handleChangeGender = (value) => {
    setSelectedGender(value)
  }

  const validateUpload = useCallback(() => {
    if (photoFiles && photoFiles.length <= 0) {
      setNotificationModal((prev) => ({
        ...prev,
        open: true,
        message: 'Silahkan mengupload foto Operator terlebih dahulu',
      }))
      // setAlert((prev) => ({
      //   ...prev,
      //   open: true,
      //   title: '',
      //   severity: 'error',
      //   message: 'Silahkan mengupload foto terlebih dahulu',
      // }))
      return false
    }
    if (ktpFiles && ktpFiles.length <= 0) {
      setNotificationModal((prev) => ({
        ...prev,
        open: true,
        message: 'Silahkan mengupload foto KTP terlebih dahulu',
      }))
      // setAlert((prev) => ({
      //   ...prev,
      //   open: true,
      //   title: '',
      //   severity: 'error',
      //   message: 'Silahkan mengupload foto KTP terlebih dahulu',
      // }))
      return false
    }
    return true
  }, [setAlert, setNotificationModal, photoFiles, ktpFiles])

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
      if (response && response?.status === 201) {
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
      setSelectedGender('')
    },
    [setAlert, setIsNeedRefetch, setOpenModal, setIsLoading, selectedGender, photoFiles, ktpFiles],
  )

  useEffect(() => {
    if (open) {
      // ? : Reset Upload files
      setPhotoFiles([])
      setKtpFiles([])
    }
  }, [open])

  return {
    data: {},
    handler: {
      handleChangeGender,
      handleCloseNotificationModal,
      handleAdd,
      setKtpFiles,
      setNotificationModal,
      setPhotoFiles,
      validateUpload,
    },
    ref: {
      formikRef,
    },
    state: {
      initialValue,
      ktpFiles,
      notificationModal,
      photoFiles,
      selectedGender,
    },
  }
}

export default useCustom
