import { makeStyles } from '@mui/styles'

import { colors } from '~/styles/theme'

const style = makeStyles(() => ({
  modalHeaderIcon: {
    width: '50px',
    height: '50px',
    color: colors.White,
    marginRight: '40px',
  },
  modal: {
    height: '768px',
    width: '100%',
    display: 'flex',
    flex: 1,
    '& > div:not(:last-child)': {
      marginRight: '40.54px',
    },
  },
}))

export default style
