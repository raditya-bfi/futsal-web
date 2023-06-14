import PropTypes from 'prop-types'

import { Typography } from '@mui/material'

import useCustom from './hooks'
import useStyles from './style'

function LiveClock({ className, isOnlyTime, isWithTime }) {
  const classes = useStyles()
  const { state } = useCustom()

  if (isOnlyTime) {
    return (
      <div className={classes.liveClockContainer}>
        <Typography className={`${className} ${classes.dateBar}`}>{state.locale.time}</Typography>
      </div>
    )
  }
  return (
    <div className={classes.liveClockContainer}>
      <Typography className={`${className} ${classes.dateBar}`}>
        {isWithTime
          ? `${state.locale.weekday}, ${state.locale.date} ${state.locale.time}`
          : `${state.locale.weekday}, ${state.locale.date}`}
      </Typography>
    </div>
  )
}

LiveClock.defaultProps = {
  className: null,
  isOnlyTime: false,
  isWithTime: false,
}

LiveClock.propTypes = {
  className: PropTypes.string,
  isOnlyTime: PropTypes.bool,
  isWithTime: PropTypes.bool,
}

export default LiveClock
