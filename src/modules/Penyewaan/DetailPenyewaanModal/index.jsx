import {
  AccessTime,
  CalendarToday,
  ConfirmationNumber,
  Email,
  FemaleRounded,
  InfoOutlined,
  MaleRounded,
  Paid,
  Password,
  Phone,
  Room,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { capitalize, get, truncate } from 'lodash-es'
import moment from 'moment'

import { MenuLapangan, MenuPenyewaan, UserIcon } from '~/assets/svg'
import CustomModal from '~/components/CustomModal'
import {
  BOOKING_PAYMENT_STATUS_KEY,
  BOOKING_PAYMENT_STATUS_LABEL_MAPPING,
  ROLE_KEY,
} from '~/constants/general'
import { thousandSeparator } from '~/utils/number'

import KonfirmasiBatalkanPenyewaanModal from '../KonfirmasiBatalkanPenyewaanModal'

import useCustom from './hooks'
import useStyles from './style'

function DetailPenyewaanModal({
  alert,
  setAlert,
  setIsNeedRefetch,
  onClose,
  open,
  setOpenModal,
  bookingId,
}) {
  const { handler, state } = useCustom({
    alert,
    setAlert,
    setIsNeedRefetch,
    open,
    setOpenModal,
    bookingId,
  })
  const classes = useStyles()

  return (
    <>
      <CustomModal
        onClose={onClose}
        open={open}
        modalPadding='42px 65px'
        modalBorderRadius='10px'
        width='1041px'
      >
        <CustomModal.Header onClose={onClose}>
          <img
            className={classes.modalHeaderIcon}
            src={MenuPenyewaan}
            alt='detail-penyewaan-modal-header-icon'
          />
          <CustomModal.HeaderTitle size={36}>Detail Penyewaan</CustomModal.HeaderTitle>
        </CustomModal.Header>
        <CustomModal.Content>
          <Box className={classes.modal}>
            <Box className={classes.detailWrapper}>
              <Box className={classes.leftSection}>
                <Typography className={classes.title}>
                  {`Pendaftar - ${capitalize(state?.bookingData.platform_booking)}`}
                </Typography>
                <Box className={classes.detailInfo}>
                  <Box className={classes.userPhoto}>
                    {state?.bookingData?.user?.thumbnail ? (
                      <img
                        className={classes.userPhotoUpload}
                        src={state?.bookingData?.user?.thumbnail}
                        alt='detail-penyewaan-user'
                      />
                    ) : (
                      <img
                        className={classes.userIconUpload}
                        src={UserIcon}
                        alt='detail-penyewaan-user-icon'
                      />
                    )}
                  </Box>
                  <Box className={classes.userInfoWrapper}>
                    <Box className={classes.userData}>
                      <Tooltip title={state?.bookingData?.user?.name} placement='top'>
                        <Typography className={classes.name}>
                          {truncate(state?.bookingData?.user?.name, {
                            length: 15,
                            omission: '...',
                          })}
                        </Typography>
                      </Tooltip>
                      <span className={classes.genderWrapper}>
                        {state?.bookingData?.user?.gender === 'LK' ? (
                          <MaleRounded className={classes.maleIcon} />
                        ) : (
                          <FemaleRounded className={classes.femaleIcon} />
                        )}
                      </span>
                    </Box>
                    <Tooltip title={state?.bookingData?.user?.username} placement='top'>
                      <Typography className={classes.username}>
                        {`@${truncate(state?.bookingData?.user?.username, {
                          length: 20,
                          omission: '...',
                        })}`}
                      </Typography>
                    </Tooltip>
                    <Box className={classes.userData} sx={{ marginBottom: '8px' }}>
                      <Typography className={classes.userInfoLabel}>
                        <Phone />
                        {state?.bookingData?.user?.no_hp}
                      </Typography>
                    </Box>
                    <Box className={classes.userData} sx={{ marginBottom: '8px' }}>
                      <Typography className={classes.userInfoLabel}>
                        <Email />
                        {state?.bookingData?.user?.email}
                      </Typography>
                    </Box>
                    <Box className={classes.userData}>
                      <Typography className={classes.userInfoLabel}>
                        <Room />
                        {state?.bookingData?.user?.alamat || 'Tidak ada data'}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.rightSection}>
                <Typography className={classes.title}>Jadwal dan Tempat Sewa</Typography>
                <Box className={classes.detailInfoRight}>
                  <Box className={classes.infoWrapper}>
                    <img
                      className={classes.infoIcon}
                      src={MenuLapangan}
                      alt='detail-penyewaan-field-icon'
                    />
                    <Box className={classes.infoBox}>
                      <Typography className={classes.infoBoxTitle}>Nama Lapangan</Typography>
                      <Typography className={classes.infoBoxDesc}>
                        {state?.bookingData?.field_name}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.infoWrapper}>
                    <CalendarToday className={classes.infoIcon} />
                    <Box className={classes.infoBox}>
                      <Typography className={classes.infoBoxTitle}>
                        Tanggal dan Waktu Sewa
                      </Typography>
                      <Typography className={classes.infoBoxDesc}>
                        {state?.bookingData?.booking_date_time}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.infoWrapper}>
                    <AccessTime className={classes.infoIcon} />
                    <Box className={classes.infoBox}>
                      <Typography className={classes.infoBoxTitle}>Durasi Sewa</Typography>
                      <Typography className={classes.infoBoxDesc}>
                        {`${state?.bookingData?.duration} Jam`}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.detailWrapper}>
              <Box className={classes.leftSection}>
                <Typography className={classes.title}>Biaya Sewa</Typography>
                <Box className={classes.detailInfoBottom} sx={{ justifyContent: 'space-between' }}>
                  <Box className={classes.invoiceWrapper}>
                    <Typography className={classes.invoiceHeader} variant='div'>
                      Deskripsi Barang
                    </Typography>
                    <Typography className={classes.invoiceHeader} variant='div'>
                      Harga Satuan
                    </Typography>
                    <Typography className={classes.invoiceHeader} variant='div'>
                      Nilai
                    </Typography>
                  </Box>
                  <Box className={classes.invoiceDetailWrapper}>
                    {state?.bookingData?.day_price_quantity &&
                    state?.bookingData?.day_price_quantity > 0 ? (
                      <Box className={classes.invoiceWrapper}>
                        <Typography className={classes.invoiceDetail} variant='div'>
                          Sewa per Jam
                        </Typography>
                        <Typography className={classes.invoiceDetail} variant='div'>
                          {`Rp ${thousandSeparator(
                            get(state?.bookingData, 'day_price', 0) || 0,
                            0,
                            false,
                          )} x ${get(state?.bookingData, 'day_price_quantity', 0) || 0}`}
                        </Typography>
                        <Typography className={classes.invoiceDetail} variant='div'>
                          {`Rp ${thousandSeparator(
                            (get(state?.bookingData, 'day_price', 0) || 0) *
                              (get(state?.bookingData, 'day_price_quantity', 0) || 0),
                            0,
                            false,
                          )}`}
                        </Typography>
                      </Box>
                    ) : (
                      <> </>
                    )}
                    {state?.bookingData?.night_price_quantity &&
                    state?.bookingData?.night_price_quantity > 0 ? (
                      <Box className={classes.invoiceWrapper}>
                        <Typography className={classes.invoiceDetail} variant='div'>
                          Sewa Khusus Malam per Jam
                        </Typography>
                        <Typography className={classes.invoiceDetail} variant='div'>
                          {`Rp ${thousandSeparator(
                            get(state?.bookingData, 'night_price', 0) || 0,
                            0,
                            false,
                          )} x ${get(state?.bookingData, 'night_price_quantity', 0) || 0}`}
                        </Typography>
                        <Typography className={classes.invoiceDetail} variant='div'>
                          {`Rp ${thousandSeparator(
                            (get(state?.bookingData, 'night_price', 0) || 0) *
                              (get(state?.bookingData, 'night_price_quantity', 0) || 0),
                            0,
                            false,
                          )}`}
                        </Typography>
                      </Box>
                    ) : (
                      <> </>
                    )}
                    {state?.bookingData?.admin_price && state?.bookingData?.admin_price > 0 ? (
                      <Box className={classes.invoiceWrapper}>
                        <Typography className={classes.invoiceDetail} variant='div'>
                          Biaya Admin
                        </Typography>
                        <Typography className={classes.invoiceDetail} variant='div'>
                          {`Rp ${thousandSeparator(
                            get(state?.bookingData, 'admin_price', 0) || 0,
                            0,
                            false,
                          )} x 1`}
                        </Typography>
                        <Typography className={classes.invoiceDetail} variant='div'>
                          {`Rp ${thousandSeparator(
                            get(state?.bookingData, 'admin_price', 0) || 0,
                            0,
                            false,
                          )}`}
                        </Typography>
                      </Box>
                    ) : (
                      <> </>
                    )}
                  </Box>
                  <Box className={classes.invoiceWrapper}>
                    <Typography className={classes.invoiceFooter} variant='div'>
                      Total
                    </Typography>
                    <Typography className={classes.invoiceFooter} variant='div' />
                    <Typography className={classes.invoiceFooter} variant='div'>
                      {`Rp ${thousandSeparator(state?.bookingData?.total_price, 0, false)}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.rightSection}>
                <Box className={classes.titleWrapper}>
                  <Typography className={classes.title}>Status</Typography>
                  <Typography
                    className={`${classes.paymentStatus} ${get(
                      classes,
                      state?.bookingData?.canceled_by_admin === true
                        ? 'canceled_admin'
                        : state?.bookingData?.status_bayar,
                      '',
                    )}`}
                  >
                    {state?.bookingData?.canceled_by_admin === true
                      ? BOOKING_PAYMENT_STATUS_LABEL_MAPPING[
                          BOOKING_PAYMENT_STATUS_KEY.CANCELED_BY_ADMIN
                        ]
                      : BOOKING_PAYMENT_STATUS_LABEL_MAPPING[state?.bookingData?.status_bayar]}
                  </Typography>
                </Box>
                {state?.bookingData?.status_bayar === BOOKING_PAYMENT_STATUS_KEY.PAID && (
                  <Box className={classes.detailInfoBottom}>
                    <Box className={classes.infoWrapper}>
                      <Paid className={classes.infoIcon} />
                      <Box className={classes.infoBox}>
                        <Typography className={classes.infoBoxTitle}>Metode Pembayaran</Typography>
                        <Typography className={classes.infoBoxDesc}>
                          {state?.bookingData?.booking_payment_method_name}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.infoWrapper}>
                      <CalendarToday className={classes.infoIcon} />
                      <Box className={classes.infoBox}>
                        <Typography className={classes.infoBoxTitle}>Tanggal Pembayaran</Typography>
                        <Typography className={classes.infoBoxDesc}>
                          {state?.bookingData?.tanggal_pembayaran}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.infoWrapper}>
                      <Password className={classes.infoIcon} />
                      <Box className={classes.infoBox}>
                        <Typography className={classes.infoBoxTitle}>
                          Verifikasi Kode Check-In
                        </Typography>
                        <span className={classes.codeWrapper}>
                          <Typography className={classes.infoBoxDesc}>
                            {state?.showCode ? '******' : state?.bookingData?.verification_code}
                          </Typography>
                          <IconButton
                            className={classes.iconButton}
                            onClick={() => {
                              handler?.handleClickShowCode()
                            }}
                          >
                            {state?.showCode ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </span>
                      </Box>
                    </Box>
                  </Box>
                )}
                {state?.bookingData?.status_bayar === BOOKING_PAYMENT_STATUS_KEY.CANCELED &&
                  state?.bookingData?.canceled_by_admin === false && (
                    <Box className={classes.detailInfoBottom}>
                      <Box className={classes.infoWrapper}>
                        <CalendarToday className={classes.infoIcon} />
                        <Box className={classes.infoBox}>
                          <Typography className={classes.infoBoxTitle}>Batas Pembayaran</Typography>
                          <Typography className={classes.infoBoxDesc}>
                            {state?.bookingData?.tanggal_batas_pembayaran}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )}
                {state?.bookingData?.status_bayar === BOOKING_PAYMENT_STATUS_KEY.WAITING && (
                  <Box className={classes.detailInfoBottom}>
                    <Box className={classes.infoWrapper}>
                      <Paid className={classes.infoIcon} />
                      <Box className={classes.infoBox}>
                        <Typography className={classes.infoBoxTitle}>Metode Pembayaran</Typography>
                        <Typography className={classes.infoBoxDesc}>
                          {state?.bookingData?.booking_payment_method_name}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.infoWrapper}>
                      <ConfirmationNumber className={classes.infoIcon} />
                      <Box className={classes.infoBox}>
                        <Typography className={classes.infoBoxTitle}>Kode Pembayaran</Typography>
                        <Typography className={classes.infoBoxDesc}>
                          {state?.bookingData?.virtual_account_code}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.infoWrapper}>
                      <CalendarToday className={classes.infoIcon} />
                      <Box className={classes.infoBox}>
                        <Typography className={classes.infoBoxTitle}>Batas Pembayaran</Typography>
                        <Typography className={classes.infoBoxDesc}>
                          {state?.bookingData?.tanggal_batas_pembayaran}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
                {state?.bookingData?.status_bayar === BOOKING_PAYMENT_STATUS_KEY.CANCELED &&
                  state?.bookingData?.canceled_by_admin === true && (
                    <Box className={classes.detailInfoBottom} sx={{ overflow: 'auto' }}>
                      <Box className={classes.infoWrapper}>
                        <InfoOutlined className={classes.infoIcon} />
                        <Box className={classes.infoBox}>
                          <Typography className={classes.infoBoxTitle}>
                            Status Sebelumnya
                          </Typography>
                          <Typography
                            className={`${classes.infoBoxDesc} ${get(
                              classes,
                              state?.bookingData?.status_previous,
                              '',
                            )}`}
                          >
                            {
                              BOOKING_PAYMENT_STATUS_LABEL_MAPPING[
                                state?.bookingData?.status_previous
                              ]
                            }
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={classes.infoWrapper}>
                        <Paid className={classes.infoIcon} />
                        <Box className={classes.infoBox}>
                          <Typography className={classes.infoBoxTitle}>
                            Metode Pembayaran
                          </Typography>
                          <Typography className={classes.infoBoxDesc}>
                            {state?.bookingData?.booking_payment_method_name}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={classes.infoWrapper}>
                        <CalendarToday className={classes.infoIcon} />
                        <Box className={classes.infoBox}>
                          <Typography className={classes.infoBoxTitle}>
                            Tanggal Pembayaran
                          </Typography>
                          <Typography className={classes.infoBoxDesc}>
                            {state?.bookingData?.tanggal_pembayaran}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={classes.infoWrapper}>
                        <CalendarToday className={classes.infoIcon} />
                        <Box className={classes.infoBox}>
                          <Typography className={classes.infoBoxTitle}>
                            Tanggal Dibatalkan Admin
                          </Typography>
                          <Typography className={classes.infoBoxDesc}>
                            {moment(state?.bookingData?.updated_at).format('DD MMM YYYY, hh:mm')}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )}
              </Box>
            </Box>
            {state?.userData?.type === ROLE_KEY.ADMIN &&
              (state?.bookingData?.status_bayar === BOOKING_PAYMENT_STATUS_KEY.PAID ||
                state?.bookingData?.status_bayar === BOOKING_PAYMENT_STATUS_KEY.WAITING) && (
                <Box className={classes.option}>
                  <Typography
                    className={classes.cancelButton}
                    onClick={() => handler?.handleOpenConfirmModal()}
                  >
                    Batalkan penyewaan
                  </Typography>
                </Box>
              )}
          </Box>
        </CustomModal.Content>
      </CustomModal>
      <KonfirmasiBatalkanPenyewaanModal
        open={state?.openConfirmModal}
        onClose={handler?.handleCloseConfirmModal}
        handleCancel={handler?.handleCancel}
      />
    </>
  )
}

export default DetailPenyewaanModal
