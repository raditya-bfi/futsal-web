import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles((theme) => ({
  select: {
    width: ({ isFullWidth, width }) => (isFullWidth ? '100%' : width),
    height: '4.8vh',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    borderRadius: '8px',
    fontSize: fontSize[16],
    fontWeight: 500,
    color: colors.White,
    '&:before': {
      borderColor: colors.White,
    },
    '&:after': {
      borderColor: colors.White,
    },
    '&:not(.Mui-disabled):hover::before': {
      borderColor: colors.White,
    },
    '& .MuiInputBase-input': {
      fontSize: fontSize[16],
    },
    '& .MuiInputBase-input:focus': {
      backgroundColor: 'transparent',
    },
    '& .MuiSelect-icon': {
      right: 6,
      top: 0,
      bottom: 0,
      margin: 'auto 0',
      fontSize: '20px',
      color: colors.White,
    },
    backgroundColor: ({ isError }) =>
      isError ? `transparent` : `${colors.TricornBlack} !important`,
    borderColor: ({ isError }) => (isError ? colors.AlizarinCrimson : colors.White),
  },
  focused: {
    border: `1px solid ${colors.White}`,
    backgroundColor: `${colors.TricornBlack} !important`,
    borderRadius: '8px',
    '&:hover ': {
      backgroundColor: `${colors.TricornBlack} !important`,
    },
  },
  rootLabel: {
    color: `${colors.SantasGray} !important`,
    left: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: ({ labelSize }) => `${labelSize} !important`,
    backgroundColor: `transparent !important`,
  },
  focusedLabel: {
    color: `${colors.SantasGray} !important`,
    '&:hover ': {
      backgroundColor: `${colors.TricornBlack} !important`,
    },
  },
  outlinedInput: {
    '&:hover $notchedOutline': {
      borderColor: ({ isError }) => (isError ? colors.AlizarinCrimson : colors.White),
    },
    '&.Mui-focused .MuiSelect-root': {
      borderColor: ({ isError }) => (isError ? colors.AlizarinCrimson : colors.White),
    },
    '&.Mui-focused $notchedOutline': {
      borderColor: ({ isError }) => (isError ? colors.AlizarinCrimson : colors.White),
      borderWidth: '1px',
    },
    '& .MuiSelect-select': {
      fontSize: fontSize[16],
      padding: '8px',
    },
  },
  errorOutlined: {
    borderColor: `${colors.AlizarinCrimson} !important`,
  },
  notchedOutline: {
    borderColor: ({ isError }) => (isError ? colors.AlizarinCrimson : colors.White),
  },
  helperText: {
    fontSize: fontSize[12],
    fontWeight: theme.typography.fontWeightMedium,
    color: colors.AlizarinCrimson,
    position: 'absolute',
    bottom: '-16px',
    left: '15px',
  },
  paper: {
    backgroundColor: colors.TricornBlack,
    border: `1px solid ${colors.White}`,
    borderRadius: '8px',
    maxWidth: 'min-content',
    maxHeight: '40vh',
    '& .MuiList-root': {
      paddingTop: '0px',
    },
  },
  menuItem: {
    padding: 12,
    fontSize: fontSize[16],
    whiteSpace: 'normal',
    '&:hover ': {
      backgroundColor: `${colors.TricornBlack} !important`,
    },
    '& .Mui-selected': {
      backgroundColor: colors.DustyGrey,
    },
    color: colors.White,
  },
  menuItemSelected: {
    padding: 12,
    fontSize: fontSize[16],
    whiteSpace: 'normal',
    backgroundColor: `${colors.DustyGrey} !important`,
    '&:hover ': {
      backgroundColor: `${colors.DustyGrey} !important`,
    },
    color: colors.White,
  },
  menuItemPlaceholder: {
    fontSize: fontSize[16],
    color: colors.White,
    backgroundColor: colors.TricornBlack,
  },
  searchFieldContainer: {
    padding: 0,
    backgroundColor: `${colors.White} !important`,
    '& .MuiInputBase-root': {
      fontSize: fontSize[16],
    },
    '& .MuiTextField-root:hover': {
      backgroundColor: `${colors.White} !important`,
    },
  },
}))

export default style
