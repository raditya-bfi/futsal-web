import { AddRounded, FemaleRounded, MaleRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik'

import {
  UserIcon,
  MenuOperator,
  FieldPhoneIcon,
  FieldEmailIcon,
  FieldAddressIcon,
  FieldPasswordIcon,
} from '~/assets/svg'
import Button from '~/components/Button'
import CustomField from '~/components/CustomField'
import CustomModal from '~/components/CustomModal'

import useCustom from './hooks'
import { AddOperatorSchema } from './schema'
import useStyles from './style'

function AddOperatorModal({ onClose, open }) {
  const { handler, ref, state } = useCustom()
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
          alt='add-operator-modal-header-icon'
        />
        <CustomModal.HeaderTitle size={36}>Tambah Operator</CustomModal.HeaderTitle>
      </CustomModal.Header>
      <CustomModal.Content>
        <Formik
          innerRef={ref?.formikRef}
          initialValues={state?.initialValue}
          validationSchema={AddOperatorSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            handler.handleAdd(values)
            setTimeout(() => {
              resetForm()
              setSubmitting(false)
            }, 1000)
          }}
          validateOnChange
          validateOnBlur={false}
          enableReinitialize
        >
          {({ errors, handleSubmit, isSubmitting, touched, values }) => (
            <Form>
              <Box className={classes.addModal}>
                <Box className={classes.userPhoto}>
                  <Box className={classes.userPhotoUpload}>
                    <div>
                      <img
                        className={classes.userIconUpload}
                        src={UserIcon}
                        alt='add-operator-user-icon'
                      />
                    </div>
                    <Typography className={classes.uploadLabel}>
                      Klik untuk menambah gambar
                    </Typography>
                  </Box>
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
                        <img src={FieldPhoneIcon} alt='add-user-phone-field-icon' />
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
                        <img src={FieldEmailIcon} alt='add-user-email-field-icon' />
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
                        <img src={FieldAddressIcon} alt='add-user-address-field-icon' />
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
                        <img src={FieldPasswordIcon} alt='add-user-password-field-icon' />
                        <Field
                          className={classes.textInput}
                          isFullWidth
                          name='password'
                          placeholder='Masukkan Password'
                          type='password'
                          variant='filled'
                          value={values?.password}
                          required
                          error={errors?.password}
                          touch={touched?.password}
                          as={CustomField}
                        />
                      </Box>
                      <Box className={classes.input}>
                        <img src={FieldPasswordIcon} alt='add-user-password-field-icon' />
                        <Box className={classes.ktpBox}>
                          <div>
                            <AddRounded />
                          </div>
                          <Typography className={classes.uploadKtpLabel}>
                            Masukkan Foto KTP
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={classes.submitWrapper}>
                    <Button
                      disabled={isSubmitting}
                      handleOnClick={handleSubmit}
                      loading={isSubmitting}
                      label='Tambah Operator'
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

export default AddOperatorModal
