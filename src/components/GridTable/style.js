import { makeStyles } from '@mui/styles'

import { colors } from '~/styles/theme'

const style = makeStyles(() => ({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'end',
    marginBottom: 10,
  },
  tableCellHead: {
    textAlign: 'center',
    whiteSpace: 'pre',
    backgroundColor: colors.White,
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
  paginationSectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
  tablePagination: {
    '& .MuiTablePagination-select, .MuiTablePagination-select:focus': {
      border: `1px solid ${colors.DiamondCut}`,
      borderRadius: '4px',
      backgroundColor: 'transparent',
    },
  },
  paginationButton: {
    marginRight: '2%',

    '& li:first-child .MuiButtonBase-root': {
      border: `1px solid ${colors.DiamondCut}`,
      borderTopLeftRadius: '0.25rem',
      borderBottomLeftRadius: '0.25rem',
    },
    '& li:last-child .MuiButtonBase-root': {
      border: `1px solid ${colors.DiamondCut}`,
      borderTopRightRadius: '0.25rem',
      borderBottomRightRadius: '0.25rem',
    },
    '& .MuiButtonBase-root': {
      border: `1px solid ${colors.DiamondCut}`,
      borderRadius: 0,
      margin: '0px !important',
      padding: '1.5rem 1rem',
    },
    '& .MuiButtonBase-root.Mui-selected': {
      backgroundColor: colors.Smalt,
      border: `1px solid ${colors.Smalt}`,
      color: 'white',
    },
    '& .MuiButtonBase-root.Mui-selected:hover': {
      backgroundColor: colors.Smalt,
      border: `1px solid ${colors.Smalt}`,
      color: 'white',
    },
  },
}))

export default style
