import loadable from '@loadable/component'

const DashboardPage = loadable(() => import('~/pages/Dashboard'))
const OperatorPage = loadable(() => import('~/pages/Operator'))
const LandingPage = loadable(() => import('~/pages/Home'))

export default [
  {
    id: 'dashboard',
    title: 'Halaman Dasbor',
    path: '/dashboard',
    defaultPath: '/dashboard',
    component: <DashboardPage />,
    exact: false,
    withHeader: true,
  },
  {
    id: 'operator',
    title: 'Halaman Operator',
    path: '/operator',
    defaultPath: '/operator',
    component: <OperatorPage />,
    exact: false,
    withHeader: true,
  },
  {
    id: 'landing',
    title: 'Landing Page',
    path: '/landing',
    defaultPath: '/landing',
    component: <LandingPage />,
    exact: false,
    withHeader: true,
  },
]
