import PropTypes from 'prop-types'
import React from 'react'

import { Checkbox, FormControlLabel, Typography } from '@mui/material'

import useStyles from './style'

function CustomCheckBox({ checked, label, name, onChange }) {
  const classes = useStyles()

  return (
    <FormControlLabel
      control={
        <Checkbox
          color='default'
          classes={{ root: classes.checkboxRoot }}
          checked={checked}
          name={name}
          onChange={(event) => onChange(event)}
          size='small'
        />
      }
      label={<Typography className={classes.labelRoot}>{label}</Typography>}
    />
  )
}

CustomCheckBox.defaultProps = {
  label: '',
}

CustomCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CustomCheckBox
