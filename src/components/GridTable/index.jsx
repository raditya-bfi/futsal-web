import PropTypes from 'prop-types'
import React from 'react'

import { North, South, Search } from '@mui/icons-material'
import {
  Box,
  InputAdornment,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TablePagination,
  TableSortLabel,
  Pagination,
  PaginationItem,
} from '@mui/material'

import CustomField from '~/components/CustomField'
import { colors } from '~/styles/theme'

import useStyle from './style'

function GridTable({
  rows,
  columns,
  searchVal,
  page,
  rowsPerPage,
  totalData,
  totalPages,
  handleChangePage,
  handleChangeRowsPerPage,
  handleSearch,
  handleSort,
}) {
  const classes = useStyle()

  return (
    <div>
      <Box className={classes.searchContainer}>
        <CustomField
          placeholder='Search'
          onChange={handleSearch}
          value={searchVal}
          inputProps={
            <InputAdornment position='end'>
              <Search />
            </InputAdornment>
          }
        />
      </Box>
      <TableContainer sx={{ marginBottom: 10 }} component='div'>
        <Table stickyHeader sx={{ minWidth: '5%', overflowX: 'auto' }}>
          <TableHead>
            <TableRow>
              {columns.map((title) => (
                <TableCell
                  align='center'
                  key={`table-header-column-${title.field}`}
                  className={classes.tableCellHead}
                >
                  <div className={classes.tableCellHeadContent}>
                    <span style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                      {title.headerName}
                    </span>
                    {title.sortIcon && (
                      <TableSortLabel
                        // eslint-disable-next-line react/no-unstable-nested-components
                        IconComponent={() => (
                          <div className={classes.tableCellHeadIcon}>
                            <North
                              onClick={() => {
                                handleSort(title.field, 'asc')
                              }}
                              sx={{
                                color: colors.OsloGray,
                                marginBottom: '3px',
                                ':hover': {
                                  color: () => colors.Trout,
                                },
                                width: 14,
                              }}
                              active={classes.iconDesc}
                            />
                            <South
                              onClick={() => {
                                handleSort(title.field, 'desc')
                              }}
                              sx={{
                                color: colors.OsloGray,
                                ':hover': {
                                  color: () => colors.Trout,
                                },
                                width: 14,
                              }}
                            />
                          </div>
                        )}
                      />
                    )}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length ? (
              rows?.map((row, index) => (
                <TableRow style={{ height: 'auto !important' }} key={`table-content-row-${row.id}`}>
                  {columns.map((item) => (
                    <TableCell
                      key={`table-column-${row.id}-${item.field}`}
                      sx={{
                        textAlign: 'left',
                        width: item.width,
                        whiteSpace: 'break-spaces',
                      }}
                    >
                      {item.field === 'no' ? index + 1 : item.renderCell(row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  No data available in table
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.paginationSectionContainer}>
        {totalData ? (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <TablePagination
                className={classes.tablePagination}
                rowsPerPageOptions={[10, 25, 50, 100]}
                component='div'
                count={totalData}
                rowsPerPage={rowsPerPage}
                page={page - 1}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                nextIconButtonProps={{ style: { display: 'none' } }}
                backIconButtonProps={{ style: { display: 'none' } }}
                labelDisplayedRows={({ from, to, count }) =>
                  `Showing ${from} to ${to} of ${count !== -1 ? count : `more than ${to}`} entries`
                }
              />
            </div>
            <Pagination
              className={classes.paginationButton}
              count={totalPages}
              page={page}
              onChange={handleChangePage}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    next: () => 'Next',
                    previous: () => 'Previous',
                  }}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...item}
                />
              )}
              variant='outlined'
              shape='rounded'
              color='standard'
            />
          </>
        ) : null}
      </div>
    </div>
  )
}

GridTable.defaultProps = {
  rows: {},
  columns: {},
  searchVal: '',
  page: 1,
  rowsPerPage: 10,
  totalData: 0,
  totalPages: 0,
  handleSearch: () => {},
  handleChangePage: () => {},
  handleChangeRowsPerPage: () => {},
  handleSort: () => {},
}

GridTable.propTypes = {
  rows: PropTypes.shape({}),
  columns: PropTypes.shape({}),
  searchVal: PropTypes.string,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  totalData: PropTypes.number,
  totalPages: PropTypes.number,
  handleSearch: PropTypes.func,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  handleSort: PropTypes.func,
}

export default GridTable
