import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  modalHeaderIcon: {
    width: '50px',
    height: '50px',
    color: colors.White,
    marginRight: '40px',
  },
  modal: {
    height: 'max-content',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    '& > div:not(:last-child)': {
      marginBottom: '32px',
    },
  },
  content: {
    display: 'flex',
    maxHeight: '463px',
    width: '100%',
    height: '100%',
    padding: '50px 60px',
    border: `1px solid ${colors.White}`,
    '& > div': {
      flexBasis: '50%',
    },
    '& > div:not(:last-child)': {
      marginRight: '43px',
    },
  },
  title: {
    fontSize: fontSize[20],
    fontWeight: 300,
    lineHeight: '19.36px',
    color: colors.White,
    marginBottom: '12px',
  },
  wrapper: {
    minHeight: '296px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '31px 21px',
    filter: 'drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.2))',
    borderRadius: '5px',
    border: `1px solid ${colors.White}`,

    '& > div:not(:last-child)': {
      marginBottom: '24px',
    },
  },
  infoWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 'max-content',
  },
  infoIcon: {
    width: '24px',
    height: '24px',
    marginRight: '14px',
    color: colors.White,
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',

    '& > *:not(:last-child)': {
      marginBottom: '4px',
    },
  },
  infoBoxTitle: {
    fontSize: fontSize[20],
    fontWeight: 300,
    lineHeight: '24.2px',
    color: colors.White,
  },
  infoBoxDesc: {
    fontSize: fontSize[20],
    fontWeight: 600,
    lineHeight: '29.05px',
    color: colors.White,
  },
  descWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  desc: {
    fontSize: fontSize[20],
    fontWeight: 500,
    color: colors.White,
    textAlign: 'right',
    maxWidth: '650px',
  },
  infoPaid: {
    color: colors.Malachite,
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > *:not(:last-child)': {
      marginRight: '75px',
    },
  },
  cancelButton: {
    fontSize: fontSize[20],
    fontWeight: 500,
    lineHeight: '24.2px',
    color: colors.Vermilion,
    cursor: 'pointer',
  },
}))

export default style
