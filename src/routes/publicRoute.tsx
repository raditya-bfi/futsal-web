import { lazy } from 'react'
const LoginPage = lazy(() => import('~/pages/Login'))

export default [
  {
    id: 'login-page',
    path: '/',
    component: <LoginPage/>,
  },
]
