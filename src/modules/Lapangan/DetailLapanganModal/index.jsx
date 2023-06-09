import { Box } from '@mui/material'
import { truncate } from 'lodash-es'

import { MenuLapangan } from '~/assets/svg'
import CustomModal from '~/components/CustomModal'

import useCustom from './hooks'
import useStyles from './style'

function DetailLapanganModal({
  alert,
  setAlert,
  setIsNeedRefetch,
  onClose,
  open,
  setOpenModal,
  fieldId,
  handleSuntingLapangan,
}) {
  const { handler, state } = useCustom({
    alert,
    setAlert,
    setIsNeedRefetch,
    open,
    setOpenModal,
    fieldId,
  })
  const classes = useStyles()

  return (
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
          src={MenuLapangan}
          alt='detail-lapangan-modal-header-icon'
        />
        <CustomModal.HeaderTitle size={36}>
          {truncate(state?.fieldData?.name, {
            length: 20,
            omission: '...',
          })}
        </CustomModal.HeaderTitle>
      </CustomModal.Header>
      <CustomModal.Content>
        <Box className={classes.modal}>
          <Box className={classes.fieldInfo}>
            <Box className={classes.fieldPhoto} />
          </Box>
        </Box>
      </CustomModal.Content>
    </CustomModal>
  )
}

export default DetailLapanganModal
