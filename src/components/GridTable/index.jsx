import PropTypes from 'prop-types'
import React from 'react'

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TablePagination,
  Pagination,
  PaginationItem,
} from '@mui/material'

import useStyle from './style'

function GridTable({
  rows,
  columns,
  page,
  rowsPerPage,
  totalData,
  totalPage,
  handleChangePage,
  handleChangeRowsPerPage,
  handleClickRow,
}) {
  const classes = useStyle()

  return (
    <div className={classes.table}>
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
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length ? (
              rows?.map((row, index) => (
                <TableRow
                  className={classes.tableRow}
                  style={{ height: 'auto !important' }}
                  key={`table-content-row-${row.key}`}
                  onClick={() => handleClickRow(row.id)}
                >
                  {columns.map((item) => (
                    <TableCell
                      key={`table-column-${row.key}-${item.field}`}
                      sx={{
                        textAlign: 'left',
                        width: item.width,
                        whiteSpace: 'break-spaces',
                      }}
                      className={classes.tableCellBody}
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
                    color: 'white',
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
                rowsPerPageOptions={[10]}
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
              count={totalPage}
              page={page}
              onChange={handleChangePage}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    next: () => '>>',
                    previous: () => '<<',
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
  rows: [{}],
  columns: [{}],
  page: 1,
  rowsPerPage: 10,
  totalData: 0,
  totalPage: 0,
  handleChangePage: () => {},
  handleChangeRowsPerPage: () => {},
  handleClickRow: () => {},
}

GridTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({})),
  columns: PropTypes.arrayOf(PropTypes.shape({})),
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  totalData: PropTypes.number,
  totalPage: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  handleClickRow: PropTypes.func,
}

export default GridTable
