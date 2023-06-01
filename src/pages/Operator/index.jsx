import {
  AddRounded,
  ArrowForwardIosRounded,
  Circle,
  EmailRounded,
  FemaleRounded,
  InfoOutlined,
  Inventory2Outlined,
  LocalPhoneRounded,
  MaleRounded,
} from '@mui/icons-material'
import { Box, Tooltip, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { UserIcon } from '~/assets/svg'
import AddOperatorModal from '~/modules/Operator/AddOperatorModal'

import useCustom from './hooks'
import useStyles from './style'

function OperatorPage() {
  const { data, handler, state } = useCustom()
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
          <Box className={classes.mainContent}>
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
                          className={operator?.thumbnail ? classes.userThumbnail : classes.userIcon}
                          src={operator?.thumbnail ? operator?.thumbnail : UserIcon}
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
                          <span>
                            <Circle
                              className={operator?.isaktif ? classes.active : classes.unactive}
                            />
                            {operator?.isaktif ? 'Aktif' : 'Nonaktif'}
                          </span>
                          <ArrowForwardIosRounded className={classes.arrow} />
                        </Typography>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>
          <Box className={classes.navigation}>
            <Tooltip title='Tambah Operator' placement='left'>
              <Box className={classes.addButton} onClick={() => handler.handleOpenAddModal()}>
                <AddRounded />
              </Box>
            </Tooltip>
            <Tooltip title='Lihat Arsip Operator Nonaktif' placement='left'>
              <Box className={classes.deleteButton}>
                <Inventory2Outlined />
              </Box>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <AddOperatorModal onClose={handler?.handleCloseAddModal} open={state?.openAddModal} />
    </>
  )
}

export default OperatorPage
