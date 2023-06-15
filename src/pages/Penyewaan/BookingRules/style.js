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
    height: '20px',
    width: '20px',
    color: colors.White,
    marginRight: '54px',
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
    height: 'max-content',
    width: '100%',

    '& > div:not(:last-child)': {
      marginBottom: '29px',
    },
  },
  ruleWrapper: {
    display: 'flex',
    flexDirection: 'column',

    '& > *:not(:last-child)': {
      marginBottom: '6px',
    },
  },
  ruleTitle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: fontSize[16],
    fontWeight: 400,
    lineHeight: '19.36px',
    color: colors.White,

    '& > svg': {
      width: '24px',
      height: '24px',
      marginLeft: '12px',
    },
  },

  ruleDesc: {
    alignItems: 'center',
    fontSize: fontSize[20],
    fontWeight: 500,
    lineHeight: '24.2px',
    color: colors.White,
  },
}))

export default style
