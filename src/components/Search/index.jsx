import PropTypes from 'prop-types'
import React from 'react'

import { Search as searchIcon } from '@mui/icons-material'
import { Box, InputAdornment } from '@mui/material'

import CustomField from '~/components/CustomField'

import useStyle from './style'

function Search({ handleSearch, searchVal, width, placeholder }) {
  const classes = useStyle({ width })
  return (
    <Box className={classes.searchContainer}>
      <CustomField
        placeholder={placeholder}
        onChange={handleSearch}
        value={searchVal}
        inputProps={
          <InputAdornment position='end'>
            <img src={searchIcon} alt='search-icon' />
          </InputAdornment>
        }
      />
    </Box>
  )
}

Search.defaultProps = {
  handleSearch: () => {},
  placeholder: 'Search',
  searchVal: '',
  width: '20vw',
}

Search.propTypes = {
  handleSearch: PropTypes.func,
  placeholder: PropTypes.string,
  searchVal: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Search
