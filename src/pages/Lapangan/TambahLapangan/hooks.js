/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from 'react'

import { sortBy } from 'lodash-es'

import { DAYS_ACTIVE_OPTIONS } from '~/constants/general'
import { handleAddField } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'
import { removeSeconds } from '~/utils/string'

const useCustom = () => {
  const formikRef = useRef()
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()

  const [isFlagActive, setIsFlagActive] = useState(false)
  const [alert, setAlert] = useState({
    open: false,
    severity: 'error',
    title: '',
    message: '',
  })
  const [initialValue, setInitialValue] = useState({
    name: '',
    description: '',
    booking_open: '08:00',
    booking_close: '22:00',
    waktu_mulai_malam: '18:00',
    harga: 0,
    harga_malam: 0,
    daysActive: [],
  })
  // Hari Buka Sewa
  const [selectedMultipleDays, setSelectedMultipleDays] = useState([])
  const [selectedAll, setSelectedAll] = useState(false)
  const [firstPhotos, setFirstPhotos] = useState([])
  const [secondPhotos, setSecondPhotos] = useState([])

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

  const handleCheckBox = (event) => {
    setIsFlagActive(event.target.checked)
  }

  const handleBackButton = () => {
    navigate('/lapangan')
  }

  const handleCloseSnackbar = () => {
    setAlert((prev) => ({
      ...prev,
      open: false,
    }))
  }

  const handleMultipleDays = (e) => {
    const lengthOfValueWithoutAll = e.target.value.filter((val) => val !== 'all').length
    const lengthOfOptionWithoutAll = DAYS_ACTIVE_OPTIONS.filter((val) => val.value !== 'all').length
    if (
      !selectedAll &&
      (e.target.value.indexOf('all') >= 0 || lengthOfValueWithoutAll === lengthOfOptionWithoutAll)
    ) {
      // select all
      setSelectedAll(true)
      const datas = DAYS_ACTIVE_OPTIONS.map((option) => option.value)
      setSelectedMultipleDays(datas)
      return datas
    }
    if (selectedAll && lengthOfValueWithoutAll === lengthOfOptionWithoutAll) {
      // deselect all
      setSelectedAll(false)
      setSelectedMultipleDays([])
      return []
    }
    // select one by one
    setSelectedAll(false)
    setSelectedMultipleDays(e.target.value.filter((val) => val !== 'all'))
    return e.target.value.filter((val) => val !== 'all')
  }

  const handleAdd = useCallback(
    async (values) => {
      await setIsLoading(true)
      let hariSewa = sortBy(values?.daysActive.filter((day) => day !== 'all'))
      hariSewa = hariSewa.join(',')
      const payload = {
        name: values?.name,
        description: values?.description,
        harga: values?.harga,
        booking_close: removeSeconds(values?.booking_close),
        booking_open: removeSeconds(values?.booking_open),
        daysActive: hariSewa,
      }
      // ? : add harga malam and waktu_mulai_malamwhen flag is active
      if (isFlagActive !== true) {
        Object.assign(payload, {
          harga_malam: values?.harga_malam,
          waktu_mulai_malam: removeSeconds(values?.waktu_mulai_malam),
        })
      }
      const formData = new FormData()
      Object.keys(payload).forEach((key) => {
        if (payload[key]) {
          formData.append(key, payload[key])
        }
      })
      // ? : add first photos
      if (firstPhotos && firstPhotos.length > 0) {
        formData.append('fieldImages', firstPhotos[0])
      }
      // ? : add second photos
      if (secondPhotos && secondPhotos.length > 0) {
        formData.append('fieldImages', secondPhotos[0])
      }

      const response = await handleAddField(formData)
      if (response && (response?.status === 200 || response?.status === 201)) {
        const notification = {
          open: true,
          title: '',
          severity: 'success',
          message: 'Berhasil menambah Lapangan',
        }
        navigate(
          '/lapangan',
          {},
          {
            state: {
              ...notification,
            },
          },
        )
        await setIsLoading(false)
      } else {
        if (response?.data?.message === 'Wajib memiliki 1 gambar lapangan') {
          setNotificationModal((prev) => ({
            ...prev,
            open: true,
            message: response?.data?.message || response?.statusText,
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
      }
      await setSelectedAll(false)
      await setSelectedMultipleDays([])
    },
    [
      firstPhotos,
      secondPhotos,
      isFlagActive,
      setAlert,
      setIsLoading,
      setSelectedAll,
      setSelectedMultipleDays,
    ],
  )

  return {
    handler: {
      handleAdd,
      handleBackButton,
      handleCheckBox,
      handleCloseNotificationModal,
      handleCloseSnackbar,
      handleMultipleDays,
      setAlert,
      setFirstPhotos,
      setNotificationModal,
      setSecondPhotos,
    },
    refs: {
      formikRef,
    },
    state: {
      alert,
      firstPhotos,
      initialValue,
      isFlagActive,
      notificationModal,
      secondPhotos,
      selectedAll,
      selectedMultipleDays,
    },
  }
}

export default useCustom
