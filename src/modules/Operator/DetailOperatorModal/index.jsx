import { Circle } from '@mui/icons-material'
import { Box, Tooltip, Typography } from '@mui/material'
import { truncate } from 'lodash-es'

import {
  MenuOperator,
  FieldGenderIcon,
  FieldPhoneIcon,
  FieldEmailIcon,
  FieldAddressIcon,
  FieldKtpIcon,
  UserIcon,
} from '~/assets/svg'
import CustomModal from '~/components/CustomModal'

import useCustom from './hooks'
import useStyles from './style'

function DetailOperatorModal({
  alert,
  setAlert,
  setIsNeedRefetch,
  onClose,
  open,
  setOpenModal,
  userId,
  handleSuntingOperator,
}) {
  const { handler, state } = useCustom({
    alert,
    setAlert,
    setIsNeedRefetch,
    open,
    setOpenModal,
    userId,
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
          src={MenuOperator}
          alt='detail-operator-modal-header-icon'
        />
        <CustomModal.HeaderTitle size={36}>Detail Operator</CustomModal.HeaderTitle>
      </CustomModal.Header>
      <CustomModal.Content>
        <Box className={classes.addModal}>
          <Box className={classes.userPhoto}>
            {state?.operatorData?.thumbnail ? (
              <img
                className={classes.userPhotoUpload}
                src={state?.operatorData?.thumbnail}
                alt='detail-operator-user'
              />
            ) : (
              <img
                className={classes.userIconUpload}
                src={UserIcon}
                alt='detail-operator-user-icon'
              />
            )}
          </Box>
          <Box className={classes.userInfoWrapper}>
            <Box className={classes.userInfo}>
              <Box className={classes.userMainInfo}>
                <Box className={classes.userData}>
                  <Tooltip title={state?.operatorData?.name} placement='top'>
                    <Typography className={classes.name}>
                      {truncate(state?.operatorData?.name, {
                        length: 15,
                        omission: '...',
                      })}
                    </Typography>
                  </Tooltip>
                  {/* <Box className={classes.genderWrapper}>
                    {state?.operatorData?.gender === 'LK' ? (
                      <MaleRounded className={classes.maleIcon} />
                    ) : (
                      <FemaleRounded className={classes.femaleIcon} />
                    )}
                  </Box> */}
                </Box>
                <Typography
                  className={classes.username}
                >{`@${state?.operatorData?.username}-${state?.operatorData?.user_id}`}</Typography>
                <Typography
                  className={`${classes.operatorStatus} ${
                    state?.operatorData?.is_aktif === true ? classes.active : classes.unactive
                  }`}
                >
                  <span>
                    <Circle
                      className={
                        state?.operatorData?.is_aktif === true ? classes.active : classes.unactive
                      }
                    />
                    {state?.operatorData?.is_aktif === true ? 'Aktif' : 'Nonaktif'}
                  </span>
                </Typography>
              </Box>
              <Box className={classes.inputContainer}>
                <Box className={classes.input}>
                  <img src={FieldGenderIcon} alt='detail-user-gender-field-icon' />
                  <Typography className={classes.inputValue}>
                    {state?.operatorData?.gender === 'LK' ? 'Pria' : 'Wanita'}
                  </Typography>
                </Box>
                <Box className={classes.input}>
                  <img src={FieldPhoneIcon} alt='detail-user-phone-field-icon' />
                  <Typography className={classes.inputValue}>
                    {state?.operatorData?.no_hp}
                  </Typography>
                </Box>
                <Box className={classes.input}>
                  <img src={FieldEmailIcon} alt='detail-user-email-field-icon' />
                  <Typography className={classes.inputValue}>
                    {state?.operatorData?.email}
                  </Typography>
                </Box>
                <Box className={classes.input}>
                  <img src={FieldAddressIcon} alt='detail-user-address-field-icon' />
                  <Typography className={`${classes.alamatValue} ${classes.inputValue}`}>
                    {state?.operatorData?.alamat}
                  </Typography>
                </Box>
                <Box className={classes.input}>
                  <img src={FieldKtpIcon} alt='detail-user-ktp-field-icon' />
                  <Box className={classes.ktpBox}>
                    {state?.operatorData?.ktp && (
                      <img
                        className={classes.userPhotoUpload}
                        src={state?.operatorData?.ktp}
                        alt='detail-operator-user-ktp'
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.optionWrapper}>
              <Typography
                className={classes.updateLabel}
                onClick={() => handleSuntingOperator(state?.operatorData?.user_id)}
                variant='div'
              >
                Sunting
              </Typography>
              <Typography
                className={
                  state?.operatorData?.is_aktif !== true
                    ? classes.activeLabel
                    : classes.unactiveLabel
                }
                onClick={() =>
                  handler?.handleUpdateStatusOperator(
                    state?.operatorData?.user_id,
                    state?.operatorData?.is_aktif,
                  )
                }
                variant='div'
              >
                {state?.operatorData?.is_aktif !== true
                  ? 'Aktifkan Operator'
                  : 'Nonaktifkan Operator'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomModal.Content>
    </CustomModal>
  )
}

export default DetailOperatorModal
