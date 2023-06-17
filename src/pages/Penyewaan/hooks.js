/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react'

import moment from 'moment'

import { getListOfBookings } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'

import { getBookingList } from './helper'

const useCustom = () => {
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()

  const todayDate = moment().format('YYYY-MM-DD')

  const [bookingsData, setBookingsData] = useState([])
  const [openDetailModal, setOpenDetailModal] = useState(false)
  const [selectedBookingId, setSelectedBookingId] = useState(null)
  const [isNeedRefetch, setIsNeedRefetch] = useState(false)
  const [locale, setLocale] = useState({
    time: new Date().toLocaleTimeString('id', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h24',
    }),
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

  const handleRedirectToTambahPenyewaan = () => {
    navigate('/penyewaan/tambah')
  }

  const handleRedirectToMobileRules = () => {
    navigate('/penyewaan/aturan')
  }

  const handleRedirectToMoreList = () => {
    navigate('/penyewaan/list')
  }

  const handleCloseSnackbar = () => {
    setAlert((prev) => ({
      ...prev,
      open: false,
    }))
  }

  const fetchBookingData = async () => {
    await setIsLoading(true)
    // ? Init Bookings
    setBookingsData([])
    // ? Bookings
    const response = await getListOfBookings({
      date: todayDate,
    })
    if (response && response.status === 200) {
      setBookingsData(response?.data?.data || [])
    }
    if (isNeedRefetch) {
      setIsNeedRefetch(false)
    }
    await setIsLoading(false)
  }

  const bookingListData = useMemo(
    () => getBookingList(bookingsData, locale.time),
    [bookingsData, locale.time],
  )

  useEffect(() => {
    if (isNeedRefetch) {
      fetchBookingData()
    }
  }, [isNeedRefetch, setIsNeedRefetch])

  useEffect(() => {
    fetchBookingData()
  }, [])

  useEffect(() => {
    const itv = setInterval(() => {
      setLocale({
        time: new Date().toLocaleTimeString('id', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hourCycle: 'h24',
        }),
      })
    }, 60000)
    return () => clearInterval(itv)
  }, [])

  return {
    data: {
      bookingListData,
    },
    handler: {
      handleCloseDetailModal,
      handleCloseSnackbar,
      handleRedirectToMobileRules,
      handleRedirectToMoreList,
      handleRedirectToTambahPenyewaan,
      handleOpenDetailModal,
      setAlert,
      setIsNeedRefetch,
      setOpenDetailModal,
    },
    state: {
      alert,
      openDetailModal,
      selectedBookingId,
    },
  }
}

export default useCustom
