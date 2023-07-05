import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  pageTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '10%',
    minHeight: '90px',
    width: '100%',
    marginBottom: theme.spacing(3),
    backgroundColor: colors.TricornBlack,
    padding: '0px 49px',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  backIcon: {
    width: '45px',
    height: '45px',
    color: colors.White,
    marginRight: '54px',
    '& > svg': {
      width: '45px',
      height: '45px',
    },
  },
  title: {
    fontSize: fontSize[32],
    lineHeight: '38.73px',
    color: colors.White,
    fontWeight: 600,
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    height: 'max-content',
    width: '100%',
    padding: '52px 49px 113px 49px',
  },
  content: {
    height: 'max-content',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    ' & > div:not(:last-child)': {
      marginBottom: '60px',
    },
  },
  bookingContent: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flex: 1,

    ' & > div:not(:last-child)': {
      marginRight: '60px',
    },
  },
  bookingBox: {
    flexBasis: '55%',
    display: 'flex',
    flexDirection: 'column',
    height: '1060px',

    ' & > div:not(:last-child)': {
      marginBottom: '19px',
    },
  },
  scheduleBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  scheduleInfo: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 30px 30px 30px',
    borderRadius: '10px',
    border: `3px solid ${colors.White}`,

    '& > div:not(:last-child)': {
      marginBottom: '34px',
    },
  },
  scheduleContent: {
    width: '100%',
    height: 'max-content',
    display: 'flex',

    '& > div:not(:last-child)': {
      marginRight: '43px',
    },
  },
  scheduleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: 'max-content',

    '& > *:not(:last-child)': {
      marginBottom: '9px',
    },
  },
  scheduleTable: {
    display: 'flex',
    flexDirection: 'column',
    height: 'max-content',
    maxHeight: '250px',
    border: `1px solid ${colors.White}`,
    borderRadius: '5px',

    '& > div:first-child': {
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
    },

    '& > div:last-child': {
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px',
    },
  },
  scheduleTableBody: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxHeight: '100%',
    overflow: 'auto',
  },
  scheduleHeader: {
    display: 'flex',
    width: '100%',
    padding: '8px 20px',
    backgroundColor: colors.TricornBlack,

    '& > *': {
      width: '50%',
    },
  },
  scheduleHeaderLabel: {
    fontSize: fontSize[16],
    fontWeight: 500,
    lineHeight: '19.36px',
    color: colors.White,
  },
  scheduleRow: {
    display: 'flex',
    width: '100%',
    padding: '8px 20px',

    '& > *': {
      width: '50%',
    },
  },
  scheduleRowLabel: {
    fontSize: fontSize[16],
    fontWeight: 500,
    lineHeight: '19.36px',
    color: colors.White,
  },
  pick: {
    color: colors.Malachite,
  },
  available: {
    color: colors.White,
  },
  notAvailable: {
    color: colors.AgedMoustacheGrey,
  },
  scheduleInfoLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: fontSize[16],
    fontWeight: 400,
    lineHeight: '19.36px',
    color: colors.White,

    '& > svg': {
      marginRight: '17px',
    },
  },
  scheduleLabel: {
    fontSize: fontSize[16],
    fontWeight: 400,
    lineHeight: '19.36px',
    color: colors.White,
  },
  scheduleTimeBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '583px',
    padding: '23px 18px',
    borderRadius: '5px',
    border: `1px solid ${colors.White}`,

    '& > svg': {
      marginRight: '35px',
      color: colors.White,
    },
    '& > div:not(:last-child)': {
      marginRight: '24px',
    },
  },
  rentTime: {
    height: '100%',
    width: 'max-content',
    display: 'flex',
    flexDirection: 'column',
  },
  arrowSeparator: {
    color: colors.White,
    width: '35px',
    height: '30px',
  },
  rentTimeTitle: {
    fontSize: fontSize[20],
    fontWeight: 500,
    lineHeight: 'normal',
    color: colors.White,
    marginLeft: '35px',
  },
  rentTimeBox: {
    display: 'flex',
    alignItems: 'center',
  },
  rentTimeStart: {
    color: colors.Malachite,
    width: '30px',
    height: '30px',
    marginRight: '5px',
  },
  rentTimeStop: {
    color: colors.AlizarinCrimson,
    width: '30px',
    height: '30px',
    marginRight: '5px',
  },
  rentTimeLabel: {
    display: 'flex',
    width: '100%',
    fontSize: fontSize[40],
    fontWeight: 700,
    lineHeight: 'normal',
    color: colors.White,
  },
  invoiceBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  invoiceInfo: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '60px 30px 30px 30px',
    borderRadius: '10px',
    border: `3px solid ${colors.White}`,

    '& > div:not(:last-child)': {
      marginBottom: '34px',
    },
  },
  invoiceContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: colors.TricornBlack,
    padding: '15px 18px',
    borderRadius: '5px',
    '& > *:not(:last-child)': {
      marginBottom: '10px',
    },
  },
  invoiceWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: 'max-content',

    '& > *:not(:last-child)': {
      marginBottom: '9px',
    },
  },
  invoiceLabel: {
    fontSize: fontSize[16],
    fontWeight: 400,
    lineHeight: '19.36px',
    color: colors.White,
  },
  invoiceRow: {
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
  fieldBox: {
    flexBasis: '45%',
    display: 'flex',
    flexDirection: 'column',
    height: '1060px',
  },
  selectedField: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '14px',
  },
  fieldTitle: {
    fontSize: fontSize[32],
    fontWeight: 600,
    lineHeight: '38.73px',
    color: colors.White,
  },
  fieldInfo: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '54px 30px',
    borderRadius: '10px',
    border: `3px solid ${colors.White}`,
  },
  fieldPhoto: {
    width: '506px',
    height: '296px',
    filter: 'drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.2))',
    borderRadius: '5px',
    border: `1px solid ${colors.White}`,
    marginBottom: '25px',
  },
  fieldMain: {
    height: '100%',
    width: '506px',
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
    justifyContent: 'space-between',
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
    fontSize: fontSize[16],
    fontWeight: 300,
    lineHeight: '19.36px',
    color: colors.White,
  },
  warningIcon: {
    width: '22px',
    height: '24px',
    color: colors.Turbo,
    marginRight: '12px',
  },
  descWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginBottom: '0px !important',
  },
  desc: {
    fontSize: fontSize[20],
    fontWeight: 500,
    color: colors.Turbo,
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
