import { makeStyles } from '@mui/styles'

import { APPBAR_HEIGHT, colors, fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  appBarRoot: {
    backgroundColor: colors.TricornBlack,
    position: 'fixed',
    height: `${APPBAR_HEIGHT}px`,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: '0px 48px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  mainHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },

  appTitleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '57px',
  },
  appTitle: {
    fontSize: fontSize[32],
    fontWeight: 600,
  },
  headerMenu: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  menuTabs: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '33px',
  },
  tabsIndicator: {
    height: '0px', // ? : remove tab indicator
  },
  tabsContainer: {
    '& > div > div': {
      '& > button:not(:last-child)': {
        marginRight: '21px',
      },
    },
    '& > div > div > button': {
      padding: 0,
    },
  },
  tab: {
    display: 'flex',
    padding: '14px 26px',
    maxHeight: '58px',
  },
  activeTab: {
    display: 'flex',
    padding: '14px 26px',
    maxHeight: '58px',
    borderWidth: '1px 1px 0px 1px',
    borderStyle: 'solid',
    borderColor: colors.AgedMoustacheGrey,
    borderRadius: '10px 10px 0px 0px',
    backgroundColor: colors.MineShaft,
  },
  tabIcon: {
    width: '30px',
    height: '30px',
  },
  tabLabel: {
    fontSize: fontSize[24],
    lineHeight: '29.05px',
    color: colors.White,
    textTransform: 'none',
    margin: '0px 30px',
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '22px 22px 22px 0px',
    cursor: 'pointer',
  },
  avatar: {
    height: '55px',
    width: '55px',
    border: `1px solid ${colors.AgedMoustacheGrey}`,
  },
  menu: {
    width: '290px',
    paddingTop: 0,
    paddingBottom: 0,
    '& .MuiList-padding': {
      paddingTop: 0,
      paddingBottom: 0,
    },
    '& .MuiPopover-paper': {
      backgroundColor: colors.TricornBlack,
      minWidth: '290px !important',
      margin: '12px 8px',
      top: '85px !important',
      borderRadius: '10px',
      '& > li:last-child': {
        marginBottom: '20px',
      },
    },
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: '0px 20px 20px 20px',
    padding: '16px 0px',
    borderBottom: `1px solid ${colors.White}`,
  },
  roleName: {
    fontSize: fontSize[24],
    color: colors.White,
  },
  email: {
    fontSize: fontSize[16],
    lineHeight: '19.36px',
    color: colors.Argent,
  },
  menuIcon: {
    fontSize: fontSize[24],
    color: colors.White,
  },
  menuLabel: {
    fontSize: fontSize[16],
    lineHeight: '19.36px',
    color: colors.White,
  },
  menuHeader: {
    fontSize: fontSize[14],
    fontWeight: 600,
  },
}))

export default style
