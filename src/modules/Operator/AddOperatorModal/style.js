import { makeStyles } from '@mui/styles'

import { DEFAULT_FONT_FAMILY, colors, fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  modalHeaderIcon: {
    width: '50px',
    height: '50px',
    color: colors.White,
    marginRight: '40px',
  },
  addModal: {
    height: '576px',
    width: '100%',
    display: 'flex',
    flex: 1,
    '& > div:not(:last-child)': {
      marginRight: '40.54px',
    },
  },
  userPhoto: {
    flexBasis: 'calc(50% - 20.27px)',
    backgroundColor: colors.TricornBlack,
    borderRadius: '5px',
  },
  userPhotoUpload: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    padding: '17px 0px',
  },
  userIconUpload: {
    width: '87.19px',
    height: '95.51px',
  },
  uploadLabel: {
    height: 'max-content',
    fontSize: fontSize[24],
    fontWeight: 600,
    lineHeight: '29.05px',
    color: colors.White,
  },
  userInfoWrapper: {
    flexBasis: 'calc(50% - 20.27px)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    maxHeight: '90%',
    overflow: 'auto',
  },
  textInput: {
    color: colors.White,
    fontFamily: DEFAULT_FONT_FAMILY,
    // marginBottom: '5px',

    '& > .MuiFilledInput-root': {
      color: colors.White,
      fontFamily: DEFAULT_FONT_FAMILY,
      borderBottom: `1px solid ${colors.White} !important`,
      backgroundColor: 'transparent !important',

      '& > .MuiInputAdornment-root': {
        '& > button > svg': {
          color: colors.White,
        },
      },
    },

    '& > .MuiFormHelperText-root': {
      fontSize: fontSize[10],
      color: colors.AlizarinCrimson,
      position: 'absolute',
      bottom: '-18px',
    },
  },
  select: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    '& > div:not(:last-child)': {
      marginBottom: '18px',
    },
  },
  input: {
    display: 'flex',
    background: 'linear-gradient(270deg, rgba(47, 47, 47, 0) 0%, #2F2F2F 100%)',
    borderRadius: '5px',
    '& > img': {
      marginRight: '13.02px',
    },
  },
  genderWrapper: {
    display: 'flex',
    margin: '14px 0px',
    '& > *:not(:last-child)': {
      marginRight: '20px',
    },
  },
  unactiveIcon: {
    color: `${colors.Tundora} !important`,
  },
  maleIcon: {
    width: '48px',
    height: '48px',
    color: colors.Aqua,
    cursor: 'pointer',
  },
  femaleIcon: {
    width: '48px',
    height: '48px',
    color: colors.Vermilion,
    cursor: 'pointer',
  },
  ktpBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '9px 34px 9px 0px',
    padding: '9px 14px',
    height: '208px',
    width: '100%',
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23DADEE4FF' stroke-width='1' stroke-dasharray='20' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`,
    borderRadius: '5px',
  },
  uploadKtpLabel: {
    fontSize: fontSize[24],
    fontWeight: 500,
    lineHeight: '29.05px',
    color: colors.AgedMoustacheGrey,
    opacity: '0.1',
  },
  submitWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 'calc(10% - 18px)',
    marginTop: '18px',
  },
}))

export default style
