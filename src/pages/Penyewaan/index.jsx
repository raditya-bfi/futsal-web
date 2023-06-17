import { useLocation } from 'react-router-dom'

import {
  AddRounded,
  InfoOutlined,
  KeyboardArrowRightOutlined,
  Language,
  PhoneAndroid,
} from '@mui/icons-material'
import { Box, Tooltip, Typography } from '@mui/material'
import { get } from 'lodash-es'
import { Helmet } from 'react-helmet-async'

import { MenuDetailIcon, MobileInfoIcon, NoDataAvailable } from '~/assets/svg'
import LiveClock from '~/components/LiveClock'
import Snackbar from '~/components/Snackbar'
import DetailPenyewaanModal from '~/modules/Penyewaan/DetailPenyewaanModal'
import { colors } from '~/styles/theme'

import useCustom from './hooks'
import useStyles from './style'

function PenyewaanPage() {
  const location = useLocation()
  const stateLocation = location?.state
  const { data, handler, state } = useCustom({ stateLocation })
  const classes = useStyles()
  return (
    <>
      <Helmet title='Penyewaan'>
        <meta name='description' content='Penyewaan | Futsal Gembira' />
      </Helmet>
      <Snackbar
        handleClose={handler.handleCloseSnackbar}
        message={state?.alert?.message || stateLocation?.message}
        open={state?.alert?.open || stateLocation?.open}
        severity={state?.alert?.severity || stateLocation?.severity}
      />
      <Snackbar
        handleClose={handler.handleCloseSnackbarState}
        message={stateLocation?.message}
        open={stateLocation?.open}
        severity={stateLocation?.severity}
      />
      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Typography className={classes.title}>Daftar Penyewaan</Typography>
        </Box>
        <Box className={classes.pageContent}>
          <Box className={classes.mainContent}>
            <Box className={classes.contentInfo}>
              <Typography className={classes.infoLabel}>
                <InfoOutlined />
                Daftar yang memuat catatan tentang hal penyewaan lapangan futsal, seperti nama
                lapangan, nama penyewa, tanggal sewa, durasi sewa yang diurutkan berdasarkan tanggal
                sewa dari bawah ke atas.
              </Typography>
              <Box className={classes.infoDesc}>
                <InfoOutlined />
                <Typography>
                  Daftar penyewaan hanya memunculkan data dengan status pembayaran{' '}
                  <span className={classes.infoPaid}>Sudah Dibayar </span>
                  dengan tanggal sewa yang sama dengan tanggal sekarang
                </Typography>
              </Box>
              <Box className={classes.liveClockWrapper}>
                <LiveClock className={classes.liveClock} isOnlyTime />
              </Box>
            </Box>
            <Box className={classes.content}>
              {!data?.bookingListData || data?.bookingListData.length === 0 ? (
                <Box className={classes.noDataPlaceholder}>
                  <img className={classes.illustration} alt='not-data' src={NoDataAvailable} />
                </Box>
              ) : (
                <Box className={classes.bookingList}>
                  <Box className={classes.fieldNameWrapper}>
                    {data?.bookingListData &&
                      data?.bookingListData.length > 0 &&
                      data?.bookingListData.map((field) => (
                        <Box className={classes.fieldNameBox} key={`field-box-${field?.fieldId}`}>
                          <Typography className={classes.fieldName}>{field?.fieldName}</Typography>
                        </Box>
                      ))}
                  </Box>
                  <Box className={classes.fieldBookingsWrapper}>
                    {data?.bookingListData &&
                      data?.bookingListData.length > 0 &&
                      data?.bookingListData.map((field) => (
                        <Box
                          className={classes.fieldBookingsList}
                          key={`field-booking-list-${field?.fieldId}`}
                        >
                          {field?.bookings &&
                            field?.bookings.length > 0 &&
                            field?.bookings.map((booking) => (
                              <Box
                                className={`${classes.fieldBookingCard} ${get(
                                  classes,
                                  `${booking.bookingStatus}`,
                                  '',
                                )}`}
                                key={`field-booking-card-${field?.fieldId}-${booking?.bookingId}`}
                                onClick={() => handler?.handleOpenDetailModal(booking?.bookingId)}
                              >
                                <Typography
                                  className={
                                    booking?.bookingPlatform === 'mobile'
                                      ? classes.fieldBookingUser
                                      : classes.fieldBookingUserWeb
                                  }
                                >
                                  {booking?.bookingPlatform === 'mobile'
                                    ? booking?.bookingUser?.name
                                    : ''}
                                  <KeyboardArrowRightOutlined />
                                </Typography>
                                <Typography className={classes.fieldBookingTime}>
                                  {booking?.bookingTime}
                                </Typography>
                                <Box className={classes.fieldBookingPlatform}>
                                  {booking?.bookingPlatform === 'mobile' ? (
                                    <PhoneAndroid />
                                  ) : (
                                    <Language />
                                  )}
                                </Box>
                              </Box>
                            ))}
                        </Box>
                      ))}
                  </Box>
                </Box>
              )}
            </Box>
            <Box className={classes.legends}>
              <Box className={classes.legendInfo}>
                <Typography className={classes.legendTitle}>
                  <Box
                    className={classes.legendBox}
                    sx={{
                      border: `1px solid ${colors.AgedMoustacheGrey}`,
                      backgroundColor: colors.Tundora,
                    }}
                  />
                  Waktu bermain sudah lewat
                </Typography>
                <Typography className={classes.legendTitle}>
                  <PhoneAndroid />
                  Pemesanan lewat Mobile(Pelanggan)
                </Typography>
              </Box>
              <Box className={classes.legendInfo}>
                <Typography className={classes.legendTitle}>
                  <Box
                    className={classes.legendBox}
                    sx={{
                      border: `1px solid ${colors.ForestGreen}`,
                      backgroundColor: colors.Parsley,
                    }}
                  />
                  Waktu bermain sedang dijalankan
                </Typography>
                <Typography className={classes.legendTitle}>
                  <Language />
                  Pemesanan lewat Web(Admin/Operator)
                </Typography>
              </Box>
              <Box className={classes.legendInfo}>
                <Typography className={classes.legendTitle}>
                  <Box
                    className={classes.legendBox}
                    sx={{
                      border: `1px solid ${colors.KeyLimePie}`,
                      backgroundColor: colors.Hacienda,
                    }}
                  />
                  Waktu bermain sedang menunggu
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.navigation}>
            <Tooltip title='Tambah Penyewaan' placement='left'>
              <Box
                className={classes.addButton}
                onClick={() => handler?.handleRedirectToTambahPenyewaan()}
              >
                <AddRounded />
              </Box>
            </Tooltip>
            <Tooltip title='Lihat Aturan Penyewaan Mobile' placement='left'>
              <Box
                className={classes.mobileInfo}
                onClick={() => handler?.handleRedirectToMobileRules()}
              >
                <img
                  className={classes.mobileInfoIcon}
                  src={MobileInfoIcon}
                  alt='mobile-info-icon'
                />
              </Box>
            </Tooltip>
            <Tooltip title='Lihat Daftar Lebih Banyak' placement='left'>
              <Box className={classes.moreList} onClick={() => handler?.handleRedirectToMoreList()}>
                <img
                  className={classes.menuDetailIcon}
                  src={MenuDetailIcon}
                  alt='menu-detail-icon'
                />
              </Box>
            </Tooltip>
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

export default PenyewaanPage
