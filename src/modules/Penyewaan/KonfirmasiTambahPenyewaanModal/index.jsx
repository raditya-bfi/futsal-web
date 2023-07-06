import {
  AccessTime,
  CalculateOutlined,
  CalendarToday,
  HelpOutline,
  Paid,
} from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import { MenuLapangan } from '~/assets/svg'
import Button from '~/components/Button'
import CustomModal from '~/components/CustomModal'
import { thousandSeparator } from '~/utils/number'

import useStyles from './style'

function KonfirmasiTambahPenyewaanModal({ handleAdd, onClose, open, summaryBookingData }) {
  const classes = useStyles()

  return (
    <CustomModal
      onClose={onClose}
      open={open}
      modalPadding='42px 65px'
      modalBorderRadius='10px'
      width='1041px'
    >
      <CustomModal.Header onClose={onClose} closeButton={false}>
        <HelpOutline className={classes.modalHeaderIcon} />
        <CustomModal.HeaderTitle size={36}>
          Apakah anda yakin bahwa informasi penyewaan telah sesuai?
        </CustomModal.HeaderTitle>
      </CustomModal.Header>
      <CustomModal.Content>
        <Box className={classes.modal}>
          <Box className={classes.content}>
            <Box className={classes.schedule}>
              <Typography className={classes.title}>Jadwal dan Tempat Sewa</Typography>
              <Box className={classes.wrapper}>
                <Box className={classes.infoWrapper}>
                  <img
                    className={classes.infoIcon}
                    src={MenuLapangan}
                    alt='konfirmasi-tambah-penyewaan-field-icon'
                  />
                  <Box className={classes.infoBox}>
                    <Typography className={classes.infoBoxTitle}>Nama Lapangan</Typography>
                    <Typography className={classes.infoBoxDesc}>
                      {summaryBookingData?.fieldName}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.infoWrapper}>
                  <CalendarToday className={classes.infoIcon} />
                  <Box className={classes.infoBox}>
                    <Typography className={classes.infoBoxTitle}>Tanggal dan Waktu Sewa</Typography>
                    <Typography className={classes.infoBoxDesc}>
                      {`${summaryBookingData?.date}, ${summaryBookingData?.bookingTime}`}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.infoWrapper}>
                  <AccessTime className={classes.infoIcon} />
                  <Box className={classes.infoBox}>
                    <Typography className={classes.infoBoxTitle}>Durasi Sewa</Typography>
                    <Typography className={classes.infoBoxDesc}>
                      {`${summaryBookingData?.duration} Jam`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.status}>
              <Typography className={classes.title}>Status</Typography>
              <Box className={classes.wrapper}>
                <Box className={classes.infoWrapper}>
                  <Paid className={classes.infoIcon} />
                  <Box className={classes.infoBox}>
                    <Typography className={classes.infoBoxTitle}>Metode Pembayaran</Typography>
                    <Typography className={classes.infoBoxDesc}>Uang Tunai / Cash</Typography>
                  </Box>
                </Box>
                <Box className={classes.infoWrapper}>
                  <CalculateOutlined className={classes.infoIcon} />
                  <Box className={classes.infoBox}>
                    <Typography className={classes.infoBoxTitle}>Total Biaya</Typography>
                    <Typography className={classes.infoBoxDesc}>
                      {`Rp ${thousandSeparator(summaryBookingData?.totalPrice, 0, false)}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.descWrapper}>
            <Typography className={classes.desc}>
              Setelah menekan tombol Ya, lanjutkan, maka akan langsung meyimpan penyewaan lapangan
              dengan status <span className={classes.infoPaid}>Sudah Dibayar </span>
            </Typography>
          </Box>
          <Box className={classes.option}>
            <Typography className={classes.cancelButton} onClick={() => onClose()}>
              Batalkan
            </Typography>
            <Button
              handleOnClick={() => handleAdd()}
              label='Ya, lanjutkan'
              type='button'
              variant='secondary'
            />
          </Box>
        </Box>
      </CustomModal.Content>
    </CustomModal>
  )
}

export default KonfirmasiTambahPenyewaanModal
