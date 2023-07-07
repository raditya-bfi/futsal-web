import { useLocation } from 'react-router-dom'

import {
  AddRounded,
  Circle,
  DarkModeOutlined,
  InfoOutlined,
  LightModeOutlined,
} from '@mui/icons-material'
import { Box, Tooltip, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import Snackbar from '~/components/Snackbar'
import DetailLapanganModal from '~/modules/Lapangan/DetailLapanganModal'
import { thousandSeparator } from '~/utils/number'

import useCustom from './hooks'
import useStyles from './style'

function LapanganPage() {
  const location = useLocation()
  const stateLocation = location?.state
  const { data, handler, state } = useCustom({ stateLocation })
  const classes = useStyles()
  return (
    <>
      <Helmet title='Lapangan'>
        <meta name='description' content='Lapangan | Futsal Gembira' />
      </Helmet>
      <Snackbar
        handleClose={handler.handleCloseSnackbar}
        message={state?.alert?.message}
        open={state?.alert?.open}
        severity={state?.alert?.severity}
      />
      <Snackbar
        handleClose={handler.handleCloseSnackbarState}
        message={stateLocation?.message}
        open={stateLocation?.open}
        severity={stateLocation?.severity}
      />
      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Typography className={classes.title}>Daftar Lapangan</Typography>
        </Box>
        <Box className={classes.pageContent}>
          <Box className={classes.mainContent}>
            <Box className={classes.contentInfo}>
              <Typography className={classes.infoLabel}>
                <InfoOutlined />
                Daftar yang memuat catatan tentang hal lapangan futsal, seperti nama lapangan, harga
                sewa, dan harga sewa malam
              </Typography>
            </Box>
            <Box className={classes.content}>
              <Box className={classes.fieldList}>
                <Box
                  className={classes.fieldSlider}
                  sx={{
                    display:
                      data?.fieldSliderData?.odd && data?.fieldSliderData?.odd.length > 0
                        ? 'flex'
                        : 'none',
                  }}
                >
                  {data?.fieldSliderData?.odd &&
                    data?.fieldSliderData?.odd.length > 0 &&
                    data?.fieldSliderData?.odd.map((field) => (
                      <Box
                        className={classes.fieldCard}
                        key={`field-card-odd-${field?.field_id}`}
                        sx={{ backgroundImage: `url(${field?.image})` }}
                        onClick={() => handler?.handleOpenDetailModal(field?.field_id)}
                      >
                        <Box className={classes.fieldInfo}>
                          <Box className={classes.fieldNameWrapper}>
                            <Typography className={classes.fieldName} variant='div'>
                              {field?.name}
                            </Typography>
                          </Box>
                          <Box className={classes.fieldPriceWrapper}>
                            <Typography className={classes.fieldPrice} variant='div'>
                              <LightModeOutlined />
                              {`Rp ${thousandSeparator(field?.harga, 0, false)} / Jam`}
                            </Typography>
                            <Typography className={classes.circle} variant='div'>
                              <Circle />
                            </Typography>
                            <Typography className={classes.fieldPrice} variant='div'>
                              <DarkModeOutlined />
                              {`Rp ${thousandSeparator(field?.harga_malam, 0, false)} / Jam`}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                </Box>
                <Box
                  className={classes.fieldSlider}
                  sx={{
                    display:
                      data?.fieldSliderData?.even && data?.fieldSliderData?.even.length > 0
                        ? 'flex'
                        : 'none',
                  }}
                >
                  {data?.fieldSliderData?.even &&
                    data?.fieldSliderData?.even.length > 0 &&
                    data?.fieldSliderData?.even.map((field) => (
                      <Box
                        className={classes.fieldCard}
                        key={`field-card-even-${field?.field_id}`}
                        sx={{ backgroundImage: `url(${field?.image})` }}
                        onClick={() => handler?.handleOpenDetailModal(field?.field_id)}
                      >
                        <Box className={classes.fieldInfo}>
                          <Box className={classes.fieldNameWrapper}>
                            <Typography className={classes.fieldName} variant='div'>
                              {field?.name}
                            </Typography>
                          </Box>
                          <Box className={classes.fieldPriceWrapper}>
                            <Typography className={classes.fieldPrice} variant='div'>
                              <LightModeOutlined />
                              {`Rp ${thousandSeparator(field?.harga, 0, false)} / Jam`}
                            </Typography>
                            <Typography className={classes.circle} variant='div'>
                              <Circle />
                            </Typography>
                            <Typography className={classes.fieldPrice} variant='div'>
                              <DarkModeOutlined />
                              {`Rp ${thousandSeparator(field?.harga_malam, 0, false)} / Jam`}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.navigation}>
            <Tooltip title='Tambah Lapangan' placement='left'>
              <Box className={classes.addButton} onClick={() => handler.handleAddLapangan()}>
                <AddRounded />
              </Box>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <DetailLapanganModal
        alert={state?.alert}
        fieldId={state?.selectedFieldId}
        onClose={handler?.handleCloseDetailModal}
        open={state?.openDetailModal}
        setAlert={handler?.setAlert}
        setIsNeedRefetch={handler?.setIsNeedRefetch}
        setOpenModal={handler?.setOpenDetailModal}
      />
    </>
  )
}

export default LapanganPage
