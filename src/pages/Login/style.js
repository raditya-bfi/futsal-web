import { makeStyles } from '@mui/styles'

import { LoginBackground } from '~/assets/png'
import { colors, fontSize } from '~/styles/theme'

const style = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundImage: `url(${LoginBackground})`,
    backgroundSize: 'cover',
  },
  title: {
    fontSize: fontSize[96],
    fontWeight: theme.typography.fontWeightBold,
    color: colors.White,
    marginBottom: theme.spacing(6),
  },
  wrapper: {
    flexBasis: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  footer: {
    flexBasis: '10%',
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(6),
    maxWidth: '480px',
  },
  footerLabel: {
    fontSize: fontSize[24],
    lineHeight: '29px',
  },
  loginBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginForm: {
    flexBasis: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '27.5vw',
  },
  subtitle: {
    fontSize: fontSize[34],
    fontWeight: theme.typography.fontWeightBold,
    color: colors.White,
    marginBottom: theme.spacing(6),
  },
  mainLogo: {
    height: '6.7vw',
    width: '13.2vw',
  },
  inputLabel: {
    fontSize: fontSize[24],
    color: colors.White,
  },
  input: {
    width: '100%',
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(4),
    },
    marginBottom: '1rem',
  },
  textInput: {
    '& .MuiOutlinedInput-root': {
      '& .MuiInputBase-input': {
        color: colors.White,
      },
      '& fieldset': {
        borderRadius: '20px',
        borderColor: colors.White,
      },
      '&:hover fieldset': {
        borderRadius: '20px',
        borderColor: colors.White,
      },
      '&.Mui-focused fieldset': {
        borderRadius: '20px',
        borderColor: colors.White,
      },
      '& .MuiInputAdornment-root': {
        '& .MuiIconButton-root': {
          color: colors.White,
        },
      },
    },
    '& .MuiFormHelperText-root': {
      color: colors.White,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: colors.TorchRed,
    },
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: '3rem',
  },
}))

export default style
