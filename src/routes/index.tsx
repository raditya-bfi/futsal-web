import loadable from '@loadable/component'

const DashboardPage = loadable(() => import('~/pages/Dashboard'))
const PenyewaanPage = loadable(() => import('~/pages/Penyewaan'))
const AddPenyewaanPage = loadable(() => import('~/pages/Penyewaan/TambahPenyewaan'))
const AturanPenyewaanPage = loadable(() => import('~/pages/Penyewaan/BookingRules'))
const ListPenyewaanPage = loadable(() => import('~/pages/Penyewaan/MoreList'))
const LapanganPage = loadable(() => import('~/pages/Lapangan'))
const AddLapanganPage = loadable(() => import('~/pages/Lapangan/TambahLapangan'))
const SuntingLapanganPage = loadable(() => import('~/pages/Lapangan/SuntingLapangan'))
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
    component: <PenyewaanPage />,
    exact: true,
    withHeader: true,
  },
  {
    id: 'penyewaan-tambah',
    title: 'Halaman Tambah Penyewaan',
    path: '/penyewaan/tambah',
    defaultPath: '/penyewaan/tambah',
    component: <AddPenyewaanPage />,
    exact: true,
    withHeader: false,
  },
  {
    id: 'penyewaan-rules',
    title: 'Halaman Aturan Penyewaan Mobile',
    path: '/penyewaan/aturan',
    defaultPath: '/penyewaan/aturan',
    component: <AturanPenyewaanPage />,
    exact: true,
    withHeader: false,
  },
  {
    id: 'more-list',
    title: 'Halaman Daftar Sewa Lebih Banyak',
    path: '/penyewaan/list',
    defaultPath: '/penyewaan/list',
    component: <ListPenyewaanPage />,
    exact: true,
    withHeader: false,
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
    id: 'lapangan-add',
    title: 'Halaman Tambah Lapangan',
    path: '/lapangan/add',
    defaultPath: '/lapangan/add',
    component: <AddLapanganPage />,
    exact: true,
    withHeader: false,
  },
  {
    id: 'lapangan-edit',
    title: 'Halaman Sunting Lapangan',
    path: '/lapangan/edit',
    defaultPath: '/lapangan/edit',
    component: <SuntingLapanganPage />,
    exact: true,
    withHeader: false,
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
    title: 'Halaman Arsip Operator',
    path: '/operator/archived',
    defaultPath: '/operator/archived',
    component: <ArchivedPage />,
    exact: true,
    withHeader: false,
  },
  {
    id: 'forbidden',
    title: 'Halaman 403',
    path: '/403',
    defaultPath: '/434',
    component: <ForbiddenPage />,
    exact: true,
    withHeader: false,
  },
  {
    id: 'not-found',
    title: 'Halaman 404',
    path: '/404',
    defaultPath: '/404',
    component: <NotFoundPage />,
    exact: true,
    withHeader: false,
  },
]
