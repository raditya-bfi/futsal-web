import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'end',
    '& .MuiTextField-root': {
      width: ({ width }) => width,
      height: '4.8vh',
    },
    '& .MuiOutlinedInput-root': {
      height: 'inherit',
      border: `solid 1px ${colors.White}`,
      borderRadius: '8px',
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    '& .MuiInputBase-input': {
      '&::placeholder': {
        opacity: 1,
      },
      padding: '10px',
      fontSize: fontSize[16],
      color: colors.SilverChalice,
      // border: `solid 1px ${colors.SilverChalice}`,
    },
  },
}))

export default style
