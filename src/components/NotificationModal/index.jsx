import { HelpOutline } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import Button from '~/components/Button'
import CustomModal from '~/components/CustomModal'

import useStyles from './style'

function NotificationModal({ notificationMessage, onClose, open }) {
  const classes = useStyles()

  return (
    <CustomModal
      onClose={onClose}
      open={open}
      modalPadding='42px 65px'
      modalBorderRadius='20px'
      width='722px'
    >
      <CustomModal.Header onClose={onClose} closeButton={false}>
        <HelpOutline className={classes.modalHeaderIcon} />
        <CustomModal.HeaderTitle size={36}>Peringatan</CustomModal.HeaderTitle>
      </CustomModal.Header>
      <CustomModal.Content>
        <Box className={classes.modal}>
          <Box className={classes.content}>
            <Typography className={classes.title}>{notificationMessage}</Typography>
          </Box>
          <Box className={classes.option}>
            <Button
              isFullWidth
              handleOnClick={() => onClose()}
              label='Ok'
              type='button'
              variant='secondary'
            />
          </Box>
        </Box>
      </CustomModal.Content>
    </CustomModal>
  )
}

export default NotificationModal
