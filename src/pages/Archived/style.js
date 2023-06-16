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
  content: {
    height: 'max-content',
    width: '100%',
  },
}))

export default style
