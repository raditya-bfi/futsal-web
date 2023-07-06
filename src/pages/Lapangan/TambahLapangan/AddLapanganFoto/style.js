import { makeStyles } from '@mui/styles'

import { colors } from '~/styles/theme'

const style = makeStyles(() => ({
  container: {
    width: '290px',
    height: '175px',
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23219E44FF' stroke-width='5' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`,
    borderRadius: '5px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
    padding: '16px 17px',
  },
  addWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

    '& > svg': {
      width: '50px',
      height: '50px',
      color: colors.ForestGreen,
      cursor: 'pointer',
    },
  },
}))

export default style
