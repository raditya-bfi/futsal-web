import { MenuDashboard, MenuLapangan, MenuOperator, MenuPenyewaan } from '~/assets/svg'

export const MAXIMUM_UPLOAD_FILE_SIZE = 512000

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
  [MENU_TAB_VALUE[MENU_TAB_KEY.PENYEWAAN]]: '/penyewaan',
  [MENU_TAB_VALUE[MENU_TAB_KEY.LAPANGAN]]: '/lapangan',
  [MENU_TAB_VALUE[MENU_TAB_KEY.OPERATOR]]: '/operator',
}

export const MENU_TAB_ROUTE_VALUE_MAPPING = {
  dashboard: '1',
  penyewaan: '2',
  lapangan: '3',
  operator: '4',
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

export const DASHBOARD_RENT_TIME_KEY = {
  '7_TO_8': '07:00-08:00',
  '8_TO_9': '08:00-09:00',
  '9_TO_10': '09:00-10:00',
  '10_TO_11': '10:00-11:00',
  '11_TO_12': '11:00-12:00',
  '12_TO_13': '12:00-13:00',
  '13_TO_14': '13:00-14:00',
  '14_TO_15': '14:00-15:00',
  '15_TO_16': '15:00-16:00',
  '16_TO_17': '16:00-17:00',
  '17_TO_18': '17:00-18:00',
  '18_TO_19': '18:00-19:00',
  '19_TO_20': '19:00-20:00',
  '20_TO_21': '20:00-21:00',
  '21_TO_22': '21:00-22:00',
}

export const DASHBOARD_RENT_TIME_MAPPING = {
  [DASHBOARD_RENT_TIME_KEY['7_TO_8']]: 'Lainnya',
  [DASHBOARD_RENT_TIME_KEY['8_TO_9']]: 'Lainnya',
  [DASHBOARD_RENT_TIME_KEY['9_TO_10']]: 'Lainnya',
  [DASHBOARD_RENT_TIME_KEY['10_TO_11']]: 'Lainnya',
  [DASHBOARD_RENT_TIME_KEY['11_TO_12']]: 'Lainnya',
  [DASHBOARD_RENT_TIME_KEY['12_TO_13']]: 'Lainnya',
  [DASHBOARD_RENT_TIME_KEY['13_TO_14']]: 'Lainnya',
  [DASHBOARD_RENT_TIME_KEY['14_TO_15']]: 'Pukul 14:00 hingga 15:00',
  [DASHBOARD_RENT_TIME_KEY['15_TO_16']]: 'Pukul 15:00 hingga 16:00',
  [DASHBOARD_RENT_TIME_KEY['16_TO_17']]: 'Pukul 16:00 hingga 17:00',
  [DASHBOARD_RENT_TIME_KEY['17_TO_18']]: 'Pukul 17:00 hingga 18:00',
  [DASHBOARD_RENT_TIME_KEY['18_TO_19']]: 'Lainnya',
  [DASHBOARD_RENT_TIME_KEY['19_TO_20']]: 'Lainnya',
  [DASHBOARD_RENT_TIME_KEY['20_TO_21']]: 'Pukul 20:00 hingga 21:00',
  [DASHBOARD_RENT_TIME_KEY['21_TO_22']]: 'Pukul 21:00 hingga 22:00',
}

export const ROLE_KEY = {
  ADMIN: 'admin',
  OPERATOR: 'operator',
}

export const MENU_KEY = {
  DASHBOARD: '/dashboard',
  PENYEWAAN: '/penyewaan',
  ATURAN_PENYEWAAN: '/penyewaan/aturan',
  LAPANGAN: '/lapangan',
  SUNTING_LAPANGAN: '/lapangan/edit',
  OPERATOR: '/operator',
  ARSIP_OPERATOR: '/operator/archived',
  FORBIDDEN: '/403',
  NOTFOUND: '/404',
}

export const ADMIN_MENUS = [
  MENU_KEY.DASHBOARD,
  MENU_KEY.PENYEWAAN,
  MENU_KEY.ATURAN_PENYEWAAN,
  MENU_KEY.LAPANGAN,
  MENU_KEY.SUNTING_LAPANGAN,
  MENU_KEY.OPERATOR,
  MENU_KEY.ARSIP_OPERATOR,
  MENU_KEY.FORBIDDEN,
  MENU_KEY.NOTFOUND,
]

export const OPERATOR_MENUS = [
  MENU_KEY.PENYEWAAN,
  MENU_KEY.ATURAN_PENYEWAAN,
  MENU_KEY.LAPANGAN,
  MENU_KEY.FORBIDDEN,
  MENU_KEY.NOTFOUND,
]

export const ROLE_MENU_MAPPING = {
  [ROLE_KEY.ADMIN]: ADMIN_MENUS,
  [ROLE_KEY.OPERATOR]: OPERATOR_MENUS,
}
