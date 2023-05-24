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
