import { makeStyles } from '@mui/styles'

const style = makeStyles((theme) => ({
  overlay: {
    color: '#fff',
    zIndex: theme.zIndex.drawer + 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
  },
}))

export default style
