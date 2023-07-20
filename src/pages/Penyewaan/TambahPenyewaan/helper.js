import { get, set, toNumber } from 'lodash-es'
import moment from 'moment'

import date from '~/config/date'
import { DATE_PICKER_ACTIVE_MAPPING } from '~/constants/general'

export const getFieldGalleries = (savedPhotos = []) => {
  const res = [
    {
      id: 1,
      image: null,
    },
    {
      id: 2,
      image: null,
    },
    {
      id: 3,
      image: null,
    },
    {
      id: 4,
      image: null,
    },
    {
      id: 5,
      image: null,
    },
  ]

  if (savedPhotos && savedPhotos.length > 0) {
    savedPhotos.forEach((photo, index) => {
      set(res, `[${index}].gallery_id`, photo.gallery_id)
      set(res, `[${index}].image`, photo.image)
    })
  }

  return res
}

export const getListOfFieldOptions = (fieldList = []) => {
  const res = []
  if (fieldList && fieldList.length > 0) {
    fieldList.forEach((field) => {
      res.push({
        key: field?.field_id,
        value: field?.field_id,
        label: field?.name,
      })
    })
  }

  return res
}

export const getStartTimeOptions = (fieldSchedule = [], selectedDate = '') => {
  const res = []
  const sysDate = moment().format(date.daily.format)
  let sysHour = moment().format('HH')
  let sysMinutes = moment().format('mm')
  sysMinutes = sysMinutes.charAt(0) === '0' ? sysMinutes.charAt(1) : sysMinutes
  sysHour = sysHour.charAt(0) === '0' ? sysHour.charAt(1) : sysHour
  if (fieldSchedule) {
    Object.keys(fieldSchedule).forEach((schedule) => {
      const scheduleStatus = get(fieldSchedule, schedule, false)
      const scheduleTime = schedule.split('-')[0]
      const startTemp = scheduleTime.split(':')[0]
      const startTime = startTemp.charAt(0) === '0' ? startTemp.charAt(1) : startTemp
      // check start time must be greater or equal than sys date time when booking on today
      let checkedMinutes = true
      if (toNumber(startTime) === toNumber(sysHour)) {
        // user still choose start time when late 15 minutes
        checkedMinutes = toNumber(sysMinutes) <= 15
      }
      const checked =
        sysDate !== selectedDate ? true : toNumber(startTime) >= toNumber(sysHour) && checkedMinutes
      if (scheduleStatus === true && checked) {
        res.push({
          key: startTime,
          value: toNumber(startTime),
          label: scheduleTime,
        })
      }
    })
  }
  return res
}

export const getScheduleTableData = (
  duration,
  selectedStartTime,
  fieldSchedule,
  selectedDate = '',
) => {
  const res = {
    startTime: '',
    start: 0,
    endTime: '',
    end: 0,
    table: [],
  }

  if (fieldSchedule && selectedStartTime) {
    let lookupTime = selectedStartTime + 0.5
    let durationRemaining = duration
    const sysDate = moment().format(date.daily.format)
    let sysHour = moment().format('HH')
    sysHour = sysHour.charAt(0) === '0' ? sysHour.charAt(1) : sysHour
    Object.keys(fieldSchedule).forEach((schedule) => {
      const scheduleStatus = get(fieldSchedule, schedule, false)
      const scheduleTime = schedule.split('-')
      const startTemp = scheduleTime[0].split(':')[0]
      const startTime = startTemp.charAt(0) === '0' ? startTemp.charAt(1) : startTemp
      const endTemp = scheduleTime[1].split(':')[0]
      const endTime = endTemp.charAt(0) === '0' ? endTemp.charAt(1) : endTemp
      // check start time must be greater or equal than sys date time when booking on today
      const checked = sysDate !== selectedDate ? true : toNumber(startTime) >= toNumber(sysHour)
      if (scheduleStatus && checked) {
        if (toNumber(startTime) <= lookupTime && lookupTime <= toNumber(endTime)) {
          if (lookupTime > selectedStartTime + 0.5) {
            set(res, 'endTime', scheduleTime[1])
            set(res, 'end', toNumber(endTime))
          } else {
            set(res, 'startTime', scheduleTime[0])
            set(res, 'start', toNumber(startTime))
            set(res, 'endTime', scheduleTime[1])
            set(res, 'end', toNumber(endTime))
          }
          if (duration > 1 && durationRemaining > 1) {
            lookupTime += 1
            durationRemaining -= 1
          }
          res.table.push({
            schedule,
            status: 'Tersedia',
            type: 'pick',
          })
        } else {
          res.table.push({
            schedule,
            status: 'Tersedia',
            type: 'available',
          })
        }
      } else if (scheduleStatus && !checked) {
        res.table.push({
          schedule,
          status: 'Tidak tersedia',
          type: 'notAvailable',
        })
      } else {
        res.table.push({
          schedule,
          status: 'Telah dipesan',
          type: 'notAvailable',
        })
      }
    })
  } else if (fieldSchedule && selectedStartTime === null) {
    Object.keys(fieldSchedule).forEach((schedule) => {
      res.table.push({
        schedule,
        status: 'Tidak tersedia',
        type: 'notAvailable',
      })
    })
  }

  return res
}

export const isNextScheduleAvailable = (duration, selectedStartTime, fieldSchedule) => {
  let res = false
  if (duration > 1 && fieldSchedule) {
    const nextScheduleStartTime = selectedStartTime + 1.5
    Object.keys(fieldSchedule).forEach((schedule) => {
      if (res === false) {
        const scheduleStatus = get(fieldSchedule, schedule, false)
        if (scheduleStatus === true) {
          const scheduleTime = schedule.split('-')
          const startTemp = scheduleTime[0].split(':')[0]
          const startTime = startTemp.charAt(0) === '0' ? startTemp.charAt(1) : startTemp
          const endTemp = scheduleTime[1].split(':')[0]
          const endTime = endTemp.charAt(0) === '0' ? endTemp.charAt(1) : endTemp
          if (
            toNumber(startTime) <= nextScheduleStartTime &&
            nextScheduleStartTime <= toNumber(endTime)
          ) {
            res = true
          }
        }
      }
    })
  } else if (duration === 1) {
    return true
  }
  return res
}

export const getInvoiceData = (duration, schedule, fieldData) => {
  const res = {
    day_price: fieldData?.harga,
    day_price_quantity: 0,
    night_price: fieldData?.harga_malam,
    night_price_quantity: 0,
    admin_price: 0,
    total_price: 0,
  }

  if (schedule?.table && schedule?.table.length > 0 && fieldData?.waktu_mulai_malam) {
    let fieldNightStartTime = fieldData?.waktu_mulai_malam.split(':')[0]
    fieldNightStartTime =
      fieldNightStartTime.charAt(0) === '0' ? fieldNightStartTime.charAt(1) : fieldNightStartTime
    for (let counter = schedule.start; counter < schedule.end; counter += 1) {
      if (counter < toNumber(fieldNightStartTime)) {
        set(res, 'day_price_quantity', get(res, 'day_price_quantity', 0) + 1)
      } else {
        set(res, 'night_price_quantity', get(res, 'night_price_quantity', 0) + 1)
      }
    }
    const totalDay = res.day_price * res.day_price_quantity
    const totalNight = res.night_price * res.night_price_quantity
    set(res, 'total_price', totalDay + totalNight)
  }

  return res
}

export const DURATION_OPTIONS = [
  {
    key: 1,
    value: 1,
    label: '1 Jam',
  },
  {
    key: 2,
    value: 2,
    label: '2 Jam',
  },
]

export const PAYMENT_OPTIONS = [
  {
    key: 1,
    value: 1,
    label: 'Uang Tunai / Cash',
  },
]

export const getActiveDays = (fieldData = {}) => {
  const activeDays = []
  if (fieldData?.days_active && fieldData?.days_active.length > 0) {
    fieldData?.days_active.forEach((day) => {
      activeDays.push(DATE_PICKER_ACTIVE_MAPPING[day?.day_name])
    })
  }
  return activeDays
}
