/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { getListOfOperator } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'

const useCustom = () => {
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()

  const [operatorsData, setOperatorsData] = useState([])
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openDetailModal, setOpenDetailModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [isNeedRefetch, setIsNeedRefetch] = useState(false)

  const [alert, setAlert] = useState({
    open: false,
    severity: 'error',
    title: '',
    message: '',
  })

  const handleRedirectToArchived = () => {
    navigate('/operator/archived')
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

  const handleOpenAddModal = () => {
    setOpenAddModal(true)
  }

  const handleCloseAddModal = () => {
    setOpenAddModal(false)
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

  const fetchOperatorsData = async () => {
    await setIsLoading(true)
    // ? Init Operators
    setOperatorsData([])
    // ? Operators
    const response = await getListOfOperator({
      type: 'active',
    })
    if (response && response.status === 200) {
      setOperatorsData(response?.data?.data || [])
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
      operatorsData,
    },
    handler: {
      handleCloseAddModal,
      handleCloseDetailModal,
      handleCloseEditModal,
      handleCloseSnackbar,
      handleOpenAddModal,
      handleOpenDetailModal,
      handleOpenEditModal,
      handleRedirectToArchived,
      handleSuntingOperator,
      setAlert,
      setIsNeedRefetch,
      setOpenAddModal,
      setOpenDetailModal,
      setOpenEditModal,
    },
    state: {
      alert,
      openAddModal,
      openDetailModal,
      openEditModal,
      selectedUserId,
    },
  }
}

export default useCustom
