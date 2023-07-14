import { HelpOutline } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import Button from '~/components/Button'
import CustomModal from '~/components/CustomModal'

import useStyles from './style'

function KonfirmasiBatalkanPenyewaanModal({ handleCancel, onClose, open }) {
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
          Apakah anda yakin untuk membatalkan transaksi ini?
        </CustomModal.HeaderTitle>
      </CustomModal.Header>
      <CustomModal.Content>
        <Box className={classes.modal}>
          <Box className={classes.content}>
            <Typography className={classes.title}>
              Setelah menekan tombol Ya, lanjutkan, maka akan langsung mengubah penyewaan lapangan
              dengan status Dibatalkan Admin dan perubahan tidak dapat dibatalkan dikemudian waktu
            </Typography>
          </Box>
          <Box className={classes.option}>
            <Typography className={classes.cancelButton} onClick={() => onClose()}>
              Batalkan
            </Typography>
            <Button
              handleOnClick={() => handleCancel()}
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

export default KonfirmasiBatalkanPenyewaanModal
