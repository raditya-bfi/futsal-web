import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'justify',
    padding: '1vw 15vw',
    '& > div:first-child': {
      paddingTop: '0vw',
    },
  },
  headerTitle: {
    fontSize: fontSize[22],
    fontWeight: theme.typography.fontWeightBold,
  },
  contentWrapper: {
    padding: '1vw 0vw',
  },
  title: {
    fontSize: fontSize[18],
    fontWeight: theme.typography.fontWeightBold,
    margin: '20px 0px',
  },
  description: {
    fontSize: fontSize[14],
  },
  terms: {
    padding: 0,
    listStyle: 'none',
    fontSize: fontSize[18],
    fontWeight: theme.typography.fontWeightBold,
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  listTitle: {
    cursor: 'pointer',
  },
  copyright: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: colors.DustyGrey,
  },
}))

export default style
