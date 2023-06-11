import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  checkboxRoot: {
    color: colors.White,
    '&.Mui-checked .MuiSvgIcon-root': {
      color: colors.White,
    },
  },
  labelRoot: {
    fontSize: fontSize[14],
    fontWeight: 400,
    lineHeight: '16.94px',
    color: colors.White,
  },
}))

export default style
