import PropTypes from 'prop-types'
import React from 'react'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'

import useCustom from './hooks'

function CustomField({
  className,
  disabled,
  error,
  inputProps,
  isFullWidth,
  isMultiline,
  isPersistLabel,
  isReadOnly,
  label,
  name,
  onChange,
  placeholder,
  required,
  rows,
  touch,
  type,
  value,
  variant,
}) {
  let isError = false
  if (error && touch) {
    isError = true
  }

  const { handler, state } = useCustom()

  const conditionalPassword = type === 'password' && state.showPassword ? 'text' : 'password'
  return (
    <TextField
      className={className}
      fullWidth={isFullWidth}
      disabled={disabled}
      error={isError}
      multiline={isMultiline}
      rows={rows}
      helperText={error}
      name={name}
      onChange={onChange}
      placeholder={!isPersistLabel && placeholder}
      required={required}
      label={label}
      type={type === 'password' ? conditionalPassword : type}
      variant={variant}
      value={value}
      InputProps={{
        endAdornment:
          type === 'password' ? (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handler.handleClickShowPassword}
                onMouseDown={handler.handleMouseDownPassword}
                edge='end'
              >
                {state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ) : (
            inputProps
          ),
        readOnly: isReadOnly,
      }}
    />
  )
}

CustomField.defaultProps = {
  disabled: false,
  error: '',
  inputProps: null,
  isFullWidth: false,
  isMultiline: false,
  isPersistLabel: false,
  isReadOnly: false,
  label: '',
  onChange: () => {},
  placeholder: '',
  required: false,
  rows: 3,
  touch: false,
  type: 'text',
  variant: 'outlined',
}

CustomField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputProps: PropTypes.string,
  isFullWidth: PropTypes.bool,
  isMultiline: PropTypes.bool,
  isPersistLabel: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  touch: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  variant: PropTypes.string,
}

export default CustomField
