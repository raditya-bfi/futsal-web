import { makeStyles } from '@mui/styles'

import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  datepickerRoot: {
    '&.MuiFormControl-root': {
      width: ({ width }) => width,
      height: '4.8vh',
    },
    '& .MuiInputBase-root': {
      height: 'inherit',
    },
    '& input': {
      fontSize: fontSize[16],
      padding: '10px',
      color: colors.White,
    },
    '& .MuiOutlinedInput-root': {
      height: 'inherit',
      border: `solid 1px ${colors.White}`,
      borderRadius: '8px',
      backgroundColor: colors.TricornBlack,
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
  },
}))

export default style
