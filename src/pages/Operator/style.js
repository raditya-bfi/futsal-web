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
  liveClock: {
    fontSize: fontSize[20],
    lineHeight: '24.2px',
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
  deleteButton: {
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

    '& > svg': {
      marginRight: theme.spacing(3),
    },
  },
  content: {
    height: 'max-content',
    width: '100%',
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(9),
    },
  },
  operatorList: {
    display: 'flex',
    overflow: 'auto',
    maxWidth: '100%',

    '& > div:not(:last-child)': {
      marginRight: '19px',
    },
  },
  card: {
    width: '265px',
    height: '542px',
    borderRadius: '5px',
    backgroundColor: colors.Tundora,
    boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  },
  cardPhoto: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '265px',
    height: '338.1px',
    backgroundColor: colors.TricornBlack,
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  userThumbnail: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  userIcon: {
    width: '87.19px',
    height: '95.51px',
  },
  cardInfo: {
    width: '265px',
    height: '203.9px',
    backgroundColor: colors.Tundora,
    padding: '18.9px 20px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
  },
  operatorName: {
    display: 'flex',
    alignItems: 'center',
    fontSize: fontSize[24],
    fontWeight: 600,
    color: colors.White,
    lineHeight: '29.05px',

    '& > svg': {
      width: '24x',
      height: '24px',
      marginLeft: '13px',
    },
  },
  maleIcon: {
    color: colors.Aqua,
  },
  femaleIcon: {
    color: colors.Vermilion,
  },
  operatorId: {
    fontSize: fontSize[16],
    color: colors.Argent,
    lineHeight: '19.36px',
    marginBottom: '13px',
  },
  operatorPhoneNo: {
    display: 'flex',
    alignItems: 'center',
    fontSize: fontSize[16],
    lineHeight: '19.36px',
    color: colors.White,
    marginBottom: '6px',

    '& > svg': {
      width: '24px',
      height: '24px',
      marginRight: '11px',
    },
  },
  operatorEmail: {
    display: 'flex',
    alignItems: 'center',
    fontSize: fontSize[16],
    lineHeight: '19.36px',
    color: colors.White,

    '& > svg': {
      width: '24px',
      height: '24px',
      marginRight: '11px',
    },
  },
  operatorStatus: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: fontSize[16],
    lineHeight: '19.36px',
    marginTop: '33px',

    '& > span': {
      display: 'flex',
      alignItems: 'center',
      fontSize: fontSize[16],
      lineHeight: '19.36px',

      '& > svg': {
        width: '14px',
        height: '14px',
        marginRight: '12px',
      },
    },
  },
  active: {
    color: colors.Malachite,
  },
  unactive: {
    color: colors.AgedMoustacheGrey,
  },
  arrow: {
    width: '18px',
    height: '18px',
    color: colors.White,
  },
}))

export default style
