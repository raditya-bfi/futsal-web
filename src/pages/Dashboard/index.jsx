import { InfoOutlined } from '@mui/icons-material'
import { Box, Tabs, Tab, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import BarChart from '~/components/Charts/BarChart'
import HorizontalBarChart from '~/components/Charts/HorizontalBarChart'
import LiveClock from '~/components/LiveClock'
import {
  DASHBOARD_MENU_TAB_KEY,
  DASHBOARD_MENU_TAB_VALUE,
  DASHBOARD_TAB_MAPPING,
} from '~/constants/general'

import useCustom from './hooks'
import useStyles from './style'

function DashboardPage() {
  const { data, handler, state } = useCustom()
  const classes = useStyles({ activeTab: state?.currentTab })

  return (
    <>
      <Helmet title='Dasbor'>
        <meta name='description' content='Dasbor | Futsal Gembira' />
      </Helmet>
      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Typography className={classes.title}>Dasbor</Typography>
          <LiveClock className={classes.liveClock} />
        </Box>
        <Box className={classes.pageContent}>
          <Box className={classes.contentInfo}>
            <Typography className={classes.infoLabel}>
              <InfoOutlined />
              Kumpulan informasi penting selama satu bulan sejak tanggal 1 hingga tanggal hari ini
            </Typography>
          </Box>
          <Box className={classes.menuTabs}>
            <Tabs
              classes={{
                indicator: classes.tabsIndicator,
                root: classes.tabsContainer,
              }}
              value={state.currentTab}
              onChange={handler.handleChangeTab}
              variant='fullWidth'
            >
              <Tab
                label={
                  <div
                    className={
                      state?.currentTab ===
                      DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN]
                        ? classes.activeTab
                        : classes.tab
                    }
                  >
                    <Typography className={classes.tabLabel}>
                      {`${
                        DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.PENDAPATAN].name
                      }Januari 2023`}
                    </Typography>
                    <Typography className={classes.tabLabelDesc}>
                      {`${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.PENDAPATAN].prefix}
                      38.639.517
                      ${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.PENDAPATAN].suffix}`}
                    </Typography>
                  </div>
                }
                value={DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN]}
              />
              <Tab
                label={
                  <div
                    className={`${
                      state?.currentTab ===
                      DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN]
                        ? classes.activeTab
                        : classes.tab
                    } ${classes.tabSecond}
                    `}
                  >
                    <Typography className={classes.tabLabel}>
                      {`${
                        DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN].name
                      }Januari 2023`}
                    </Typography>
                    <Typography className={classes.tabLabelDesc}>
                      {`${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN].prefix}
                      485
                      ${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN].suffix}`}
                    </Typography>
                  </div>
                }
                value={DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN]}
              />
            </Tabs>
          </Box>
          <Box className={classes.content}>
            <Box className={classes.verticalChartWrapper}>
              <BarChart
                chartData={data?.verticalChartData?.data}
                decimalPlaces={data?.verticalChartData?.decimalPlaces}
                metric={data?.verticalChartData?.metric}
              />
            </Box>
            <Box className={classes.horizontalChartWrapper}>
              <HorizontalBarChart
                chartData={data?.horizontalChartData?.data}
                decimalPlaces={data?.horizontalChartData?.decimalPlaces}
                metric={data?.horizontalChartData?.metric}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default DashboardPage
