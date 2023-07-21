import { CloseOutlined, NavigateBeforeRounded, InfoOutlined } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { Field, Formik, Form } from 'formik'
import { Helmet } from 'react-helmet-async'

import Button from '~/components/Button'
import CustomField from '~/components/CustomField'
import CustomSelect from '~/components/CustomSelect'
import LapanganFieldPhoto from '~/components/LapanganFieldPhoto'
import NotificationModal from '~/components/NotificationModal'
import Snackbar from '~/components/Snackbar'
import { DAYS_ACTIVE_OPTIONS } from '~/constants/general'

import useCustom from './hooks'
import { EditFieldSchema, EditFieldSchemaOption } from './schema'
import useStyles from './style'

function SuntingLapanganPage() {
  const { data, handler, refs, state } = useCustom()
  const classes = useStyles()

  return (
    <>
      <Helmet title='Sunting Lapangan'>
        <meta name='description' content='Sunting Lapangan | Futsal Gembira' />
      </Helmet>
      <Snackbar
        handleClose={handler.handleCloseSnackbar}
        message={state?.alert?.message}
        open={state?.alert?.open}
        severity={state?.alert?.severity}
      />
      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Box className={classes.titleWrapper}>
            <IconButton className={classes.backIcon} onClick={() => handler?.handleBackButton()}>
              <NavigateBeforeRounded />
            </IconButton>
            <Typography className={classes.title}>Sunting Lapangan</Typography>
          </Box>
        </Box>
        <Formik
          innerRef={refs?.formikRef}
          initialValues={state?.initialValue}
          validationSchema={state?.isFlagActive ? EditFieldSchemaOption : EditFieldSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            handler.handleEdit(values)
            setTimeout(() => {
              resetForm()
              setSubmitting(false)
            }, 1000)
          }}
          validateOnChange
          validateOnBlur={false}
          enableReinitialize
        >
          {({ errors, handleSubmit, isSubmitting, setFieldValue, touched, values }) => (
            <Form>
              <Box className={classes.pageContent}>
                <Box className={classes.content}>
                  <Box className={classes.fieldContent}>
                    <Box className={classes.fieldInfo}>
                      <Box className={classes.infoWrapper}>
                        <Typography className={classes.infoTitle}>Deskripsi</Typography>
                        <Box className={classes.descInput}>
                          <Box className={classes.descWrapper}>
                            <Typography className={classes.inpuTitle}>Judul Lapangan</Typography>
                            <Field
                              className={classes.textInput}
                              isFullWidth
                              name='name'
                              placeholder='Masukkan Judul Lapangan'
                              type='text'
                              value={values?.name}
                              required
                              error={errors?.name}
                              touch={touched?.name}
                              as={CustomField}
                            />
                          </Box>
                          <Box className={classes.descWrapper}>
                            <Typography className={classes.inpuTitle}>
                              Deskripsi Lapangan
                            </Typography>
                            <Field
                              className={classes.textInput}
                              isFullWidth
                              isMultiline
                              name='description'
                              placeholder='Masukkan Deskripsi Lapangan'
                              type='text'
                              value={values?.description}
                              required
                              error={errors?.description}
                              touch={touched?.description}
                              as={CustomField}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box className={classes.infoWrapper}>
                        <Typography className={classes.infoTitle}>Ketersediaan</Typography>
                        <Box className={classes.descInput}>
                          <Box className={classes.ketersediaanWrapper}>
                            <Box className={classes.ketersediaanContainer}>
                              <Box>
                                <Typography className={classes.inpuTitle}>
                                  Waktu Buka Sewa
                                </Typography>
                                <Field
                                  className={classes.numberInput}
                                  name='booking_open'
                                  type='text'
                                  value={values?.booking_open}
                                  required
                                  error={errors?.booking_open}
                                  touch={touched?.booking_open}
                                  as={CustomField}
                                />
                              </Box>
                              <Box>
                                <Typography className={classes.inpuTitle}>
                                  Waktu Tutup Sewa
                                </Typography>
                                <Field
                                  className={classes.numberInput}
                                  name='booking_close'
                                  type='text'
                                  value={values?.booking_close}
                                  required
                                  error={errors?.booking_close}
                                  touch={touched?.booking_close}
                                  as={CustomField}
                                />
                              </Box>
                              <Box sx={{ width: '400px' }}>
                                <Typography className={classes.inpuTitle}>
                                  Hari Buka Sewa
                                </Typography>
                                <Field
                                  className={classes.select}
                                  isFormControlFullWidth
                                  isFullWidth
                                  handleChange={(e) => {
                                    const selectedData = handler?.handleMultipleDays(e)
                                    setFieldValue('daysActive', selectedData)
                                  }}
                                  options={DAYS_ACTIVE_OPTIONS}
                                  multiple
                                  name='daysActive'
                                  label='Hari Buka Sewa'
                                  value={state.selectedMultipleDays || []}
                                  required
                                  error={errors?.daysActive}
                                  helperText={errors?.daysActive}
                                  touch={touched?.daysActive}
                                  as={CustomSelect}
                                />
                              </Box>
                            </Box>
                            <Box className={classes.contentInfo}>
                              <Typography className={classes.infoLabel}>
                                <InfoOutlined />
                                Format Waktu 24 jam
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className={classes.infoWrapper}>
                        <Typography className={classes.infoTitle}>Harga</Typography>
                        <Box className={classes.descInput}>
                          <Box className={classes.descWrapper}>
                            <Box className={classes.hargaWrapper}>
                              <Typography className={classes.inpuTitle}>
                                Harga Sewa Lapangan
                              </Typography>
                              <Box className={classes.hargaInput}>
                                <Typography className={classes.inpuTitle}>Rp</Typography>
                                <Field
                                  className={classes.numberInput}
                                  name='harga'
                                  type='text'
                                  value={values?.harga}
                                  required
                                  error={errors?.harga}
                                  touch={touched?.harga}
                                  as={CustomField}
                                />
                                <Typography className={classes.inpuTitle}> / Jam</Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Box className={classes.descWrapper}>
                            <Box className={classes.hargaContainer}>
                              <Box className={classes.hargaWrapper}>
                                <Typography className={classes.inpuTitle}>
                                  Harga Sewa Khusus Malam
                                </Typography>
                                <Box className={classes.hargaInput}>
                                  <Typography className={classes.inpuTitle}>Rp</Typography>
                                  <Field
                                    className={classes.numberInput}
                                    disabled={state?.isFlagActive}
                                    name='harga_malam'
                                    type='text'
                                    value={values?.harga_malam}
                                    required
                                    error={errors?.harga_malam}
                                    touch={touched?.harga_malam}
                                    as={CustomField}
                                  />
                                  <Typography className={classes.inpuTitle}> / Jam</Typography>
                                </Box>
                              </Box>
                              <Box className={classes.hargaWrapper}>
                                <Typography className={classes.inpuTitle}>
                                  Waktu Mulai Sewa Malam
                                </Typography>
                                <Box className={classes.hargaInput}>
                                  <Field
                                    className={classes.numberInput}
                                    disabled={state?.isFlagActive}
                                    name='waktu_mulai_malam'
                                    type='text'
                                    value={values?.waktu_mulai_malam}
                                    required
                                    error={errors?.waktu_mulai_malam}
                                    touch={touched?.waktu_mulai_malam}
                                    as={CustomField}
                                  />
                                </Box>
                              </Box>
                            </Box>
                            {/* <Box sx={{ marginTop: '27px' }}>
                              <CustomCheckBox
                                name='flag'
                                type='checkbox'
                                checked={state?.isFlagActive}
                                onChange={handler?.handleCheckBox}
                                label='Tidak menentukan Harga Sewa Malam Lapangan'
                              />
                            </Box> */}
                            <Box sx={{ marginTop: '27px' }}>
                              <Typography className={classes.infoLabel}>
                                <InfoOutlined />
                                Format Waktu 24 jam
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={classes.fieldSlider}>
                      <Typography className={classes.infoTitle}>Gambar Lapangan</Typography>
                      <Box className={classes.fieldSliderContainer}>
                        <Box>
                          <Typography className={classes.infoLabel}>
                            <InfoOutlined />
                            Gambar dengan urutan paling atas menjadi gambar utama
                          </Typography>
                        </Box>
                        <Box className={classes.fieldSliderWrapper}>
                          {data?.fieldPhotos &&
                            data?.fieldPhotos.length > 0 &&
                            data?.fieldPhotos.map((photo) => {
                              if (photo?.image !== null) {
                                return (
                                  <Box
                                    className={classes.fieldSlidePhoto}
                                    key={`field-photo-preview-${photo?.id}`}
                                    sx={{ backgroundImage: `url(${photo?.image})` }}
                                  >
                                    <Box className={classes.closeWrapper}>
                                      <IconButton
                                        onClick={() => {
                                          handler?.handleRemovePhoto(photo?.gallery_id)
                                        }}
                                      >
                                        <CloseOutlined />
                                      </IconButton>
                                    </Box>
                                  </Box>
                                )
                              }
                              return (
                                <LapanganFieldPhoto
                                  key={`field-photo-preview-${photo?.id}`}
                                  photoId={photo?.id}
                                  handleUpload={handler.handleAddPhoto}
                                  setAlert={handler.setNotificationModal}
                                />
                              )
                            })}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={classes.option}>
                    <Typography
                      className={classes.cancelButton}
                      onClick={() => handler?.handleBackButton()}
                    >
                      Batalkan
                    </Typography>
                    <Button
                      disabled={isSubmitting}
                      handleOnClick={handleSubmit}
                      loading={isSubmitting}
                      label='Sunting Lapangan'
                      type='button'
                      variant='secondary'
                    />
                  </Box>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      <NotificationModal
        open={state?.notificationModal?.open}
        onClose={handler?.handleCloseNotificationModal}
        notificationMessage={state?.notificationModal?.message}
      />
    </>
  )
}

export default SuntingLapanganPage
