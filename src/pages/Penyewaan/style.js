import { makeStyles } from '@mui/styles'

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
  liveClockWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    marginTop: '24px',
    marginBottom: '12px',
  },
  liveClock: {
    fontSize: fontSize[24],
    lineHeight: '29.05px',
    color: colors.White,
    fontWeight: 600,
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'row',
    height: 'max-content',
    width: '100%',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    height: 'max-content',
    width: '92%',
    borderRadius: '10px',
    border: `3px solid ${colors.White}`,
    padding: '65px 60px',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: 'max-content',
    width: '8%',

    '& > div:not(:last-child)': {
      marginBottom: '15px',
    },
  },
  addButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '54.02px',
    height: '55px',
    backgroundColor: colors.ForestGreen,
    border: `1px solid ${colors.White}`,
    borderRadius: '5px',
    color: colors.White,
    cursor: 'pointer',
  },
  mobileInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '54.02px',
    height: '55px',
    backgroundColor: colors.Hacienda,
    border: `1px solid ${colors.White}`,
    borderRadius: '5px',
    color: colors.White,
    cursor: 'pointer',
  },
  moreList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '54.02px',
    height: '55px',
    backgroundColor: colors.Matisse,
    border: `1px solid ${colors.White}`,
    borderRadius: '5px',
    color: colors.White,
    cursor: 'pointer',
  },
  contentInfo: {
    marginBottom: '52px',
  },
  infoLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: fontSize[20],
    lineHeight: '24.2px',
    color: colors.White,
    textAlign: 'justify',

    '& > svg': {
      marginRight: theme.spacing(3),
    },
  },
  infoDesc: {
    marginTop: theme.spacing(8),
    display: 'flex',
    alignItems: 'flex-start',

    '& > p': {
      textAlign: 'justify',
      fontSize: fontSize[20],
      lineHeight: '24.2px',
      color: colors.White,
    },

    '& > svg': {
      visibility: 'hidden',
      marginRight: theme.spacing(3),
    },
  },
  infoPaid: {
    color: colors.Malachite,
  },
  content: {
    height: 'max-content',
    width: '100%',
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(9),
    },
  },
  bookingList: {
    display: 'flex',
    overflow: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',

    '& > div:not(:last-child)': {
      marginRight: '19px',
    },
  },
  legends: {
    marginTop: '27px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    '& > div:not(:last-child)': {
      marginBottom: '11px',
    },
  },
  legendInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    '& > p': {
      width: '50%',
    },
  },
  legendBox: {
    boxSizing: 'border-box',
    width: '24px',
    height: '24px',
  },
  legendTitle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: fontSize[20],
    fontWeight: 400,
    lineHeight: '24.2px',
    color: colors.White,

    '& > div': {
      marginRight: '28px',
    },

    '& > svg': {
      marginRight: '28px',
    },
  },
}))

export default style
