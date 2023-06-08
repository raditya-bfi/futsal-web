import { memo, Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { Box } from '@mui/material'

import CustomAppBar from '~/components/AppBar'
import Loading from '~/components/Loading'
import Overlay from '~/components/Overlay'
import { getCurrentRoute } from '~/helpers/general'
import routes from '~/routes'
import useLoading from '~/utils/loading/useLoading'

import useStyles from './style'

function ProtectedLayout() {
  const { isLoading } = useLoading()
  const location = useLocation()
  const classes = useStyles()

  const [currentRoute, setCurrentRoute] = useState({})

  useEffect(() => {
    if (location?.pathname) {
      const currRoute = getCurrentRoute(routes, location?.pathname)
      setCurrentRoute(currRoute)
    }
  }, [location?.pathname])

  return (
    <Suspense fallback={<Loading height='100%' loading />}>
      {currentRoute && currentRoute?.withHeader === true && <CustomAppBar />}
      <Box
        className={
          currentRoute && currentRoute?.withHeader === true
            ? classes.pageContainer
            : classes.pageContainerWithoutHeader
        }
      >
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
