import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles((theme) => ({
  modalHeaderIcon: {
    width: '50px',
    height: '50px',
    color: colors.White,
    marginRight: '40px',
  },
  modal: {
    height: '650px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  fieldInfo: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  fieldMainInfo: {
    height: 'max-content',
    width: '100%',
    display: 'flex',
  },
  fieldPhoto: {
    width: '506px',
    height: '296px',
    filter: 'drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.2))',
    borderRadius: '5px',
    border: `1px solid ${colors.White}`,

    '& > div > div > div': {
      minWidth: '506px',
      borderRadius: '5px',
    },
  },
  fieldMain: {
    marginLeft: '24px',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '& > div:not(:last-child)': {
      marginBottom: '24px',
    },
  },
  fieldMainDesc: {
    display: 'flex',
    '& > svg': {
      color: colors.White,
      width: '24px',
      height: '24px',
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(3),
    },
  },
  fieldDescription: {
    display: 'flex',
    marginTop: '36px',
    '& > svg': {
      color: colors.White,
      width: '24px',
      height: '24px',
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(3),
    },
  },
  descBox: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  descTitle: {
    fontSize: fontSize[20],
    fontWeight: 200,
    lineHeight: '24.2px',
    color: colors.White,
    marginBottom: theme.spacing(2),
  },
  descLabelWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    height: '100%',
    width: '100%',
  },
  descLabel: {
    display: 'flex',
    alignItems: 'flex-end',
    fontSize: fontSize[24],
    fontWeight: 600,
    lineHeight: '29.05px',
    color: colors.White,
    textAlign: 'justify',
  },
  descLabelInfo: {
    fontSize: fontSize[14],
    fontWeight: 300,
    lineHeight: '19.36px',
    color: colors.White,
    marginLeft: '24px',
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '40px',

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
