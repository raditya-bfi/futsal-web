import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  userPhotoUpload: {
    height: '100%',
    width: '100%',
    borderRadius: '5px',
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
  userMainInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '38px',
  },
  userData: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  name: {
    fontSize: fontSize[48],
    fontWeight: 600,
    lineHeight: '58.09px',
    color: colors.White,
  },
  genderWrapper: {
    display: 'flex',
  },
  operatorStatus: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5px',
    '& > span': {
      display: 'flex',
      alignItems: 'center',
      fontSize: fontSize[24],
      lineHeight: '29.05px',

      '& > svg': {
        width: '14px',
        height: '14px',
        marginRight: '12px',
      },
    },
  },
  active: {
    color: colors.Malachite,
  },
  unactive: {
    color: colors.AgedMoustacheGrey,
  },
  username: {
    fontSize: fontSize[32],
    fontWeight: 400,
    lineHeight: '38.73px',
    color: colors.Argent,
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
  inputValue: {
    width: '100%',
    fontSize: fontSize[24],
    fontWeight: 500,
    lineHeight: '58.09px',
    color: colors.White,
  },
  alamatValue: {
    padding: 5,
    lineHeight: 'normal',
    maxHeight: '51px',
    overflow: 'auto',
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
    padding: '9px 14px',
    height: '208px',
    width: '100%',
    borderRadius: '5px',
  },
  optionWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 'calc(10% - 18px)',
    marginTop: '18px',
  },
  updateLabel: {
    fontSize: fontSize[20],
    fontWeight: 500,
    lineHeight: '24.2px',
    color: colors.Turbo,
    cursor: 'pointer',
  },
  activeLabel: {
    fontSize: fontSize[20],
    fontWeight: 500,
    lineHeight: '24.2px',
    color: colors.Malachite,
    cursor: 'pointer',
  },
  unactiveLabel: {
    fontSize: fontSize[20],
    fontWeight: 500,
    lineHeight: '24.2px',
    color: colors.Vermilion,
    cursor: 'pointer',
  },
}))

export default style
