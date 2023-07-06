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
    width: '100%',
    borderRadius: '10px',
    border: `3px solid ${colors.White}`,
    padding: '65px 60px 0px 60px',
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
  content: {
    height: 'max-content',
    width: '100%',
    overflow: 'auto',
    paddingBottom: '60px',
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(9),
    },
  },
  fieldList: {
    height: 'max-content',
    width: 'max-content',
    display: 'flex',
    flexDirection: 'column',

    '& > div:not(:last-child)': {
      marginBottom: '16px',
    },
  },
  fieldSlider: {
    height: '100%',
    width: '100%',
    '& > div:not(:last-child)': {
      marginRight: '24px',
    },
  },
  fieldCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '549px',
    height: '258px',
    border: `1px solid ${colors.White}`,
    borderRadius: '5px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
  },
  fieldInfo: {
    width: '100%',
  },
  fieldNameWrapper: {
    padding: '0px 23px',
    paddingBottom: '8px',
    background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
  },
  fieldName: {
    fontSize: fontSize[20],
    lineHeight: '24.2px',
    color: colors.White,
    fontWeight: 600,
    width: '100%',
  },
  fieldPriceWrapper: {
    display: 'flex',
    width: '100%',
    padding: '0px 23px',
    paddingBottom: '18px',
    background: 'linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0.5) 100%)',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',

    '& > span:not(:last-child)': {
      marginRight: '43px',
    },
  },
  fieldPrice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.White,
    fontSize: fontSize[14],
    lineHeight: '16.94px',
    fontWeight: 600,

    '& > svg': {
      marginRight: '15px',
    },
  },
  circle: {
    '& > svg': {
      width: '6px',
      height: '6px',
      color: colors.White,
    },
  },
}))

export default style
