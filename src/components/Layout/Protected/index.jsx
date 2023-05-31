import { memo, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Box } from '@mui/material'

import CustomAppBar from '~/components/AppBar'
import Loading from '~/components/Loading'
import Overlay from '~/components/Overlay'
import routes from '~/routes'
import useLoading from '~/utils/loading/useLoading'

import useStyles from './style'

function ProtectedLayout() {
  const { isLoading } = useLoading()
  const classes = useStyles()
  return (
    <Suspense fallback={<Loading height='100%' loading />}>
      <CustomAppBar />
      <Box className={classes.pageContainer}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
          <Route element={<Navigate to='/dashboard' />} path='/' />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Box>
      <Overlay show={isLoading} />
    </Suspense>
  )
}

export default memo(ProtectedLayout)
