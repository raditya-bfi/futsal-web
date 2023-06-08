import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles(() => ({
  table: {
    border: `1px solid ${colors.White}`,
    borderRadius: '5px',
  },
  tableCellHead: {
    textAlign: 'center',
    whiteSpace: 'pre',
    backgroundColor: colors.TricornBlack,
    borderBottomWidth: '0px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    fontSize: fontSize[18],
    fontWeight: 500,
    lineHeight: '19.36px',
    color: colors.White,
  },
  tableCellHeadContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  tableCellHeadIcon: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '5px',
  },
  tableRow: {
    height: 'auto !important',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: `${colors.AgedMoustacheGrey} !important`,
    },
  },
  tableCellBody: {
    borderBottomWidth: '0px',
    borderRadius: '0px',
    fontSize: fontSize[18],
    fontWeight: 400,
    lineHeight: '19.36px',
    color: colors.White,
  },
  paginationSectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px',

    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
  tablePagination: {
    color: colors.White,
    '& .MuiTablePagination-select, .MuiTablePagination-select:focus': {
      border: `1px solid ${colors.White}`,
      borderRadius: '4px',
      backgroundColor: 'transparent',
      color: colors.White,
    },
  },
  paginationButton: {
    marginRight: '2%',

    '& li:first-child .MuiButtonBase-root': {
      border: `1px solid ${colors.White}`,
      borderTopLeftRadius: '0.25rem',
      borderBottomLeftRadius: '0.25rem',
      color: colors.White,
    },
    '& li:last-child .MuiButtonBase-root': {
      border: `1px solid ${colors.White}`,
      borderTopRightRadius: '0.25rem',
      borderBottomRightRadius: '0.25rem',
      color: colors.White,
    },
    '& .MuiButtonBase-root': {
      border: `1px solid ${colors.White}`,
      borderRadius: 0,
      margin: '0px !important',
      padding: '1.5rem 1rem',
      color: colors.White,
    },
    '& .MuiButtonBase-root.Mui-selected': {
      backgroundColor: colors.White,
      border: `1px solid ${colors.White}`,
      color: colors.TricornBlack,
    },
    '& .MuiButtonBase-root.Mui-selected:hover': {
      backgroundColor: colors.White,
      border: `1px solid ${colors.White}`,
      color: colors.TricornBlack,
    },
  },
}))

export default style
