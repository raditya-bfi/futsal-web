/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import React from 'react'

import { AddOutlined } from '@mui/icons-material'
import { Box } from '@mui/material'

import useCustom from './hooks'
import useStyle from './style'

function AddLapanganFoto({ maxFiles, setAlert, setFiles }) {
  const { dropZone } = useCustom({ maxFiles, setAlert, setFiles })
  const classes = useStyle()

  return (
    <Box
      {...dropZone.getRootProps({
        className: classes.container,
      })}
    >
      <input {...dropZone.getInputProps()} required />
      <Box className={classes.addWrapper}>
        <AddOutlined />
      </Box>
    </Box>
  )
}

AddLapanganFoto.defaultProps = {
  maxFiles: 1,
}

AddLapanganFoto.propTypes = {
  maxFiles: PropTypes.number,
  setAlert: PropTypes.func.isRequired,
  setFiles: PropTypes.func.isRequired,
}

export default AddLapanganFoto
