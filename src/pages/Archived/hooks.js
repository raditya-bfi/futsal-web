/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from 'react'

import { getListOfOperator } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'

import { getOperatorTableData, getPagination } from './helper'

const useCustom = () => {
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()

  const [operatorsData, setOperatorsData] = useState([])
  const [isNeedRefetch, setIsNeedRefetch] = useState(false)
  const [openDetailModal, setOpenDetailModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [pagination, setPagination] = useState({
    rowPerPage: 10,
    currentPage: 1,
    totalData: 0,
    totalPage: 0,
  })

  const [alert, setAlert] = useState({
    open: false,
    severity: 'error',
    title: '',
    message: '',
  })

  const handleBackButton = () => {
    navigate('/operator')
  }

  const handleCloseSnackbar = () => {
    setAlert((prev) => ({
      ...prev,
      open: false,
    }))
  }

  const handleOpenDetailModal = (userId) => {
    setOpenDetailModal(true)
    setSelectedUserId(userId)
  }

  const handleCloseDetailModal = () => {
    setOpenDetailModal(false)
  }

  const handleOpenEditModal = () => {
    setOpenEditModal(true)
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false)
  }

  const handleSuntingOperator = (userId) => {
    setSelectedUserId(userId)
    setOpenDetailModal(false)
    setOpenEditModal(true)
  }

  const handleChangePage = useCallback((event, newPage) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: newPage,
    }))
  }, [])

  const operatorTableData = useMemo(
    () => getOperatorTableData(operatorsData, pagination),
    [operatorsData, pagination],
  )

  const fetchOperatorsData = async () => {
    await setIsLoading(true)
    // ? Init Operators
    setOperatorsData([])
    // ? Operators
    const response = await getListOfOperator({
      type: 'not-active',
    })
    if (response && response.status === 200) {
      const data = response?.data?.data || []
      setOperatorsData(data)
      setPagination(getPagination(data))
    }
    if (isNeedRefetch) {
      setIsNeedRefetch(false)
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    if (isNeedRefetch) {
      fetchOperatorsData()
    }
  }, [isNeedRefetch, setIsNeedRefetch])

  useEffect(() => {
    fetchOperatorsData()
  }, [])

  return {
    data: {
      operatorTableData,
    },
    handler: {
      handleBackButton,
      handleChangePage,
      handleCloseDetailModal,
      handleCloseEditModal,
      handleCloseSnackbar,
      handleOpenDetailModal,
      handleOpenEditModal,
      handleSuntingOperator,
      setAlert,
      setIsNeedRefetch,
      setOpenDetailModal,
      setOpenEditModal,
    },
    state: {
      alert,
      openDetailModal,
      openEditModal,
      pagination,
      selectedUserId,
    },
  }
}

export default useCustom
