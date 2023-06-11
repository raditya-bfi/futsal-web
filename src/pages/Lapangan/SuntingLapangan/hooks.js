/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import queryString from 'query-string'

import {
  getDetailField,
  handleAddFieldPhoto,
  handleDeleteFieldPhoto,
  handleEditField,
} from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'

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
    harga: 0,
    harga_malam: 0,
    waktu_mulai_malam: '',
  })

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
      const payload = {
        name: values?.name,
        description: values?.description,
        harga: values?.harga,
        booking_close: fieldData?.booking_close,
        booking_open: fieldData?.booking_open,
        daysActive: fieldData?.days_active,
      }

      // ? : add harga malam and waktu_mulai_malamwhen flag is active
      if (isFlagActive !== true) {
        Object.assign(payload, {
          harga_malam: values?.harga_malam,
          waktu_mulai_malam: values?.waktu_mulai_malam,
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
    [queryParams?.id, fieldData, isFlagActive, setAlert, setIsNeedRefetch, setIsLoading],
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
      setInitialValue({
        name: data?.name,
        description: data?.description,
        harga: data?.harga,
        harga_malam: data?.harga_malam,
        waktu_mulai_malam: data?.waktu_mulai_malam,
      })
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
      handleCloseSnackbar,
      handleEdit,
      handleRemovePhoto,
      setAlert,
    },
    refs: {
      formikRef,
    },
    state: {
      alert,
      initialValue,
      isFlagActive,
    },
  }
}

export default useCustom
