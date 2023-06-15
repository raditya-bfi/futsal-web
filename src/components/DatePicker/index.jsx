/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'

import { TextField } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
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
  width,
}) {
  const classes = useStyles({ width })
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
      />
    </LocalizationProvider>
  )
}

DatePicker.defaultProps = {
  dateConf: dateConfig,
  label: '',
  maxDate: moment().format(dateConfig.daily.format),
  minDate: moment('2012-01-01').format(dateConfig.daily.format),
  mode: 'daily',
  width: '11vw',
}

DatePicker.propTypes = {
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
