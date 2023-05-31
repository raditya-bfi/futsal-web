import { MenuDashboard, MenuLapangan, MenuOperator, MenuPenyewaan } from '~/assets/svg'

export const MENU_TAB_KEY = {
  DASBOR: 'DASBOR',
  PENYEWAAN: 'PENYEWAAN',
  LAPANGAN: 'LAPANGAN',
  OPERATOR: 'OPERATOR',
}

export const MENU_TAB_MAPPING = {
  [MENU_TAB_KEY.DASBOR]: {
    icon: MenuDashboard,
    name: 'Dasbor',
  },
  [MENU_TAB_KEY.PENYEWAAN]: {
    icon: MenuPenyewaan,
    name: 'Penyewaan',
  },
  [MENU_TAB_KEY.LAPANGAN]: {
    icon: MenuLapangan,
    name: 'Lapangan',
  },
  [MENU_TAB_KEY.OPERATOR]: {
    icon: MenuOperator,
    name: 'Operator',
  },
}

export const MENU_TAB_VALUE = {
  [MENU_TAB_KEY.DASBOR]: '1',
  [MENU_TAB_KEY.PENYEWAAN]: '2',
  [MENU_TAB_KEY.LAPANGAN]: '3',
  [MENU_TAB_KEY.OPERATOR]: '4',
}

export const MENU_TAB_VALUE_ROUTE_MAPPING = {
  [MENU_TAB_VALUE[MENU_TAB_KEY.DASBOR]]: '/dashboard',
  [MENU_TAB_VALUE[MENU_TAB_KEY.OPERATOR]]: '/operator',
}

export const DASHBOARD_MENU_TAB_KEY = {
  PENDAPATAN: 'PENDAPATAN',
  JAM_PENYEWAAN: 'JAM_PENYEWAAN',
}

export const DASHBOARD_TAB_MAPPING = {
  [DASHBOARD_MENU_TAB_KEY.PENDAPATAN]: {
    prefix: 'Rp ',
    name: 'Jumlah Pendapatan - ',
    suffix: '',
  },
  [DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN]: {
    prefix: '',
    name: 'Jumlah Jam Penyewaan - ',
    suffix: ' Jam',
  },
}

export const DASHBOARD_MENU_TAB_VALUE = {
  [DASHBOARD_MENU_TAB_KEY.PENDAPATAN]: '1',
  [DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN]: '2',
}
