import { makeStyles } from '@mui/styles'

import { DEFAULT_FONT_FAMILY, colors, fontSize } from '~/styles/theme'

const useStyle = makeStyles((theme) => ({
  paper: {
    backgroundColor: colors.MineShaft,
    maxWidth: ({ width }) => width || '100%',
    borderRadius: ({ modalBorderRadius }) => modalBorderRadius || '4px',
  },
  modal: {
    borderRadius: ({ modalBorderRadius }) => modalBorderRadius || '4px',
    padding: ({ modalPadding }) => modalPadding || '16px',
    width: ({ width }) => width || '100%',
  },
  divider: {
    borderBottom: `1.3px solid ${colors.Mischka}`,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '58px',
    height: '50px',
  },
  headerTitle: {
    width: '100%',
    color: colors.White,
    lineHeight: '43.57px',
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: ({ size }) => fontSize[size],
    fontWeight: 600,
  },
  closeButton: {
    width: '50px',
    height: '50px',
    color: colors.White,
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    maxHeight: ({ contentMaxHeight }) => contentMaxHeight,
    padding: 0,
    '& > *': {
      width: '100%',
      height: '100%',
    },
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ({ footerJustifyContent }) => footerJustifyContent,
    width: '100%',
    '& > div:not(:last-child)': {
      marginRight: '8px',
    },
  },
  buttonSmall: {
    fontFamily: theme.typography.fontFamily,
    height: '3.1vw',
    width: '6.7vw',
    fontSize: fontSize[14],
    fontWeight: theme.typography.fontWeightMedium,
    margin: '1vh',
    borderRadius: '8px',
    boxShadow: 'unset',
    textTransform: 'none',
  },
  buttonMedium: {
    fontFamily: theme.typography.fontFamily,
    height: '2.5vw',
    width: 'calc(50% - 4px)',
    fontSize: fontSize[14],
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: '8px',
    boxShadow: 'unset',
    textTransform: 'none',
  },
}))

export default useStyle
