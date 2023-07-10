import { NavigateBeforeRounded } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { get } from 'lodash-es'
import moment from 'moment'
import { Helmet } from 'react-helmet-async'

import CustomSelect from '~/components/CustomSelect'
import DatePicker from '~/components/DatePicker'
import GridTable from '~/components/GridTable'
import Snackbar from '~/components/Snackbar'
import date from '~/config/date'
import { BOOKING_PAYMENT_STATUS_LABEL_MAPPING } from '~/constants/general'
import DetailPenyewaanModal from '~/modules/Penyewaan/DetailPenyewaanModal'
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
      <Snackbar
        handleClose={handler.handleCloseSnackbar}
        message={state?.alert?.message}
        open={state?.alert?.open}
        severity={state?.alert?.severity}
      />
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
                <Typography className={classes.optionTitle}>Dimulai Dari</Typography>
                <DatePicker
                  minDate={moment('2023-06-01').format(date.daily.format)}
                  maxDate={moment().add(1, 'months').format(date.daily.format)}
                  handleDateChange={(value) =>
                    handler?.setSelectedStartDate(value.format('YYYY-MM-DD'))
                  }
                  selectedDate={state.selectedStartDate}
                  width='100%'
                />
              </Box>
              <Box className={classes.optionInput}>
                <Typography className={classes.optionTitle}>Sampai</Typography>
                <DatePicker
                  minDate={moment(state.selectedStartDate).add(1, 'day').format(date.daily.format)}
                  maxDate={moment(state.selectedStartDate)
                    .add(1, 'months')
                    .format(date.daily.format)}
                  handleDateChange={(value) =>
                    handler?.setSelectedEndDate(value.format('YYYY-MM-DD'))
                  }
                  selectedDate={state.selectedEndDate}
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
                Cari
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
                  {`${moment(data?.bookingTableData?.startDate).format('DD MMM YYYY')} - ${moment(
                    data?.bookingTableData?.endDate,
                  ).format('DD MMM YYYY')}`}
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
                handleClickRow={handler?.handleOpenDetailModal}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <DetailPenyewaanModal
        alert={state?.alert}
        bookingId={state?.selectedBookingId}
        onClose={handler?.handleCloseDetailModal}
        open={state?.openDetailModal}
        setAlert={handler?.setAlert}
        setIsNeedRefetch={handler?.setIsNeedRefetch}
        setOpenModal={handler?.setOpenDetailModal}
      />
    </>
  )
}

export default MoreListPage
