/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react'

import { getListOfFields } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

import { getSliderData } from './helper'

const useCustom = () => {
  const { setIsLoading } = useLoading()

  const [fieldsData, setFieldsData] = useState([])
  const [openDetailModal, setOpenDetailModal] = useState(false)
  const [selectedFieldId, setSelectedFieldId] = useState(null)
  const [isNeedRefetch, setIsNeedRefetch] = useState(false)

  const [alert, setAlert] = useState({
    open: false,
    severity: 'error',
    title: '',
    message: '',
  })

  const handleCloseSnackbar = () => {
    setAlert((prev) => ({
      ...prev,
      open: false,
    }))
  }

  const handleOpenDetailModal = (userId) => {
    setOpenDetailModal(true)
    setSelectedFieldId(userId)
  }

  const handleCloseDetailModal = () => {
    setOpenDetailModal(false)
  }

  const fieldSliderData = useMemo(() => getSliderData(fieldsData), [fieldsData])

  const fetchFieldsData = async () => {
    await setIsLoading(true)
    // ? Init Fields
    setFieldsData([])
    // ? Fields
    const response = await getListOfFields()
    if (response && response.status === 200) {
      setFieldsData(response?.data?.data || [])
    }
    if (isNeedRefetch) {
      setIsNeedRefetch(false)
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    if (isNeedRefetch) {
      fetchFieldsData()
    }
  }, [isNeedRefetch, setIsNeedRefetch])

  useEffect(() => {
    fetchFieldsData()
  }, [])

  return {
    data: {
      fieldSliderData,
    },
    handler: {
      handleCloseDetailModal,
      handleCloseSnackbar,
      handleOpenDetailModal,
      setAlert,
      setIsNeedRefetch,
      setOpenDetailModal,
    },
    state: {
      alert,
      openDetailModal,
      selectedFieldId,
    },
  }
}

export default useCustom