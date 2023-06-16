import { useEffect, useState } from 'react'

import { getDetailBooking } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

const useCustom = ({ open, bookingId }) => {
  const { setIsLoading } = useLoading()

  const [bookingData, setBookingData] = useState({})
  const [showCode, setShowCode] = useState(true)
  const handleClickShowCode = () => setShowCode(!showCode)

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

  return {
    handler: {
      handleClickShowCode,
    },
    state: {
      bookingData,
      showCode,
    },
  }
}

export default useCustom
