/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import React from 'react'

import { AddOutlined } from '@mui/icons-material'
import { Box } from '@mui/material'

import useCustom from './hooks'
import useStyle from './style'

function LapanganFieldPhoto({ photoId, handleUpload }) {
  const { dropZone } = useCustom({ photoId, handleUpload })
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

LapanganFieldPhoto.propTypes = {
  photoId: PropTypes.number.isRequired,
  handleUpload: PropTypes.func.isRequired,
}

export default LapanganFieldPhoto