import PropTypes from 'prop-types'
import * as React from 'react'

import { LoadingButton } from '@mui/lab'
import { Button as MaterialButton } from '@mui/material'

import useStyle from './style'

function Button({ disabled, handleOnClick, isFullWidth, label, loading, type, variant }) {
  const classes = useStyle({ disabled, variant })
  if (type === 'button') {
    return (
      <MaterialButton
        className={classes.button}
        disabled={disabled}
        fullWidth={isFullWidth}
        loading={loading === 'true' || undefined}
        onClick={handleOnClick}
        type={type}
      >
        {label}
      </MaterialButton>
    )
  }
  return (
    <LoadingButton
      className={classes.button}
      disabled={disabled}
      fullWidth={isFullWidth}
      loading={loading === 'true' || undefined}
      onClick={handleOnClick}
      type={type}
    >
      {label}
    </LoadingButton>
  )
}

Button.defaultProps = {
  disabled: false,
  handleOnClick: () => {},
  isFullWidth: false,
  label: 'Button',
  loading: false,
  type: 'button',
  variant: 'primary',
}

Button.propTypes = {
  disabled: PropTypes.bool,
  handleOnClick: PropTypes.func,
  isFullWidth: PropTypes.bool,
  label: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'no-outlined']),
}

export default Button
