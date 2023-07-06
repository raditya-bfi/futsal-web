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
    minHeight: '90px',
    width: '100%',
    marginBottom: theme.spacing(3),
    backgroundColor: colors.TricornBlack,
    padding: '0px 49px',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  backIcon: {
    width: '45px',
    height: '45px',
    color: colors.White,
    marginRight: '54px',
    '& > svg': {
      width: '45px',
      height: '45px',
    },
  },
  title: {
    fontSize: fontSize[32],
    lineHeight: '38.73px',
    color: colors.White,
    fontWeight: 600,
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    height: 'max-content',
    width: '100%',
    padding: '52px 49px 113px 49px',
  },
  contentInfo: {
    marginBottom: '63px',
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
  content: {
    flex: 1,
    display: 'flex',
    height: 'max-content',
    width: '100%',

    '& > div:not(:last-child)': {
      marginRight: '34px',
    },
  },
  options: {
    flexBasis: '15%',

    '& > div:not(:last-child)': {
      marginBottom: '19px',
    },
  },
  optionInput: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '& > *:not(:last-child)': {
      marginBottom: '10px',
    },
  },
  optionTitle: {
    fontSize: fontSize[16],
    fontWeight: 400,
    lineHeight: '19.36px',
    color: colors.White,
  },
  buttonSearch: {
    backgroundColor: colors.ForestGreen,
    border: `1px solid ${colors.ForestGreen}`,
    borderRadius: '5px',
    fontSize: fontSize[16],
    fontWeight: 500,
    color: colors.White,

    '&:focus': {
      backgroundColor: colors.ForestGreen,
      border: `1px solid ${colors.ForestGreen}`,
      borderRadius: '5px',
    },

    '&:hover': {
      backgroundColor: colors.ForestGreen,
      border: `1px solid ${colors.ForestGreen}`,
      borderRadius: '5px',
    },

    '& > svg': {
      color: colors.White,
    },
  },
  table: {
    flexBasis: '85%',
  },
  tableInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: '26px 0px',
  },
  paidStatus: {
    fontSize: fontSize[36],
    fontWeight: 600,
    lineHeight: '43.57px',
  },
  paid: {
    color: colors.Malachite,
  },
  waiting: {
    color: colors.Turbo,
  },
  canceled: {
    color: colors.Vermilion,
  },
  canceled_admin: {
    color: colors.White,
  },
  dateInfo: {
    fontSize: fontSize[20],
    fontWeight: 400,
    lineHeight: '24.2px',
    color: colors.White,
  },
}))

export default style
