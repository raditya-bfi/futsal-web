import loadable from '@loadable/component'

const DashboardPage = loadable(() => import('~/pages/Dashboard'))
const OperatorPage = loadable(() => import('~/pages/Operator'))
const ArchivedPage = loadable(() => import('~/pages/Archived'))

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
]
