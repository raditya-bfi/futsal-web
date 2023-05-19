import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  appBarRoot: {
    backgroundColor: colors.GreyArea,
    boxShadow: 'none',
    position: 'sticky',
  },
  titleRed: {
    fontSize: fontSize[20],
    display: 'inline-block',
    fontWeight: 700,
    color: colors.TorchRed,
  },
  titleBlue: {
    fontSize: fontSize[20],
    display: 'inline-block',
    fontWeight: 700,
    color: colors.DodgerBlue2,
  },
  barNotification: {
    width: 'auto',
  },
  dateBar: {
    fontSize: fontSize[12],
    fontWeight: 700,
    color: colors.Abbey,
  },
  timeBar: {
    fontSize: fontSize[10],
    color: colors.Abbey,
  },
  textDark: {
    color: colors.Abbey,
  },
  s1: {
    fontSize: fontSize[10],
  },
  s2: {
    fontSize: fontSize[12],
  },
  menuIcon: {
    fontSize: fontSize[16],
  },
  menuHeader: {
    fontSize: fontSize[14],
    fontWeight: 600,
  },
}))

export default style
