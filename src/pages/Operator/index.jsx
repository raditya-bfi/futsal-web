import {
  ArrowForwardIosRounded,
  Circle,
  EmailRounded,
  FemaleRounded,
  InfoOutlined,
  LocalPhoneRounded,
  MaleRounded,
} from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { UserIcon } from '~/assets/svg'

import useCustom from './hooks'
import useStyles from './style'

function OperatorPage() {
  const { data } = useCustom()
  const classes = useStyles()

  return (
    <>
      <Helmet title='Operator'>
        <meta name='description' content='Operator | Futsal Gembira' />
      </Helmet>
      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Typography className={classes.title}>Daftar Operator</Typography>
        </Box>
        <Box className={classes.pageContent}>
          <Box className={classes.contentInfo}>
            <Typography className={classes.infoLabel}>
              <InfoOutlined />
              Daftar yang memuat catatan tentang hal operator yang memiliki status aktif, seperti
              nama operator, email operator, dan data pribadi lainnya
            </Typography>
          </Box>
          <Box className={classes.content}>
            <Box className={classes.operatorList}>
              {data?.operatorsData &&
                data?.operatorsData.length > 1 &&
                data?.operatorsData.map((operator) => (
                  <Box
                    className={classes.card}
                    key={`operator-card-${operator?.user_id}-${operator?.username}`}
                  >
                    <Box className={classes.cardPhoto}>
                      <img
                        className={classes.userIcon}
                        src={UserIcon}
                        alt={`operator-user-icon-${operator?.user_id}-${operator?.username}`}
                      />
                    </Box>
                    <Box className={classes.cardInfo}>
                      <Box className={classes.operatorInfo}>
                        <Typography className={classes.operatorName}>
                          {operator?.name}
                          {operator?.gender === 'LK' ? (
                            <MaleRounded className={classes.maleIcon} />
                          ) : (
                            <FemaleRounded className={classes.femaleIcon} />
                          )}
                        </Typography>
                      </Box>
                      <Typography className={classes.operatorId}>
                        {`@${operator?.username}-${operator?.user_id}`}
                      </Typography>
                      <Typography className={classes.operatorPhoneNo}>
                        <LocalPhoneRounded />
                        {operator?.no_hp}
                      </Typography>
                      <Typography className={classes.operatorEmail}>
                        <EmailRounded />
                        {operator?.email}
                      </Typography>
                      <Typography
                        className={`${classes.operatorStatus} ${
                          operator?.isaktif ? classes.active : classes.unactive
                        }`}
                      >
                        <div>
                          <Circle
                            className={operator?.isaktif ? classes.active : classes.unactive}
                          />
                          {operator?.isaktif ? 'Aktif' : 'Tidak Aktif'}
                        </div>

                        <ArrowForwardIosRounded className={classes.arrow} />
                      </Typography>
                    </Box>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default OperatorPage
