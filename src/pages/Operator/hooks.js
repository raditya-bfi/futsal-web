/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { getListOfOperator } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

const useCustom = () => {
  const { setIsLoading } = useLoading()

  const [operatorsData, setOperatorsData] = useState([])
  const [openAddModal, setOpenAddModal] = useState(false)
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

  const handleOpenAddModal = () => {
    setOpenAddModal(true)
  }

  const handleCloseAddModal = () => {
    setOpenAddModal(false)
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
      handleCloseSnackbar,
      handleOpenAddModal,
      setAlert,
      setIsNeedRefetch,
      setOpenAddModal,
    },
    state: {
      alert,
      openAddModal,
    },
  }
}

export default useCustom
