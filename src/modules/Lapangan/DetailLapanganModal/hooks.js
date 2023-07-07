import { useCallback, useEffect, useState } from 'react'

import { getDetailField, handleDeleteField } from '~/helpers/request'
import useAuth from '~/utils/auth/useAuth'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'

const useCustom = ({ setIsNeedRefetch, open, setOpenModal, fieldId }) => {
  const { state } = useAuth()
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()

  const [fieldData, setFieldData] = useState({})
  const [openConfirmModal, setOpenConfirmModal] = useState(false)

  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false)
  }

  const handleOpenConfirmModal = () => {
    setOpenConfirmModal(true)
  }

  const handleEditNavigation = (paramId) => {
    navigate('/lapangan/edit', {
      id: paramId,
    })
  }

  const handleDelete = useCallback(async () => {
    await setIsLoading(true)
    const response = await handleDeleteField(fieldId)
    if (response && (response?.status === 200 || response?.status === 201)) {
      setOpenModal(false)
      setOpenConfirmModal(false)
      setIsNeedRefetch(true)
      const notification = {
        open: true,
        title: '',
        severity: 'success',
        message: 'Berhasil menghapus Lapangan',
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
      setOpenConfirmModal(false)
      setIsNeedRefetch(true)
      const notification = {
        open: true,
        title: '',
        severity: 'error',
        message: response?.data?.message || response?.statusText,
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
    }
  }, [fieldId, setIsLoading, setOpenConfirmModal, setOpenModal, setIsNeedRefetch])

  const fetchFieldData = async () => {
    await setIsLoading(true)
    // ? Init Field
    setFieldData({})
    // ? Field
    const response = await getDetailField(fieldId)
    if (response && response.status === 200) {
      setFieldData(response?.data?.data || {})
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    if (fieldId) {
      fetchFieldData()
    }
  }, [open, fieldId])

  return {
    handler: {
      handleCloseConfirmModal,
      handleDelete,
      handleEditNavigation,
      handleOpenConfirmModal,
    },
    state: {
      fieldData,
      openConfirmModal,
      userData: state?.userData,
    },
  }
}

export default useCustom
