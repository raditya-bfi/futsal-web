import {
  CalendarMonth,
  DarkModeOutlined,
  InfoOutlined,
  HighlightOffOutlined,
  LightModeOutlined,
  Schedule,
  NavigateBeforeRounded,
  HelpOutline,
  TimerOutlined,
  WarningAmberRounded,
} from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { get } from 'lodash-es'
import moment from 'moment'
import { Helmet } from 'react-helmet-async'

import { ArrowTimeSeparator } from '~/assets/svg'
import Button from '~/components/Button'
import CustomSelect from '~/components/CustomSelect'
import DatePicker from '~/components/DatePicker'
import NotificationModal from '~/components/NotificationModal'
import Snackbar from '~/components/Snackbar'
import VerticalPhotoSlider from '~/components/VerticalPhotoSlider'
import date from '~/config/date'
import KonfirmasiTambahPenyewaanModal from '~/modules/Penyewaan/KonfirmasiTambahPenyewaanModal'
import { thousandSeparator } from '~/utils/number'
import { removeSeconds } from '~/utils/string'

import { DURATION_OPTIONS, PAYMENT_OPTIONS } from './helper'
import useCustom from './hooks'
import useStyles from './style'

function TambahPenyewaanPage() {
  const { data, handler, state } = useCustom()
  const classes = useStyles()

  return (
    <>
      <Helmet title='Tambah Penyewaan'>
        <meta name='description' content='Tambah Penyewaan | Futsal Gembira' />
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
            <Typography className={classes.title}>Tambah Penyewaan</Typography>
          </Box>
        </Box>
        <Box className={classes.pageContent}>
          <Box className={classes.content}>
            <Box className={classes.bookingContent}>
              <Box className={classes.bookingBox}>
                <Box className={classes.scheduleBox}>
                  <Typography className={classes.fieldTitle} mb='14px'>
                    Jadwal Sewa
                  </Typography>
                  <Box className={classes.scheduleInfo}>
                    <Box className={classes.scheduleContent}>
                      <Box className={classes.scheduleWrapper} sx={{ width: '180px' }}>
                        <Typography className={classes.scheduleLabel}>Tanggal Sewa</Typography>
                        <DatePicker
                          minDate={moment().format(date.daily.format)}
                          maxDate={moment().add(1, 'months').format(date.daily.format)}
                          handleDateChange={(value) => {
                            handler?.setSelectedDate(value.format('YYYY-MM-DD'))
                            handler?.setSelectedStartTime(null)
                          }}
                          selectedDate={state.selectedDate}
                          activeDays={data?.fieldActiveDays}
                          width='100%'
                        />
                      </Box>
                      <Box className={classes.scheduleWrapper} sx={{ width: '180px' }}>
                        <Typography className={classes.scheduleLabel}>Waktu Mulai Sewa</Typography>
                        <CustomSelect
                          isFullWidth
                          handleChange={handler.handleChangeStartTime}
                          options={data?.startTimeOptions}
                          value={state?.selectedStartTime}
                        />
                      </Box>
                      <Box className={classes.scheduleWrapper} sx={{ width: '180px' }}>
                        <Typography className={classes.scheduleLabel}>Durasi Sewa</Typography>
                        <CustomSelect
                          isFullWidth
                          handleChange={handler.handleChangeDuration}
                          options={DURATION_OPTIONS}
                          value={state?.selectedDuration}
                        />
                      </Box>
                    </Box>
                    {/* <Box className={classes.scheduleContent}>
                      <Box className={classes.scheduleWrapper} sx={{ width: '180px' }}>
                        <Typography className={classes.scheduleLabel}>Durasi Sewa</Typography>
                        <CustomSelect
                          isFullWidth
                          handleChange={handler.handleChangeDuration}
                          options={DURATION_OPTIONS}
                          value={state?.selectedDuration}
                        />
                      </Box>
                      <Box className={classes.scheduleWrapper} sx={{ width: '370px' }}>
                        <Box className={classes.scheduleTable}>
                          <Box className={classes.scheduleHeader}>
                            <Typography className={classes.scheduleHeaderLabel}>Waktu</Typography>
                            <Typography className={classes.scheduleHeaderLabel}>
                              Ketersediaan
                            </Typography>
                          </Box>
                          <Box className={classes.scheduleTableBody}>
                            {data?.fieldScheduleTable?.table &&
                              data?.fieldScheduleTable?.table.length > 0 &&
                              data?.fieldScheduleTable?.table.map((schedule) => (
                                <Box
                                  className={classes.scheduleRow}
                                  key={`field-schedule-row-${schedule?.schedule}`}
                                >
                                  <Typography
                                    className={`${classes.scheduleRowLabel} ${get(
                                      classes,
                                      schedule?.type,
                                      '',
                                    )}`}
                                  >
                                    {schedule?.schedule}
                                  </Typography>
                                  <Typography
                                    className={`${classes.scheduleRowLabel} ${get(
                                      classes,
                                      schedule?.type,
                                      '',
                                    )}`}
                                  >
                                    {schedule?.status}
                                  </Typography>
                                </Box>
                              ))}
                          </Box>
                        </Box>
                      </Box>
                    </Box> */}
                    <Box className={classes.scheduleContent}>
                      <Box className={classes.scheduleWrapper} sx={{ width: '100%' }}>
                        <Typography className={classes.scheduleInfoLabel}>
                          <InfoOutlined />
                          Maksimal durasi penyewaan hanya 2 jam
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.scheduleContent}>
                      <Box className={classes.scheduleWrapper} sx={{ width: '100%' }}>
                        <Box className={classes.scheduleTimeBox}>
                          <Box className={classes.rentTime}>
                            <Typography className={classes.rentTimeTitle}>
                              Waktu Mulai Sewa
                            </Typography>
                            <Box className={classes.rentTimeBox}>
                              <TimerOutlined className={classes.rentTimeStart} />
                              <Typography
                                className={classes.rentTimeLabel}
                                sx={{
                                  justifyContent:
                                    (data?.fieldScheduleTable.endTime || '-') !== '-'
                                      ? 'flex-start'
                                      : 'center',
                                }}
                              >
                                {data?.fieldScheduleTable.startTime || '-'}
                              </Typography>
                            </Box>
                          </Box>
                          <Box className={classes.rentTime}>
                            <img
                              className={classes.arrowSeparator}
                              src={ArrowTimeSeparator}
                              alt='arrow-time-separator'
                            />
                          </Box>
                          <Box className={classes.rentTime}>
                            <Typography className={classes.rentTimeTitle}>
                              Waktu Berhenti Sewa
                            </Typography>
                            <Box className={classes.rentTimeBox}>
                              <HighlightOffOutlined className={classes.rentTimeStop} />
                              <Typography
                                className={classes.rentTimeLabel}
                                sx={{
                                  justifyContent:
                                    (data?.fieldScheduleTable.endTime || '-') !== '-'
                                      ? 'flex-start'
                                      : 'center',
                                }}
                              >
                                {data?.fieldScheduleTable.endTime || '-'}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.invoiceBox}>
                  <Typography className={classes.fieldTitle} mb='14px'>
                    Biaya Sewa
                  </Typography>
                  <Box className={classes.invoiceInfo}>
                    <Box className={classes.invoiceWrapper} sx={{ width: '180px' }}>
                      <Typography className={classes.invoiceLabel}>Metode Pembayaran</Typography>
                      <CustomSelect
                        isFullWidth
                        handleChange={handler.handleChangePayment}
                        options={PAYMENT_OPTIONS}
                        value={state?.selectedPayment}
                      />
                    </Box>
                    <Box className={classes.invoiceContent}>
                      <Box className={classes.invoiceRow}>
                        <Typography className={classes.invoiceHeader} variant='div'>
                          Deskripsi Barang
                        </Typography>
                        <Typography className={classes.invoiceHeader} variant='div'>
                          Harga Satuan
                        </Typography>
                        <Typography className={classes.invoiceHeader} variant='div'>
                          Nilai
                        </Typography>
                      </Box>
                      <Box className={classes.invoiceDetailWrapper}>
                        {data?.invoiceData?.day_price_quantity &&
                        data?.invoiceData?.day_price_quantity > 0 ? (
                          <Box className={classes.invoiceRow}>
                            <Typography className={classes.invoiceDetail} variant='div'>
                              Sewa per Jam
                            </Typography>
                            <Typography className={classes.invoiceDetail} variant='div'>
                              {`Rp ${thousandSeparator(
                                get(data?.invoiceData, 'day_price', 0) || 0,
                                0,
                                false,
                              )} x ${get(data?.invoiceData, 'day_price_quantity', 0) || 0}`}
                            </Typography>
                            <Typography className={classes.invoiceDetail} variant='div'>
                              {`Rp ${thousandSeparator(
                                (get(data?.invoiceData, 'day_price', 0) || 0) *
                                  (get(data?.invoiceData, 'day_price_quantity', 0) || 0),
                                0,
                                false,
                              )}`}
                            </Typography>
                          </Box>
                        ) : (
                          <> </>
                        )}
                        {data?.invoiceData?.night_price_quantity &&
                        data?.invoiceData?.night_price_quantity > 0 ? (
                          <Box className={classes.invoiceRow}>
                            <Typography className={classes.invoiceDetail} variant='div'>
                              Sewa Khusus Malam per Jam
                            </Typography>
                            <Typography className={classes.invoiceDetail} variant='div'>
                              {`Rp ${thousandSeparator(
                                get(data?.invoiceData, 'night_price', 0) || 0,
                                0,
                                false,
                              )} x ${get(data?.invoiceData, 'night_price_quantity', 0) || 0}`}
                            </Typography>
                            <Typography className={classes.invoiceDetail} variant='div'>
                              {`Rp ${thousandSeparator(
                                (get(data?.invoiceData, 'night_price', 0) || 0) *
                                  (get(data?.invoiceData, 'night_price_quantity', 0) || 0),
                                0,
                                false,
                              )}`}
                            </Typography>
                          </Box>
                        ) : (
                          <> </>
                        )}
                        {data?.invoiceData?.admin_price && data?.invoiceData?.admin_price > 0 ? (
                          <Box className={classes.invoiceRow}>
                            <Typography className={classes.invoiceDetail} variant='div'>
                              Biaya Admin
                            </Typography>
                            <Typography className={classes.invoiceDetail} variant='div'>
                              {`Rp ${thousandSeparator(
                                get(data?.invoiceData, 'admin_price', 0) || 0,
                                0,
                                false,
                              )} x 1`}
                            </Typography>
                            <Typography className={classes.invoiceDetail} variant='div'>
                              {`Rp ${thousandSeparator(
                                get(data?.invoiceData, 'admin_price', 0) || 0,
                                0,
                                false,
                              )}`}
                            </Typography>
                          </Box>
                        ) : (
                          <> </>
                        )}
                      </Box>
                      <Box className={classes.invoiceRow}>
                        <Typography className={classes.invoiceFooter} variant='div'>
                          Total
                        </Typography>
                        <Typography className={classes.invoiceFooter} variant='div' />
                        <Typography className={classes.invoiceFooter} variant='div'>
                          {`Rp ${thousandSeparator(data?.invoiceData?.total_price, 0, false)}`}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.fieldBox}>
                <Box className={classes.selectedField}>
                  <Typography className={classes.fieldTitle}>Lapangan</Typography>
                  <CustomSelect
                    isFullWidth
                    handleChange={handler.handleChangeField}
                    options={data?.fieldOptions}
                    value={state?.selectedFieldId}
                  />
                </Box>
                <Box className={classes.fieldInfo}>
                  <Box className={classes.fieldPhoto}>
                    <VerticalPhotoSlider photos={data?.fieldData?.galleries} />
                  </Box>
                  <Box className={classes.fieldMain}>
                    <Box className={classes.fieldMainDesc}>
                      <LightModeOutlined />
                      <Box className={classes.descBox}>
                        <Typography className={classes.descTitle}>Harga Sewa</Typography>
                        <Typography className={classes.descLabel}>
                          {`Rp ${thousandSeparator(data?.fieldData?.harga, 0, false)} / Jam`}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.fieldMainDesc}>
                      <DarkModeOutlined />
                      <Box className={classes.descBox}>
                        <Typography className={classes.descTitle}>
                          Harga Sewa Khusus Malam
                        </Typography>
                        <Box className={classes.descLabelWrapper}>
                          <Typography className={classes.descLabel}>
                            {`Rp ${thousandSeparator(
                              data?.fieldData?.harga_malam,
                              0,
                              false,
                            )} / Jam`}
                          </Typography>
                          <Typography
                            className={classes.descLabelInfo}
                          >{`mulai pukul ${removeSeconds(
                            data?.fieldData?.waktu_mulai_malam,
                          )}`}</Typography>
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
                          {data?.fieldData?.days_active &&
                            data?.fieldData?.days_active.length > 0 &&
                            data?.fieldData?.days_active.map((day) => day.day_name).join(', ')}
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
                          {`${removeSeconds(data?.fieldData?.booking_open)} hingga ${removeSeconds(
                            data?.fieldData?.booking_close,
                          )}`}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.fieldMainDesc}>
                      <HelpOutline />
                      <Box className={classes.descBox}>
                        <Typography className={classes.descTitle}>Deskripsi Lapangan</Typography>
                        <Typography className={classes.descLabel}>
                          {data?.fieldData?.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.descWrapper}>
              <WarningAmberRounded className={classes.warningIcon} />
              <Typography className={classes.desc}>
                Setelah menekan tombol Tambah Penyewaan, maka akan langsung meyimpan penyewaan
                lapangan dengan status <span className={classes.infoPaid}>Sudah Dibayar </span>
              </Typography>
            </Box>
            <Box className={classes.option}>
              <Typography
                className={classes.cancelButton}
                onClick={() => handler?.handleBackButton()}
              >
                Batalkan
              </Typography>
              <Button
                disabled={state?.selectedStartTime === null}
                handleOnClick={() => {
                  const isNotValid = handler?.checkValidityDateByFieldData()
                  if (!isNotValid) {
                    handler?.handleOpenConfirmModal()
                  }
                }}
                label='Tambah Penyewaan'
                type='button'
                variant='secondary'
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <KonfirmasiTambahPenyewaanModal
        open={state?.openConfirmModal}
        onClose={handler?.handleCloseConfirmModal}
        handleAdd={handler?.handleAddBookingField}
        summaryBookingData={state?.summaryBookingData}
      />
      <NotificationModal
        open={state?.notificationModal?.open}
        onClose={handler?.handleCloseNotificationModal}
        notificationMessage={state?.notificationModal?.message}
      />
    </>
  )
}

export default TambahPenyewaanPage
