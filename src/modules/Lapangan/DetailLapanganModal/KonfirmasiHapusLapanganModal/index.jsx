import { HelpOutline } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import Button from '~/components/Button'
import CustomModal from '~/components/CustomModal'

import useStyles from './style'

function KonfirmasiHapusLapanganModal({ lapanganName, handleDelete, onClose, open }) {
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
          Apakah anda yakin untuk menghapus {lapanganName}?
        </CustomModal.HeaderTitle>
      </CustomModal.Header>
      <CustomModal.Content>
        <Box className={classes.modal}>
          <Box className={classes.content}>
            <Typography className={classes.title}>
              Setelah menekan tombol Ya, lanjutkan, maka perubahan tidak dapat dibatalkan dikemudian
              waktu
            </Typography>
          </Box>
          <Box className={classes.option}>
            <Typography className={classes.cancelButton} onClick={() => onClose()}>
              Batalkan
            </Typography>
            <Button
              handleOnClick={() => handleDelete()}
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

export default KonfirmasiHapusLapanganModal
