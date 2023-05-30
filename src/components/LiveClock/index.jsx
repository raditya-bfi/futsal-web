import PropTypes from 'prop-types'

import { Typography } from '@mui/material'

import useCustom from './hooks'
import useStyles from './style'

function LiveClock({ className, isWithTime }) {
  const classes = useStyles()
  const { state } = useCustom()

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
  isWithTime: false,
}

LiveClock.propTypes = {
  className: PropTypes.string,
  isWithTime: PropTypes.bool,
}

export default LiveClock
