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
    height: '768px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    '& > div:not(:last-child)': {
      marginBottom: '32px',
    },
  },
  detailWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    flex: 1,

    '& > div:not(:last-child)': {
      marginRight: '20px',
    },
  },
  leftSection: {
    flexBasis: '60%',
    height: '100%',
    width: '100%',
  },
  rightSection: {
    flexBasis: '40%',
    height: '100%',
    width: '100%',
  },
  titleWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fontSize[20],
    fontWeight: 300,
    lineHeight: '24.2px',
    color: colors.White,
    marginBottom: '12px',
  },
  detailInfo: {
    height: '100%',
    width: '100%',
    maxHeight: '296px',
    display: 'flex',
    filter: 'drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.2))',
    borderRadius: '5px',
    border: `1px solid ${colors.White}`,
  },
  detailInfoRight: {
    height: '100%',
    width: '100%',
    maxHeight: '296px',
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
  detailInfoBottom: {
    height: '100%',
    width: '100%',
    maxHeight: '284px',
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
  userPhoto: {
    backgroundColor: colors.TricornBlack,
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    maxWidth: '232px',
    maxHeight: '296px',
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
  userInfoWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 18px',
  },
  userData: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  name: {
    height: '100%',
    fontSize: fontSize[24],
    fontWeight: 600,
    color: colors.White,
  },
  username: {
    fontSize: fontSize[16],
    fontWeight: 400,
    color: colors.AgedMoustacheGrey,
    marginBottom: '30px',
  },
  userInfoLabel: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: fontSize[16],
    fontWeight: 400,
    color: colors.White,
    textAlign: 'justify',
    wordBreak: 'break-all',

    '& > svg': {
      width: '24px',
      height: '24px',
      color: colors.White,
      marginRight: '11px',
    },
  },
  genderWrapper: {
    display: 'flex',
    marginLeft: '17px',
  },
  maleIcon: {
    width: '24px',
    height: '24px',
    color: colors.Aqua,
    cursor: 'pointer',
  },
  femaleIcon: {
    width: '24px',
    height: '24px',
    color: colors.Vermilion,
    cursor: 'pointer',
  },
  paymentStatus: {
    fontSize: fontSize[20],
    fontWeight: 600,
    lineHeight: '24.2px',
  },
  paid: {
    color: `${colors.Malachite} !important`,
  },
  waiting: {
    color: `${colors.Turbo} !important`,
  },
  canceled: {
    color: `${colors.Vermilion} !important`,
  },
  canceled_admin: {
    color: colors.White,
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
  codeWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  iconButton: {
    width: '20px',
    height: '20px',
    color: colors.White,
    marginLeft: '24px',
  },
  invoiceWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    '& > span': {
      width: 'calc(100% / 3)',
    },
    '& > span:first-child': {
      textAlign: 'left',
    },
    '& > span:not(:first-child)': {
      textAlign: 'right',
    },
  },
  invoiceHeader: {
    fontSize: fontSize[16],
    fontWeight: 500,
    lineHeight: '19.36px',
    color: colors.White,
  },
  invoiceDetailWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '& > div:not(:last-child)': {
      marginBottom: '11px',
    },
  },
  invoiceDetail: {
    fontSize: fontSize[16],
    fontWeight: 300,
    lineHeight: '19.36px',
    color: colors.White,
  },
  invoiceFooter: {
    fontSize: fontSize[16],
    fontWeight: 500,
    lineHeight: '19.36px',
    color: colors.White,
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
    color: colors.Turbo,
    cursor: 'pointer',
    border: `1px solid ${colors.Turbo}`,
    borderRadius: '10px',
    padding: '16px 30px',
  },
}))

export default style
