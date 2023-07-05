import PropTypes from 'prop-types'
import * as React from 'react'

import { Alert, AlertTitle, Snackbar as MaterialSnackbar } from '@mui/material'

import useStyle from './style'

function Snackbar({
  handleClose,
  horizontalPosition,
  message,
  open,
  severity,
  title,
  verticalPosition,
}) {
  const classes = useStyle({ severity })
  return (
    <MaterialSnackbar
      className={classes.snackBar}
      anchorOrigin={{
        vertical: verticalPosition,
        horizontal: horizontalPosition,
      }}
      autoHideDuration={300000}
      open={open}
      onClose={handleClose}
      sx={{ top: '45px' }}
    >
      <Alert
        classes={{
          action: classes.action,
          root: classes.alert,
          message: classes.message,
        }}
        elevation={6}
        onClose={handleClose}
        icon={false}
        severity={severity}
      >
        {title && title !== '' && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </MaterialSnackbar>
  )
}

Snackbar.defaultProps = {
  handleClose: () => {},
  horizontalPosition: 'center',
  message: '',
  open: false,
  severity: 'error',
  title: '',
  verticalPosition: 'top',
}

Snackbar.propTypes = {
  handleClose: PropTypes.func,
  horizontalPosition: PropTypes.oneOf(['center', 'left', 'right']),
  message: PropTypes.string,
  open: PropTypes.bool,
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  title: PropTypes.string,
  verticalPosition: PropTypes.oneOf(['top', 'bottom']),
}

export default Snackbar
