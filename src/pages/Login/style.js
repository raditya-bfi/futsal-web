import { makeStyles } from '@mui/styles'

import { LoginBackground } from '~/assets/png'
import { colors, fontSize } from '~/styles/theme'

const style = makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundImage: `url(${LoginBackground})`,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  backgroundLogo: {
    zIndex: '250',
    width: '23%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '4vw 0vw',
  },
  loginBox: {
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: '500',
    height: '60%',
    width: '55vw',
  },
  loginForm: {
    flexBasis: '70%',
    background: colors.White,
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4.2vw 0vw',
  },
  hero: {
    flexBasis: '30%',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
  },
  title: {
    fontSize: fontSize[16],
    fontWeight: theme.typography.fontWeightBold,
    color: colors.Smalt,
  },
  mainLogo: {
    height: '6.7vw',
    width: '13.2vw',
  },
  input: {
    width: '55%',
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(4),
    },
  },
  remember: {
    width: '55%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing(4),
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '55%',
    marginBottom: theme.spacing(4),
  },
  forgotWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  forgotLabel: {
    fontSize: fontSize[12],
    color: colors.RiverStyx,
    textDecoration: 'none',
  },
}))

export default style
