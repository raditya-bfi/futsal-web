import loadable from '@loadable/component'

const LandingPage = loadable(() => import('~/pages/Home'))

export default [
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
