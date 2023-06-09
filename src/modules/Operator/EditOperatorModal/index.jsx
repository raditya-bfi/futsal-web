import { FemaleRounded, MaleRounded } from '@mui/icons-material'
import { Box } from '@mui/material'
import { Formik, Form, Field } from 'formik'

import {
  MenuOperator,
  FieldPhoneIcon,
  FieldEmailIcon,
  FieldAddressIcon,
  FieldKtpIcon,
} from '~/assets/svg'
import Button from '~/components/Button'
import CustomField from '~/components/CustomField'
import CustomModal from '~/components/CustomModal'
import OperatorKTP from '~/components/OperatorKTP'
import OperatorPhoto from '~/components/OperatorPhoto'

import useCustom from './hooks'
import { EditOperatorSchema } from './schema'
import useStyles from './style'

function EditOperatorModal({
  alert,
  setAlert,
  editPhotoMode,
  setEditPhotoMode,
  editKtpMode,
  setEditKtpMode,
  setIsNeedRefetch,
  onClose,
  open,
  setOpenModal,
  userId,
}) {
  const { handler, ref, state } = useCustom({
    alert,
    setAlert,
    editPhotoMode,
    setEditPhotoMode,
    editKtpMode,
    setEditKtpMode,
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
          alt='edit-operator-modal-header-icon'
        />
        <CustomModal.HeaderTitle size={36}>Sunting Operator</CustomModal.HeaderTitle>
      </CustomModal.Header>
      <CustomModal.Content>
        <Formik
          innerRef={ref?.formikRef}
          initialValues={state?.initialValue}
          validationSchema={EditOperatorSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const validation = handler?.validateUpload()
            if (validation === true) {
              setSubmitting(true)
              handler.handleEdit(values)
              setTimeout(() => {
                resetForm()
                setSubmitting(false)
              }, 1000)
            } else {
              setSubmitting(false)
            }
          }}
          validateOnChange
          validateOnBlur={false}
          enableReinitialize
        >
          {({ errors, handleSubmit, isSubmitting, touched, values }) => (
            <Form>
              <Box className={classes.addModal}>
                <Box className={classes.userPhoto}>
                  <OperatorPhoto
                    setFiles={handler?.setPhotoFiles}
                    files={state?.photoFiles}
                    editMode={editPhotoMode}
                    setEditMode={setEditPhotoMode}
                  />
                </Box>
                <Box className={classes.userInfoWrapper}>
                  <Box className={classes.userInfo}>
                    <Field
                      className={classes.textInput}
                      isFullWidth
                      name='name'
                      placeholder='Masukkan Nama'
                      type='text'
                      variant='filled'
                      value={values?.name}
                      required
                      error={errors?.name}
                      touch={touched?.name}
                      as={CustomField}
                    />
                    <Box className={classes.genderWrapper}>
                      <div
                        role='presentation'
                        onClick={() => {
                          handler?.handleChangeGender('LK')
                        }}
                      >
                        <MaleRounded
                          className={`${state?.selectedGender !== 'LK' && classes.unactiveIcon} ${
                            classes.maleIcon
                          }`}
                        />
                      </div>
                      <div
                        role='presentation'
                        onClick={() => {
                          handler?.handleChangeGender('PR')
                        }}
                      >
                        <FemaleRounded
                          className={`${state?.selectedGender !== 'PR' && classes.unactiveIcon} ${
                            classes.femaleIcon
                          }`}
                        />
                      </div>
                    </Box>
                    <Box className={classes.inputContainer}>
                      <Box className={classes.input}>
                        <img src={FieldPhoneIcon} alt='edit-user-phone-field-icon' />
                        <Field
                          className={classes.textInput}
                          isFullWidth
                          name='phone'
                          placeholder='Masukkan No. HP'
                          type='text'
                          variant='filled'
                          value={values?.phone}
                          required
                          error={errors?.phone}
                          touch={touched?.phone}
                          as={CustomField}
                        />
                      </Box>
                      <Box className={classes.input}>
                        <img src={FieldEmailIcon} alt='edit-user-email-field-icon' />
                        <Field
                          className={classes.textInput}
                          isFullWidth
                          name='email'
                          placeholder='Masukkan Email'
                          type='text'
                          variant='filled'
                          value={values?.email}
                          required
                          error={errors?.email}
                          touch={touched?.email}
                          as={CustomField}
                        />
                      </Box>
                      <Box className={classes.input}>
                        <img src={FieldAddressIcon} alt='edit-user-address-field-icon' />
                        <Field
                          className={classes.textInput}
                          isFullWidth
                          name='address'
                          placeholder='Masukkan Alamat'
                          type='text'
                          variant='filled'
                          value={values?.address}
                          required
                          error={errors?.address}
                          touch={touched?.address}
                          as={CustomField}
                        />
                      </Box>
                      <Box className={classes.input}>
                        <img src={FieldKtpIcon} alt='edit-user-ktp-field-icon' />
                        <Box className={classes.ktpBox}>
                          <OperatorKTP
                            files={state?.ktpFiles}
                            setFiles={handler?.setKtpFiles}
                            editMode={editKtpMode}
                            setEditMode={setEditKtpMode}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={classes.submitWrapper}>
                    <Button
                      disabled={isSubmitting}
                      handleOnClick={handleSubmit}
                      loading={isSubmitting}
                      label='Sunting Operator'
                      type='button'
                      variant='secondary'
                    />
                  </Box>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </CustomModal.Content>
    </CustomModal>
  )
}

export default EditOperatorModal
