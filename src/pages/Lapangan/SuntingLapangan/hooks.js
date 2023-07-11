/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { difference, findIndex, sortBy } from 'lodash-es'
import queryString from 'query-string'

import { DAYS_ACTIVE_MAPPING, DAYS_ACTIVE_OPTIONS } from '~/constants/general'
import {
  getDetailField,
  handleAddFieldPhoto,
  handleDeleteFieldPhoto,
  handleEditField,
} from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'
import { removeSeconds } from '~/utils/string'

import { getFieldGalleries } from './helper'

const useCustom = () => {
  const formikRef = useRef()
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()
  const { search } = useLocation()

  const queryParams = queryString.parse(search) || {}

  const [fieldData, setFieldData] = useState({})
  const [isFlagActive, setIsFlagActive] = useState(false)
  const [isNeedRefetch, setIsNeedRefetch] = useState(false)
  const [alert, setAlert] = useState({
    open: false,
    severity: 'error',
    title: '',
    message: '',
  })
  const [initialValue, setInitialValue] = useState({
    name: '',
    description: '',
    booking_open: '',
    booking_close: '',
    harga: 0,
    harga_malam: 0,
    waktu_mulai_malam: '',
    daysActive: [],
  })
  // Hari Buka Sewa
  const [selectedMultipleDays, setSelectedMultipleDays] = useState([])
  const [selectedAll, setSelectedAll] = useState(false)

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

  const handleAddPhoto = useCallback(
    async (payload) => {
      await setIsLoading(true)
      const response = await handleAddFieldPhoto(queryParams?.id, payload)
      if (response && (response?.status === 200 || response?.status === 201)) {
        setAlert((prev) => ({
          ...prev,
          open: true,
          title: '',
          severity: 'success',
          message: 'Berhasil menambahkan gambar lapangan',
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
      await setIsNeedRefetch(true)
      await setIsLoading(false)
    },
    [queryParams?.id],
  )

  const handleRemovePhoto = useCallback(
    async (photoId) => {
      await setIsLoading(true)
      const response = await handleDeleteFieldPhoto(queryParams?.id, photoId)
      if (response && (response?.status === 200 || response?.status === 201)) {
        setAlert((prev) => ({
          ...prev,
          open: true,
          title: '',
          severity: 'success',
          message: 'Berhasil menghapus gambar lapangan',
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
      await setIsNeedRefetch(true)
      await setIsLoading(false)
    },
    [queryParams?.id],
  )

  const handleEdit = useCallback(
    async (values) => {
      await setIsLoading(true)
      const newDaysActive = sortBy(values?.daysActive.filter((day) => day !== 'all'))
      const oldDaysActive = []
      fieldData?.days_active.forEach((day) => {
        oldDaysActive.push(DAYS_ACTIVE_MAPPING[day?.day_name])
      })
      const deleteDays = []
      const deletedDaysByUser = difference(oldDaysActive, newDaysActive)
      fieldData?.days_active.forEach((day) => {
        const isExist = findIndex(
          deletedDaysByUser,
          (deletedDay) => deletedDay === DAYS_ACTIVE_MAPPING[day?.day_name],
        )
        if (isExist >= 0) {
          deleteDays.push(day?.days_active_id)
        }
      })

      const payload = {
        name: values?.name,
        description: values?.description,
        harga: values?.harga,
        booking_close: removeSeconds(values?.booking_close),
        booking_open: removeSeconds(values?.booking_open),
        addDays: difference(newDaysActive, oldDaysActive),
        deleteDays,
      }

      // ? : add harga malam and waktu_mulai_malamwhen flag is active
      if (isFlagActive !== true) {
        Object.assign(payload, {
          harga_malam: values?.harga_malam,
          waktu_mulai_malam: removeSeconds(values?.waktu_mulai_malam),
        })
      }
      const response = await handleEditField(queryParams?.id, payload)
      if (response && (response?.status === 200 || response?.status === 201)) {
        setAlert((prev) => ({
          ...prev,
          open: true,
          title: '',
          severity: 'success',
          message: 'Berhasil menyunting Lapangan',
        }))
        const notification = {
          open: true,
          title: '',
          severity: 'success',
          message: 'Berhasil menyunting Lapangan',
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
        await setIsNeedRefetch(true)
        await setIsLoading(false)
      } else {
        setAlert((prev) => ({
          ...prev,
          open: true,
          title: '',
          severity: 'error',
          message: response?.data?.message || response?.statusText,
        }))
        await setIsNeedRefetch(true)
        await setIsLoading(false)
      }
      await setSelectedAll(false)
      await setSelectedMultipleDays([])
    },
    [
      queryParams?.id,
      fieldData,
      isFlagActive,
      setAlert,
      setIsNeedRefetch,
      setIsLoading,
      setSelectedAll,
      setSelectedMultipleDays,
    ],
  )

  const fetchFieldData = async () => {
    await setIsLoading(true)
    // ? Init Field
    setFieldData({})
    // ? Field
    const response = await getDetailField(queryParams?.id)
    if (response && response.status === 200) {
      const data = response?.data?.data || {}
      setFieldData(data)
      const currentDays = []
      data?.days_active.forEach((day) => {
        currentDays.push(DAYS_ACTIVE_MAPPING[day?.day_name])
      })
      setInitialValue({
        name: data?.name,
        description: data?.description,
        booking_open: removeSeconds(data?.booking_open),
        booking_close: removeSeconds(data?.booking_close),
        harga: data?.harga,
        harga_malam: data?.harga_malam,
        waktu_mulai_malam: removeSeconds(data?.waktu_mulai_malam),
        daysActive: currentDays,
      })
      if (currentDays.length === 7) {
        setSelectedAll(true)
      }
      setSelectedMultipleDays(currentDays)
    }
    await setIsLoading(false)
  }

  const fieldPhotos = useMemo(() => getFieldGalleries(fieldData?.galleries), [fieldData])

  useEffect(() => {
    if (isNeedRefetch) {
      fetchFieldData()
      setIsNeedRefetch(false)
    }
  }, [isNeedRefetch, setIsNeedRefetch])

  useEffect(() => {
    fetchFieldData()
  }, [queryParams?.id])

  return {
    data: {
      fieldData,
      fieldPhotos,
    },
    handler: {
      handleAddPhoto,
      handleBackButton,
      handleCheckBox,
      handleCloseNotificationModal,
      handleCloseSnackbar,
      handleEdit,
      handleMultipleDays,
      handleRemovePhoto,
      setAlert,
      setNotificationModal,
    },
    refs: {
      formikRef,
    },
    state: {
      alert,
      initialValue,
      isFlagActive,
      notificationModal,
      selectedAll,
      selectedMultipleDays,
    },
  }
}

export default useCustom
