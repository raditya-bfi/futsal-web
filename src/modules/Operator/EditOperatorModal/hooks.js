import { useCallback, useEffect, useRef, useState } from 'react'

import { getDetailOperator, handleEditOperator } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

const useCustom = ({ setAlert, setIsNeedRefetch, open, setOpenModal, userId }) => {
  const formikRef = useRef()
  const { setIsLoading } = useLoading()

  const [initialValue, setInitialValue] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    gender: '',
  })

  // ? : LK : Laki-laki | PR : Perempuan
  const [selectedGender, setSelectedGender] = useState('LK')
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
      //   message: 'Silahkan mengupload foto ktp terlebih dahulu',
      // }))
      return false
    }
    return true
  }, [setAlert, setNotificationModal, photoFiles, ktpFiles])

  const handleEdit = useCallback(
    async (values) => {
      await setIsLoading(true)
      const payload = {
        name: values?.name,
        no_hp: values?.phone,
        email: values?.email,
        address: values?.address,
        password: values?.password,
        gender: selectedGender,
      }

      // ? : add user photo attribute when user change the photo
      if (photoFiles && photoFiles.length > 0 && photoFiles[0]?.changed === true) {
        Object.assign(payload, {
          thumbnail: photoFiles[0],
        })
      }
      // ? : add user ktp attribute when user change the ktp
      if (ktpFiles && ktpFiles.length > 0 && ktpFiles[0]?.changed === true) {
        const newKtp = ktpFiles[0]
        delete newKtp.changed
        Object.assign(payload, {
          ktp: newKtp,
        })
      }
      const response = await handleEditOperator(userId, payload)
      if (response && (response?.status === 200 || response?.status === 201)) {
        setAlert((prev) => ({
          ...prev,
          open: true,
          title: '',
          severity: 'success',
          message: 'Berhasil menyunting Operator',
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
    [
      userId,
      setAlert,
      setIsNeedRefetch,
      setOpenModal,
      setIsLoading,
      selectedGender,
      photoFiles,
      ktpFiles,
    ],
  )

  const fetchOperatorData = async () => {
    await setIsLoading(true)
    // ? Init Operators
    setInitialValue((prev) => ({
      ...prev,
      name: '',
      phone: '',
      email: '',
      address: '',
    }))
    // ? Operators
    const response = await getDetailOperator(userId)
    if (response && response.status === 200) {
      const detailOperatorData = response?.data?.data || {}
      setInitialValue((prev) => ({
        ...prev,
        name: detailOperatorData?.name,
        phone: detailOperatorData?.no_hp,
        email: detailOperatorData?.email,
        address: detailOperatorData?.alamat || '',
        gender: detailOperatorData?.gender,
      }))
      setSelectedGender(detailOperatorData?.gender)
      if (detailOperatorData?.thumbnail && detailOperatorData?.thumbnail !== '') {
        setPhotoFiles([
          {
            preview: detailOperatorData?.thumbnail,
            src: detailOperatorData?.thumbnail,
            changed: false,
          },
        ])
      }
      if (detailOperatorData?.ktp && detailOperatorData?.ktp !== '') {
        setKtpFiles([
          {
            preview: detailOperatorData?.ktp,
            src: detailOperatorData?.ktp,
            changed: false,
          },
        ])
      }
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    if (open) {
      // ? : Reset Upload files
      setPhotoFiles([])
      setKtpFiles([])
    }
    if (userId) {
      fetchOperatorData()
    }
  }, [open, userId])

  return {
    data: {},
    handler: {
      handleChangeGender,
      handleCloseNotificationModal,
      handleEdit,
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
