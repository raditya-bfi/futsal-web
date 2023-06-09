import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: colors.TricornBlack,
    borderRadius: '5px',
  },
  dropZone: {
    flex: 1,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    // backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='black' stroke-width='1' stroke-dasharray='6%2c 14' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e")`,
    transition: 'border .24s ease-in-out',
    cursor: 'pointer',
  },
  // ? : Init UI
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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

  thumbsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  thumb: {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
  },
  thumbInner: {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  },
  img: {
    display: 'block',
    width: 'auto',
    height: '100%',
  },
  uploadIcon: {
    height: '53.33px',
    width: '58.7px',
    marginBottom: theme.spacing(3),
  },
  label: {
    fontSize: fontSize[14],
    lineHeight: '21px',
    marginBottom: theme.spacing(6),
  },
  fileButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileIcon: {
    width: '20px',
    height: '18px',
    marginRight: theme.spacing(2),
  },
  previewWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  imgPreview: {
    display: 'block',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    maxWidth: '450px',
  },
  previewOverlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    maxHeight: '570px',
    maxWidth: '450px',
    '&:hover': {
      opacity: 1,
    },
  },
  previewInner: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  innerOverlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: `rgba(0, 0, 0, 75%)`,
    height: '100%',
    width: '100%',
  },
  previewFileName: {
    width: '70%',
    fontSize: fontSize[16],
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: '24px',
    color: colors.White,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  previewCloseIcon: {
    width: '20%',
    maxHeight: '32px',
    maxWidth: '32px',
    borderRadius: '50px',
    backgroundColor: colors.White,
    '&:hover': {
      backgroundColor: colors.White,
    },
  },
}))

export default style
