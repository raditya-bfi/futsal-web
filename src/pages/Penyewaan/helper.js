import { orderBy } from 'lodash-es'

export const getBookingStatusByTime = (currentTime, startTime, endTime) => {
  const currentDate = new Date()
  currentDate.setHours(currentTime.split('.')[0])
  currentDate.setMinutes(currentTime.split('.')[1])
  currentDate.setSeconds('00')

  const startDate = new Date(currentDate.getTime())
  startDate.setHours(startTime.split(':')[0])
  startDate.setMinutes(startTime.split(':')[1])
  startDate.setSeconds('00')

  const endDate = new Date(currentDate.getTime())
  endDate.setHours(endTime.split(':')[0])
  endDate.setMinutes(endTime.split(':')[1])
  endDate.setSeconds('00')

  if (startDate <= currentDate && endDate >= currentDate) {
    return 'onprogress'
  }
  if (currentDate < startDate && currentDate < endDate) {
    return 'waiting'
  }
  return 'done'
}

export const getBookingList = (bookingsData, currentTime) => {
  const res = []
  const data = bookingsData

  if (data && data.length > 0) {
    data.forEach((bookingData) => {
      const fieldData = {}
      fieldData.fieldId = bookingData?.field_id
      fieldData.fieldName = bookingData?.name
      const fieldBookings = []
      bookingData?.bookings.forEach((booking) => {
        const tempBooking = {}
        tempBooking.bookingId = booking?.booking_id
        tempBooking.bookingPlatform = booking?.platform_booking
        tempBooking.bookingUser = booking?.user
        tempBooking.bookingTime = booking?.booking_time
        const bookingTime = booking?.booking_time.split('-')
        tempBooking.bookingStatus = getBookingStatusByTime(
          currentTime,
          bookingTime[0],
          bookingTime[1],
        )
        fieldBookings.push(tempBooking)
      })
      // order data by booking time
      fieldData.bookings = orderBy(fieldBookings, ['bookingTime'], ['asc'])
      res.push(fieldData)
    })
  }

  return res
}
