/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import { useCallback } from 'react'

import { TextField } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { findIndex, toNumber } from 'lodash-es'
import moment from 'moment'

import { CalendarIcon } from '~/assets/svg'
import dateConfig from '~/config/date'

import useStyles from './style'

function NewCalendarIcon() {
  return <img src={CalendarIcon} alt='date-picker-calendar-icon' />
}

function DatePicker({
  dateConf,
  handleDateChange,
  label,
  maxDate,
  minDate,
  mode,
  selectedDate,
  activeDays,
  width,
}) {
  const classes = useStyles({ width })

  const disableByDayName = useCallback(
    (date) => {
      let validate = false
      if (activeDays && activeDays.length > 0) {
        const dayNumber = toNumber(moment(date).format('d'))
        const isExist = findIndex(activeDays, (activeDay) => activeDay === dayNumber)
        if (isExist < 0) {
          validate = true
        }
      }
      return validate
    },
    [activeDays],
  )

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MuiDatePicker
        className={classes.datepickerRoot}
        components={{
          OpenPickerIcon: NewCalendarIcon,
        }}
        inputFormat={dateConf[mode].viewFormat}
        label={label}
        maxDate={maxDate}
        minDate={minDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
        value={moment(selectedDate).format(dateConf[mode].format)}
        views={dateConf[mode].mode}
        shouldDisableDate={disableByDayName}
      />
    </LocalizationProvider>
  )
}

DatePicker.defaultProps = {
  activeDays: [],
  dateConf: dateConfig,
  label: '',
  maxDate: moment().format(dateConfig.daily.format),
  minDate: moment('2012-01-01').format(dateConfig.daily.format),
  mode: 'daily',
  width: '11vw',
}

DatePicker.propTypes = {
  activeDays: PropTypes.arrayOf(PropTypes.string),
  dateConf: PropTypes.shape({}),
  handleDateChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  maxDate: PropTypes.string,
  minDate: PropTypes.string,
  mode: PropTypes.oneOf(['daily', 'monthly', 'yearly']),
  selectedDate: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DatePicker
