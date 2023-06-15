import {
  BOOKING_PAYMENT_STATUS_KEY,
  BOOKING_PAYMENT_STATUS_LABEL_MAPPING,
} from '~/constants/general'

export const getPagination = (bookingsData = []) => {
  const res = {
    rowPerPage: 10,
    currentPage: 1,
    totalData: 0,
    totalPage: 0,
  }

  if (bookingsData && bookingsData.length > 0) {
    const totalData = bookingsData.length
    // calculate total pages
    res.totalPage = Math.ceil(totalData / res.rowPerPage)
    res.totalData = totalData
  }

  return res
}

export const getBookingTableData = (
  bookingsData = [],
  selectedPaymentStatus = '',
  selectedDate = '',
  pagination = {},
) => {
  const res = {
    status: selectedPaymentStatus,
    date: selectedDate,
    tableData: [],
  }
  if (bookingsData && bookingsData.length > 0) {
    // calculate start and end item indexes
    const startIndex = (pagination.currentPage - 1) * pagination.rowPerPage
    const endIndex = Math.min(startIndex + pagination.rowPerPage - 1, pagination.totalData - 1)

    for (let counter = startIndex; counter <= endIndex; counter += 1) {
      res.tableData.push({
        key: counter,
        id: bookingsData[counter]?.booking_id,
        userName: bookingsData[counter]?.user_name,
        fieldName: bookingsData[counter]?.field_name,
        date: bookingsData[counter]?.booking_date,
        duration: bookingsData[counter]?.duration,
      })
    }
  }

  return res
}

export const STATUS_OPTIONS = [
  {
    key: BOOKING_PAYMENT_STATUS_KEY.PAID,
    value: BOOKING_PAYMENT_STATUS_KEY.PAID,
    label: BOOKING_PAYMENT_STATUS_LABEL_MAPPING[BOOKING_PAYMENT_STATUS_KEY.PAID],
  },
  {
    key: BOOKING_PAYMENT_STATUS_KEY.WAITING,
    value: BOOKING_PAYMENT_STATUS_KEY.WAITING,
    label: BOOKING_PAYMENT_STATUS_LABEL_MAPPING[BOOKING_PAYMENT_STATUS_KEY.WAITING],
  },
  {
    key: BOOKING_PAYMENT_STATUS_KEY.CANCELED,
    value: BOOKING_PAYMENT_STATUS_KEY.CANCELED,
    label: BOOKING_PAYMENT_STATUS_LABEL_MAPPING[BOOKING_PAYMENT_STATUS_KEY.CANCELED],
  },
]
