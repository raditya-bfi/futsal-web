import React, { memo } from 'react'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

function Loading({ children, height = '', loading, loadingComponent = null, py }) {
  if (loading) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' height={height} py={py}>
        {loadingComponent || <CircularProgress color='secondary' />}
      </Box>
    )
  }

  return <> {children}</>
}

export default memo(Loading)
