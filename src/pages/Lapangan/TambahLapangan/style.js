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
  },
  fieldContent: {
    display: 'flex',
    flex: 1,

    ' & > div:not(:last-child)': {
      marginRight: '41px',
    },
  },
  fieldInfo: {
    flexBasis: '70%',
    display: 'flex',
    flexDirection: 'column',

    ' & > div:not(:last-child)': {
      marginBottom: '35px',
    },
  },
  infoTitle: {
    fontSize: fontSize[32],
    fontWeight: 600,
    lineHeight: '38.73px',
    color: colors.White,
    marginBottom: theme.spacing(6),
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  descInput: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 30px',
    border: `3px solid ${colors.White}`,
    borderRadius: '10px',

    ' & > div:not(:last-child)': {
      marginBottom: '46px',
    },
  },
  descWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  inpuTitle: {
    fontSize: fontSize[16],
    fontWeight: 400,
    lineHeight: '19.36px',
    color: colors.White,
    marginBottom: theme.spacing(3),
  },
  inputValue: {
    fontSize: fontSize[24],
    fontWeight: 600,
    lineHeight: '29.05px',
    color: colors.White,
  },
  textInput: {
    '& .MuiOutlinedInput-root': {
      '& .MuiInputBase-input': {
        color: colors.White,
      },
      '& fieldset': {
        borderRadius: '10px',
        borderColor: colors.White,
      },
      '&:hover fieldset': {
        borderRadius: '10px',
        borderColor: colors.White,
      },
      '&.Mui-focused fieldset': {
        borderRadius: '10px',
        borderColor: colors.White,
      },
      '& .MuiInputAdornment-root': {
        '& .MuiIconButton-root': {
          color: colors.White,
        },
      },
    },
    '& .MuiFormHelperText-root': {
      color: colors.TorchRed,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: colors.TorchRed,
    },
  },
  ketersediaanWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  ketersediaanContainer: {
    display: 'flex',
    justifyContent: 'space-between',

    ' & > div:not(:last-child)': {
      marginRight: '29px',
    },
  },
  hargaContainer: {
    display: 'flex',
    ' & > *:not(:last-child)': {
      marginRight: '100px',
    },
  },
  hargaWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    maxWidth: '240px',
  },
  hargaInput: {
    display: 'flex',
    alignItems: 'center',
    ' & > *:not(:last-child)': {
      marginRight: '12px',
    },
  },
  numberInput: {
    '& .MuiOutlinedInput-root': {
      width: '140px',
      '& .MuiInputBase-input': {
        color: colors.White,
      },
      '& fieldset': {
        borderRadius: '10px',
        borderColor: colors.White,
      },
      '&:hover fieldset': {
        borderRadius: '10px',
        borderColor: colors.White,
      },
      '&.Mui-focused fieldset': {
        borderRadius: '10px',
        borderColor: colors.White,
      },
      '& .MuiInputAdornment-root': {
        '& .MuiIconButton-root': {
          color: colors.White,
        },
      },
    },
    '& .MuiFormHelperText-root': {
      color: colors.TorchRed,
      width: '140px',
      marginRight: '0px',
      marginLeft: '0px',
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: colors.TorchRed,
      width: '140px',
      marginRight: '0px',
      marginLeft: '0px',
    },
  },
  infoLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: fontSize[14],
    fontWeight: 400,
    lineHeight: '16.94px',
    color: colors.White,
    marginTop: '24px',
    textAlign: 'justify',

    '& > svg': {
      width: '20px',
      height: '20px',
      marginRight: theme.spacing(3),
    },
  },
  fieldSlider: {
    flexBasis: '30%',
    display: 'flex',
    flexDirection: 'column',
  },
  fieldSliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    border: `3px solid ${colors.White}`,
    borderRadius: '10px',
    padding: 40,
  },
  fieldSliderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    marginTop: '36px',

    '& > div:not(last-child)': {
      marginBottom: '12px',
    },
  },
  fieldSlidePhoto: {
    width: '290px',
    height: '175px',
    border: `0.7px solid ${colors.White}`,
    borderRadius: '5px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
    padding: '16px 17px',
  },
  fieldSlidePlaceHolder: {
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

    '& > button': {
      '& > svg': {
        width: '50px',
        height: '50px',
        color: colors.ForestGreen,
        cursor: 'pointer',
      },
    },
  },
  closeWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',

    '& > button': {
      '& > svg': {
        color: colors.White,
        cursor: 'pointer',

        '&:hover': {
          color: colors.Vermilion,
        },
      },
    },
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
