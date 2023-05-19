import { memo, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import CustomAppBar from '~/components/AppBar'
import Loading from '~/components/Loading'
import routes from '~/routes'

function ProtectedLayout() {
  return (
    <Suspense fallback={<Loading height='100%' loading />}>
      <CustomAppBar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route element={<Navigate to='/landing' />} path='/' />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </Suspense>
  )
}

export default memo(ProtectedLayout)
