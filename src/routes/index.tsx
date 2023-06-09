import loadable from '@loadable/component'

const DashboardPage = loadable(() => import('~/pages/Dashboard'))
const LapanganPage = loadable(() => import('~/pages/Lapangan'))
const OperatorPage = loadable(() => import('~/pages/Operator'))
const ArchivedPage = loadable(() => import('~/pages/Archived'))
const NotFoundPage = loadable(() => import('~/pages/NotFound'))
const ForbiddenPage = loadable(() => import('~/pages/Forbidden'))

export default [
  {
    id: 'dashboard',
    title: 'Halaman Dasbor',
    path: '/dashboard',
    defaultPath: '/dashboard',
    component: <DashboardPage />,
    exact: true,
    withHeader: true,
  },
  {
    id: 'penyewaan',
    title: 'Halaman Penyewaan',
    path: '/penyewaan',
    defaultPath: '/penyewaan',
    component: <>Penyewaan</>,
    exact: true,
    withHeader: true,
  },
  {
    id: 'lapangan',
    title: 'Halaman Lapangan',
    path: '/lapangan',
    defaultPath: '/lapangan',
    component: <LapanganPage />,
    exact: true,
    withHeader: true,
  },
  {
    id: 'operator',
    title: 'Halaman Operator',
    path: '/operator',
    defaultPath: '/operator',
    component: <OperatorPage />,
    exact: true,
    withHeader: true,
  },
  {
    id: 'operator-archived',
    title: 'Operator Archived Page',
    path: '/operator/archived',
    defaultPath: '/operator/archived',
    component: <ArchivedPage />,
    exact: true,
    withHeader: false,
  },
  {
    id: 'not-found',
    title: 'Not Found Page',
    path: '/404',
    defaultPath: '/404',
    component: <NotFoundPage />,
    exact: true,
    withHeader: true,
  },
  {
    id: 'forbidden',
    title: 'Forbidden Page',
    path: '/403',
    defaultPath: '/434',
    component: <ForbiddenPage />,
    exact: true,
    withHeader: true,
  },
]
