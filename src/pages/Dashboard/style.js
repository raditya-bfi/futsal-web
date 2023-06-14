import { makeStyles } from '@mui/styles'

import { DASHBOARD_MENU_TAB_KEY, DASHBOARD_MENU_TAB_VALUE } from '~/constants/general'
import { colors, fontSize } from '~/styles/theme'

const style = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  pageTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '10%',
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  title: {
    fontSize: fontSize[32],
    lineHeight: '38.73px',
    color: colors.White,
    fontWeight: 600,
  },
  liveClock: {
    fontSize: fontSize[20],
    lineHeight: '24.2px',
    color: colors.White,
    fontWeight: 600,
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    height: 'max-content',
    width: '100%',
    borderRadius: '10px',
    border: `3px solid ${colors.White}`,
    padding: '65px 60px',
  },
  contentInfo: {
    marginBottom: '52px',
  },
  infoLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: fontSize[20],
    lineHeight: '24.2px',
    color: colors.White,
    textAlign: 'justify',

    '& > svg': {
      marginRight: theme.spacing(3),
    },
  },
  menuTabs: {
    display: 'flex',
    flexDirection: 'row',
  },
  tabsIndicator: {
    height: '0px', // ? : remove tab indicator color
  },
  tabsContainer: {
    width: '100%',
    '& > div > div > button': {
      padding: 0,
    },
  },
  tab: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px 32px',
    maxHeight: '114px',
    borderBottom: `1px solid ${colors.AgedMoustacheGrey}`,
  },
  activeTab: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px 32px',
    maxHeight: '114px',
    borderWidth: '1px 1px 0px 1px',
    borderStyle: 'solid',
    borderColor: colors.AgedMoustacheGrey,
    borderRadius: '10px 10px 0px 0px',
    backgroundColor: colors.TricornBlack,
  },
  tabSecond: {
    alignItems: 'flex-end',
  },
  tabIcon: {
    width: '30px',
    height: '30px',
  },
  tabLabel: {
    fontSize: fontSize[20],
    lineHeight: '24.2px',
    fontWeight: 600,
    color: colors.White,
    textTransform: 'none',
    margin: '0px 30px',
  },
  tabLabelDesc: {
    fontSize: fontSize[36],
    lineHeight: '43.57px',
    fontWeight: 700,
    color: colors.White,
    textTransform: 'none',
    margin: '0px 30px',
  },
  content: {
    height: 'max-content',
    width: '100%',
    borderWidth: '0px 1px 1px 1px',
    borderStyle: 'solid',
    borderColor: colors.AgedMoustacheGrey,
    borderRadius: '0px 0px 10px 10px',
    backgroundColor: colors.TricornBlack,
    padding: '34px 42px',

    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(9),
    },
  },
  verticalChartWrapper: {
    maxHeight: '500px',
    width: '100%',
    border: `1px solid ${colors.White}`,
    borderRadius: '10px',
    padding: '58px 66px',
  },
  horizontalChartWrapper: {
    height: ({ activeTab }) =>
      activeTab === DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN] ? '300px' : '430px',
    width: '100%',
    border: `1px solid ${colors.White}`,
    borderRadius: '10px',
    padding: '58px 66px',
  },
}))

export default style
