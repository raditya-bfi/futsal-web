import PropTypes from 'prop-types'

import { Backdrop, CircularProgress } from '@mui/material'

import useStyles from './style'

function Overlay({ show, label, progressIcon }) {
  const classes = useStyles()
  return (
    <Backdrop open={show} className={classes.overlay}>
      {progressIcon}
      <div>{label}</div>
    </Backdrop>
  )
}

Overlay.defaultProps = {
  show: false,
  label: 'Mohon Tunggu',
  progressIcon: <CircularProgress color='inherit' />,
}

Overlay.propTypes = {
  show: PropTypes.bool,
  label: PropTypes.string,
  progressIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.elementType]),
}

export default Overlay
