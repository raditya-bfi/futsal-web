/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { first } from 'lodash-es'
import moment from 'moment'

import date from '~/config/date'
import {
  getAvailableField,
  getDetailField,
  getListOfFields,
  handleAddBooking,
} from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'

import {
  DURATION_OPTIONS,
  getFieldGalleries,
  getInvoiceData,
  getListOfFieldOptions,
  getScheduleTableData,
  getStartTimeOptions,
  isNextScheduleAvailable,
  PAYMENT_OPTIONS,
} from './helper'

const useCustom = () => {
  const formikRef = useRef()
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()

  const [fieldSchedule, setFieldSchedule] = useState({})
  const [fieldList, setFieldList] = useState([])
  const [selectedFieldId, setSelectedFieldId] = useState(null)
  const [selectedStartTime, setSelectedStartTime] = useState(null)
  const [selectedDuration, setSelectedDuration] = useState(first(DURATION_OPTIONS).value)
  const [selectedPayment, setSelectedPayment] = useState(first(PAYMENT_OPTIONS).value)
  const [fieldData, setFieldData] = useState({})
  const [selectedDate, setSelectedDate] = useState(moment().format(date.daily.format))
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [summaryBookingData, setSummaryBookingData] = useState({})

  const [alert, setAlert] = useState({
    open: false,
    severity: 'error',
    title: '',
    message: '',
  })

  const handleBackButton = () => {
    navigate('/penyewaan')
  }

  const handleCloseSnackbar = () => {
    setAlert((prev) => ({
      ...prev,
      open: false,
    }))
  }

  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false)
    setSummaryBookingData({})
  }

  const handleChangeField = (event) => {
    setSelectedFieldId(event.target.value)
  }

  const handleChangeStartTime = (event) => {
    setSelectedStartTime(event.target.value)
    setSelectedDuration(1)
  }

  const handleChangeDuration = useCallback(
    (event) => {
      const durationValue = event.target.value
      const isValid = isNextScheduleAvailable(durationValue, selectedStartTime, fieldSchedule)
      if (isValid) {
        setSelectedDuration(durationValue)
      } else {
        setAlert((prev) => ({
          ...prev,
          open: true,
          title: '',
          severity: 'error',
          message: 'Jadwal selanjutnya tidak tersedia',
        }))
      }
    },
    [selectedStartTime, fieldSchedule],
  )

  const handleChangePayment = (event) => {
    setSelectedPayment(event.target.value)
  }

  const fieldOptions = useMemo(() => getListOfFieldOptions(fieldList), [fieldList])
  const fieldPhotos = useMemo(() => getFieldGalleries(fieldData?.galleries), [fieldData])
  const startTimeOptions = useMemo(
    () => getStartTimeOptions(fieldSchedule, selectedDate),
    [fieldSchedule, selectedDate],
  )
  const fieldScheduleTable = useMemo(
    () => getScheduleTableData(selectedDuration, selectedStartTime, fieldSchedule, selectedDate),
    [selectedDuration, selectedStartTime, fieldSchedule, selectedDate],
  )
  const invoiceData = useMemo(
    () => getInvoiceData(selectedDuration, fieldScheduleTable, fieldData),
    [selectedDuration, fieldScheduleTable, fieldData],
  )

  const handleOpenConfirmModal = useCallback(() => {
    setOpenConfirmModal(true)
    const summaryData = {
      bookingTime: fieldScheduleTable.startTime,
      date: moment(selectedDate).format('DD MMMM YYYY'),
      duration: selectedDuration,
      fieldName: fieldOptions.find((data) => data?.value === selectedFieldId).label,
      totalPrice: invoiceData?.total_price,
    }
    setSummaryBookingData(summaryData)
  }, [fieldScheduleTable, invoiceData, selectedDate, selectedDuration, selectedFieldId])

  const handleAddBookingField = useCallback(async () => {
    await setIsLoading(true)
    const response = await handleAddBooking({
      field_id: selectedFieldId,
      booking_date: selectedDate,
      booking_time: fieldScheduleTable.startTime,
      duration: selectedDuration,
    })
    if (response && (response?.status === 200 || response?.status === 201)) {
      setAlert((prev) => ({
        ...prev,
        open: true,
        title: '',
        severity: 'success',
        message: 'Berhasil menambah Penyewaan',
      }))
      await setIsLoading(false)
      const notification = {
        open: true,
        title: '',
        severity: 'success',
        message: 'Berhasil menambah Penyewaan',
        newBookingId: response?.data?.data?.booking_id,
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
      setAlert((prev) => ({
        ...prev,
        open: true,
        title: '',
        severity: 'error',
        message: response?.data?.message || response?.statusText,
      }))
      await setIsLoading(false)
    }
  }, [selectedFieldId, selectedDate, fieldScheduleTable, selectedDuration])

  const fetchAvailableField = async (fieldId, scheduleDate) => {
    await setIsLoading(true)
    // ? Init Available Field Data
    setFieldSchedule({})
    // ? Available Field Data
    const response = await getAvailableField(fieldId, {
      date: scheduleDate,
    })
    if (response && response.status === 200) {
      const data = response?.data?.data || {}
      setFieldSchedule(data)
    }
    await setIsLoading(false)
  }

  const fetchDetailField = async (fieldId) => {
    await setIsLoading(true)
    // ? Init Field Data
    setFieldData({})
    // ? Field Data
    const response = await getDetailField(fieldId)
    if (response && response.status === 200) {
      const data = response?.data?.data || {}
      setFieldData(data)
    }
    await setIsLoading(false)
  }

  const fetchListOfFieldData = async () => {
    await setIsLoading(true)
    // ? Init Field List
    setFieldList([])
    // ? Field List
    const response = await getListOfFields()
    if (response && response.status === 200) {
      const data = response?.data?.data || []
      setFieldList(data)
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    if (startTimeOptions && startTimeOptions.length > 0) {
      setSelectedStartTime(first(startTimeOptions).value)
    }
  }, [startTimeOptions])

  useEffect(() => {
    if (selectedFieldId && selectedDate) {
      fetchAvailableField(selectedFieldId, selectedDate)
    }
  }, [selectedFieldId, selectedDate])

  useEffect(() => {
    if (selectedFieldId) {
      fetchDetailField(selectedFieldId)
    }
  }, [selectedFieldId])

  useEffect(() => {
    if (fieldOptions && fieldOptions.length > 0) {
      setSelectedFieldId(first(fieldOptions).value)
    }
  }, [fieldOptions])

  useEffect(() => {
    fetchListOfFieldData()
  }, [])

  return {
    data: {
      fieldData,
      fieldOptions,
      fieldPhotos,
      fieldScheduleTable,
      invoiceData,
      startTimeOptions,
    },
    handler: {
      handleAddBookingField,
      handleBackButton,
      handleChangeDuration,
      handleChangeField,
      handleChangePayment,
      handleChangeStartTime,
      handleCloseConfirmModal,
      handleCloseSnackbar,
      handleOpenConfirmModal,
      setAlert,
      setSelectedDate,
      setSelectedStartTime,
    },
    refs: {
      formikRef,
    },
    state: {
      alert,
      openConfirmModal,
      selectedDate,
      selectedDuration,
      selectedFieldId,
      selectedPayment,
      selectedStartTime,
      summaryBookingData,
    },
  }
}

export default useCustom
