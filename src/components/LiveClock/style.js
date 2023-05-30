import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  liveClockContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateBar: {
    fontSize: fontSize[16],
    fontWeight: 400,
    color: colors.Kettleman,
  },
}))

export default style
