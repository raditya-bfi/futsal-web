import { NavigateBeforeRounded, Search } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { get } from 'lodash-es'
import moment from 'moment'
import { Helmet } from 'react-helmet-async'

import CustomSelect from '~/components/CustomSelect'
import DatePicker from '~/components/DatePicker'
import GridTable from '~/components/GridTable'
import date from '~/config/date'
import { BOOKING_PAYMENT_STATUS_LABEL_MAPPING } from '~/constants/general'
import { useNavigateParams } from '~/utils/routing'

import { STATUS_OPTIONS } from './helper'
import useCustom from './hooks'
import useStyles from './style'

export const getBookingColumns = () => [
  {
    field: 'userName',
    headerName: 'Nama Penyewa',
    width: '160px',
    editable: false,
    justifyContentHeader: 'start',
    renderCell: (cellValues) => <div>{cellValues?.userName}</div>,
  },
  {
    field: 'fieldName',
    headerName: 'Lapangan',
    width: '160px',
    editable: false,
    justifyContentHeader: 'start',
    renderCell: (cellValues) => <div>{cellValues?.fieldName}</div>,
  },
  {
    field: 'date',
    headerName: 'Tanggal Sewa',
    width: '160px',
    editable: false,
    justifyContentHeader: 'start',
    renderCell: (cellValues) => <div>{cellValues?.date}</div>,
  },
  {
    field: 'duration',
    headerName: 'Durasi',
    width: '160px',
    editable: false,
    justifyContentHeader: 'start',
    renderCell: (cellValues) => <div>{`${cellValues?.duration} Jam`}</div>,
  },
]

function MoreListPage() {
  const { data, handler, state } = useCustom()
  const navigate = useNavigateParams()
  const classes = useStyles()

  const handleBackButton = () => {
    navigate('/penyewaan')
  }

  return (
    <>
      <Helmet title='Daftar Sewa Lebih Banyak'>
        <meta name='description' content='Daftar Sewa Lebih Banyak | Futsal Gembira' />
      </Helmet>
      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Box className={classes.titleWrapper}>
            <IconButton className={classes.backIcon} onClick={() => handleBackButton()}>
              <NavigateBeforeRounded />
            </IconButton>
            <Typography className={classes.title}>Daftar Sewa Lebih Banyak</Typography>
          </Box>
        </Box>
        <Box className={classes.pageContent}>
          <Box className={classes.content}>
            <Box className={classes.options}>
              <Box className={classes.optionInput}>
                <Typography className={classes.optionTitle}>Status</Typography>
                <CustomSelect
                  isFullWidth
                  handleChange={handler.handleChangeStatus}
                  options={STATUS_OPTIONS}
                  value={state?.selectedPaymentStatus}
                />
              </Box>
              <Box className={classes.optionInput}>
                <Typography className={classes.optionTitle}>Tanggal Sewa</Typography>
                <DatePicker
                  minDate={moment('2023-06-01').format(date.daily.format)}
                  handleDateChange={(value) => handler?.setSelectedDate(value.format('YYYY-MM-DD'))}
                  selectedDate={state.selectedDate}
                  width='100%'
                />
              </Box>
              <Button
                className={classes.buttonSearch}
                variant='outlined'
                fullWidth
                type='button'
                disableRipple
                onClick={() => {
                  handler?.handleSearchButton()
                }}
              >
                <Search />
              </Button>
            </Box>
            <Box className={classes.table}>
              <Box className={classes.tableInfo}>
                <Typography
                  className={`${classes.paidStatus} ${get(
                    classes,
                    `${data?.bookingTableData?.status}`,
                    '',
                  )}`}
                >
                  {BOOKING_PAYMENT_STATUS_LABEL_MAPPING[data?.bookingTableData?.status]}
                </Typography>
                <Typography className={classes.dateInfo}>
                  {moment(data?.bookingTableData?.date).format('DD MMM YYYY')}
                </Typography>
              </Box>
              <GridTable
                columns={getBookingColumns()}
                rows={data?.bookingTableData?.tableData}
                page={state?.pagination?.currentPage}
                rowsPerPage={state?.pagination?.rowPerPage}
                totalData={state?.pagination?.totalData}
                totalPage={state?.pagination?.totalPage}
                handleChangePage={handler?.handleChangePage}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MoreListPage
