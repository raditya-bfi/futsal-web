import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  illustration: {
    height: '500px',
    width: '500px',
  },
  label: {
    width: '60%',
    textAlign: 'center',
    color: colors.White,
    fontSize: fontSize[20],
    lineHeight: '24px',
    marginBottom: '18px',
  },
}))

export default style
