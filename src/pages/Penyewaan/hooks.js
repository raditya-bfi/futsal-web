/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import moment from 'moment'

import { getListOfBookings } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'

const useCustom = () => {
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()

  const todayDate = moment().format('YYYY-MM-DD')

  const [bookingsData, setBookingsData] = useState([])
  const [isNeedRefetch, setIsNeedRefetch] = useState(false)

  const [alert, setAlert] = useState({
    open: false,
    severity: 'error',
    title: '',
    message: '',
  })

  const handleRedirectToMobileRules = () => {
    navigate('/penyewaan/rules')
  }

  const handleRedirectToMoreList = () => {
    navigate('/penyewaan/morelist')
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

  useEffect(() => {
    if (isNeedRefetch) {
      fetchBookingData()
    }
  }, [isNeedRefetch, setIsNeedRefetch])

  useEffect(() => {
    fetchBookingData()
  }, [])

  return {
    data: {
      bookingsData,
    },
    handler: {
      handleCloseSnackbar,
      handleRedirectToMobileRules,
      handleRedirectToMoreList,
      setAlert,
      setIsNeedRefetch,
    },
    state: {
      alert,
    },
  }
}

export default useCustom
