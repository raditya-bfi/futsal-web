/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from 'react'

import moment from 'moment'

import date from '~/config/date'
import { BOOKING_PAYMENT_STATUS_KEY } from '~/constants/general'
import { getMoreBookingsList } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'

import { getBookingTableData, getPagination } from './helper'

const useCustom = () => {
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()

  const [bookingsData, setBookingsData] = useState([])
  const [openDetailModal, setOpenDetailModal] = useState(false)
  const [selectedBookingId, setSelectedBookingId] = useState(null)
  const [isNeedRefetch, setIsNeedRefetch] = useState(false)
  const [selectedDate, setSelectedDate] = useState(moment().format(date.daily.format))
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState(
    BOOKING_PAYMENT_STATUS_KEY.PAID,
  )

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

  const handleOpenDetailModal = (userId) => {
    setOpenDetailModal(true)
    setSelectedBookingId(userId)
  }

  const handleCloseDetailModal = () => {
    setOpenDetailModal(false)
  }

  const handleCloseSnackbar = () => {
    setAlert((prev) => ({
      ...prev,
      open: false,
    }))
  }

  const handleBackButton = () => {
    navigate('/penyewaan')
  }

  const handleChangeStatus = (event) => {
    setSelectedPaymentStatus(event.target.value)
  }

  const handleChangePage = useCallback((event, newPage) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: newPage,
    }))
  }, [])

  const bookingTableData = useMemo(
    () => getBookingTableData(bookingsData, selectedPaymentStatus, selectedDate, pagination),
    [bookingsData, selectedPaymentStatus, selectedDate, pagination],
  )

  const fetchBookingsData = async () => {
    await setIsLoading(true)
    // ? Init Bookings
    setBookingsData([])
    // ? Bookings
    const response = await getMoreBookingsList({
      date: selectedDate,
      status_bayar: selectedPaymentStatus,
    })
    if (response && response.status === 200) {
      const data = response?.data?.data || []
      setBookingsData(data)
      setPagination(getPagination(data))
    }
    if (isNeedRefetch) {
      setIsNeedRefetch(false)
    }
    await setIsLoading(false)
  }

  const handleSearchButton = () => {
    fetchBookingsData()
  }

  useEffect(() => {
    if (isNeedRefetch) {
      fetchBookingsData()
    }
  }, [isNeedRefetch, setIsNeedRefetch])

  useEffect(() => {
    fetchBookingsData()
  }, [selectedDate, selectedPaymentStatus])

  return {
    data: {
      bookingTableData,
    },
    handler: {
      handleBackButton,
      handleCloseDetailModal,
      handleCloseSnackbar,
      handleChangePage,
      handleChangeStatus,
      handleSearchButton,
      handleOpenDetailModal,
      setIsNeedRefetch,
      setSelectedDate,
      setOpenDetailModal,
    },
    state: {
      alert,
      pagination,
      openDetailModal,
      selectedBookingId,
      selectedDate,
      selectedPaymentStatus,
    },
  }
}

export default useCustom
