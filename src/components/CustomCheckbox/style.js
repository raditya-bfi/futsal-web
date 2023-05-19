import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  checkboxRoot: {
    color: colors.Silver,
    '&.Mui-checked .MuiSvgIcon-root': {
      color: colors.Black,
    },
  },
  labelRoot: {
    fontSize: fontSize[12],
    color: colors.RiverStyx,
  },
}))

export default style
