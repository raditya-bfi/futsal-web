import { memo, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Box } from '@mui/material'
import { toLower } from 'lodash-es'

import CustomAppBar from '~/components/AppBar'
import Loading from '~/components/Loading'
import Overlay from '~/components/Overlay'
import routes from '~/routes'

import useCustom from './hooks'
import useStyles from './style'

function ProtectedLayout() {
  const classes = useStyles()
  const { state } = useCustom()

  return (
    <Suspense fallback={<Loading height='100%' loading />}>
      {state?.currentRoute && state?.currentRoute?.withHeader === true && <CustomAppBar />}
      <Box
        className={
          state?.currentRoute && state?.currentRoute?.withHeader === true
            ? classes.pageContainer
            : classes.pageContainerWithoutHeader
        }
      >
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
          <Route
            element={
              <Navigate
                to={toLower(state?.userData.type) === 'admin' ? '/dashboard' : '/penyewaan'}
              />
            }
            path='/'
          />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Box>
      <Overlay show={state?.isLoading} />
    </Suspense>
  )
}

export default memo(ProtectedLayout)
