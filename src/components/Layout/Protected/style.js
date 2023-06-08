import { makeStyles } from '@mui/styles'

import { APPBAR_HEIGHT, colors } from '~/styles/theme'

const style = makeStyles(() => ({
  pageContainer: {
    marginTop: `${APPBAR_HEIGHT}px`,
    height: 'max-content',
    width: '100%',
    backgroundColor: colors.MineShaft,
    padding: '95px 74px',
  },
  pageContainerWithoutHeader: {
    height: 'max-content',
    width: '100%',
    backgroundColor: colors.MineShaft,
  },
}))

export default style
