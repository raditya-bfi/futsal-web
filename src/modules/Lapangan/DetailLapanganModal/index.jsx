import {
  CalendarMonth,
  DarkModeOutlined,
  HelpOutline,
  LightModeOutlined,
  Schedule,
} from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { truncate } from 'lodash-es'

import { MenuLapangan } from '~/assets/svg'
import Button from '~/components/Button'
import CustomModal from '~/components/CustomModal'
import VerticalPhotoSlider from '~/components/VerticalPhotoSlider'
import { thousandSeparator } from '~/utils/number'

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
  const { state } = useCustom({
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
            <Box className={classes.fieldMainInfo}>
              <Box className={classes.fieldPhoto}>
                <VerticalPhotoSlider photos={state?.fieldData?.galleries} />
              </Box>
              <Box className={classes.fieldMain}>
                <Box className={classes.fieldMainDesc}>
                  <LightModeOutlined />
                  <Box className={classes.descBox}>
                    <Typography className={classes.descTitle}>Harga Sewa</Typography>
                    <Typography className={classes.descLabel}>
                      <span className={classes.descTitle} />
                      {`Rp ${thousandSeparator(state?.fieldData?.harga, 0, false)} / Jam`}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.fieldMainDesc}>
                  <DarkModeOutlined />
                  <Box className={classes.descBox}>
                    <Typography className={classes.descTitle}>Harga Sewa Khusus Malam</Typography>
                    <Box className={classes.descLabelWrapper}>
                      <Typography className={classes.descLabel}>
                        <span className={classes.descTitle} />
                        {`Rp ${thousandSeparator(state?.fieldData?.harga_malam, 0, false)} / Jam`}
                      </Typography>
                      <Typography
                        className={classes.descLabelInfo}
                      >{`mulai pukul ${state?.fieldData?.waktu_mulai_malam}`}</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.fieldMainDesc}>
                  <CalendarMonth />
                  <Box className={classes.descBox}>
                    <Typography className={classes.descTitle}>
                      Menerima pesanan sewa hari
                    </Typography>
                    <Typography className={classes.descLabel}>
                      <span className={classes.descTitle} />
                      {state?.fieldData?.days_active &&
                        state?.fieldData?.days_active.length > 0 &&
                        state?.fieldData?.days_active.map((day) => day.day_name).join(', ')}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.fieldMainDesc}>
                  <Schedule />
                  <Box className={classes.descBox}>
                    <Typography className={classes.descTitle}>
                      Menerima pesanan sewa pukul
                    </Typography>
                    <Typography className={classes.descLabel}>
                      <span className={classes.descTitle} />
                      {`${state?.fieldData?.booking_open} hingga ${state?.fieldData?.booking_close}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.fieldDescription}>
              <HelpOutline />
              <Box className={classes.descBox}>
                <Typography className={classes.descTitle}>Deskripsi Lapangan</Typography>
                <Typography className={classes.descLabel}>
                  <span className={classes.descTitle} />
                  {state?.fieldData?.description}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.option}>
            <Button
              handleOnClick={() => handleSuntingLapangan()}
              label='Sunting Lapangan'
              type='button'
              variant='secondary'
            />
          </Box>
        </Box>
      </CustomModal.Content>
    </CustomModal>
  )
}

export default DetailLapanganModal
