import { InfoOutlined, NavigateBeforeRounded } from '@mui/icons-material'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { useNavigateParams } from '~/utils/routing'

import rulesData from './data.json'
import useStyles from './style'

function BookingRulesPage() {
  const navigate = useNavigateParams()
  const classes = useStyles()

  const handleBackButton = () => {
    navigate('/penyewaan')
  }

  return (
    <>
      <Helmet title='Aturan Penyewaan Mobile'>
        <meta name='description' content='Aturan Penyewaan Mobile | Futsal Gembira' />
      </Helmet>
      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Box className={classes.titleWrapper}>
            <IconButton className={classes.backIcon} onClick={() => handleBackButton()}>
              <NavigateBeforeRounded />
            </IconButton>
            <Typography className={classes.title}>Aturan Penyewaan Mobile</Typography>
          </Box>
        </Box>
        <Box className={classes.pageContent}>
          <Box className={classes.contentInfo}>
            <Typography className={classes.infoLabel}>
              <InfoOutlined />
              Kumpulan aturan yang diterapkan untuk pengguna pada aplikasi mobile
            </Typography>
          </Box>
          <Box className={classes.content}>
            {rulesData?.rules &&
              rulesData?.rules.length > 0 &&
              rulesData?.rules.map((rule) => (
                <Box className={classes.ruleWrapper}>
                  <Typography className={classes.ruleTitle}>
                    {rule?.title}
                    <Tooltip title={rule?.tooltip} placement='bottom-start'>
                      <InfoOutlined />
                    </Tooltip>
                  </Typography>
                  <Typography className={classes.ruleDesc}>{rule?.desc}</Typography>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default BookingRulesPage
