import { useCallback, useEffect, useState } from 'react'

import { getDetailBooking, handleCancelBooking } from '~/helpers/request'
import useAuth from '~/utils/auth/useAuth'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'

const useCustom = ({ open, bookingId, setIsNeedRefetch }) => {
  const { state } = useAuth()
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()

  const [bookingData, setBookingData] = useState({})
  const [showCode, setShowCode] = useState(true)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [refecthDetail, setRefecthDetail] = useState(false)
  const handleClickShowCode = () => setShowCode(!showCode)

  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false)
  }

  const handleOpenConfirmModal = () => {
    setOpenConfirmModal(true)
  }

  const handleCancel = useCallback(async () => {
    await setIsLoading(true)
    const response = await handleCancelBooking(bookingId)
    if (response && (response?.status === 200 || response?.status === 201)) {
      await setIsLoading(false)
      setOpenConfirmModal(false)
      setIsNeedRefetch(true)
      setRefecthDetail(true)
      const notification = {
        open: true,
        title: '',
        severity: 'success',
        message: 'Berhasil membatalkan Transaksi',
        newBookingId: bookingId,
      }
      navigate(
        '/penyewaan',
        {},
        {
          state: {
            ...notification,
          },
        },
      )
    } else {
      setOpenConfirmModal(false)
      setIsNeedRefetch(true)
      setRefecthDetail(true)
      const notification = {
        open: true,
        title: '',
        severity: 'error',
        message: response?.data?.message || response?.statusText,
        newBookingId: bookingId,
      }
      navigate(
        '/penyewaan',
        {},
        {
          state: {
            ...notification,
          },
        },
      )
      await setIsLoading(false)
    }
  }, [bookingId, setIsLoading, setOpenConfirmModal, setIsNeedRefetch, setRefecthDetail])

  const fetchBookingData = async () => {
    await setIsLoading(true)
    // ? Init Booking
    setBookingData({})
    // ? Booking
    const response = await getDetailBooking(bookingId)
    if (response && response.status === 200) {
      setBookingData(response?.data?.data || {})
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    if (bookingId) {
      fetchBookingData()
    }
  }, [open, bookingId])

  useEffect(() => {
    if (refecthDetail) {
      fetchBookingData()
    }
  }, [refecthDetail])

  return {
    handler: {
      handleCancel,
      handleClickShowCode,
      handleCloseConfirmModal,
      handleOpenConfirmModal,
    },
    state: {
      bookingData,
      openConfirmModal,
      showCode,
      userData: state.userData,
    },
  }
}

export default useCustom
