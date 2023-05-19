import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Loading from '~/components/Loading'
import Login from '~/pages/Login'
import publicRoute from '~/routes/publicRoute'
import useAuth from '~/utils/auth/useAuth'

function PublicLayout() {
  const { state } = useAuth()

  return state?.isLoggedIn ? null : (
    <Suspense fallback={<Loading loading />}>
      <Routes>
        {publicRoute.map(({ id, path, component: Component }) => (
          <Route key={id} path={path} element={Component} />
        ))}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  )
}

export default PublicLayout
