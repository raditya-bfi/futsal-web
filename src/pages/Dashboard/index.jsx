import { Circle, InfoOutlined } from '@mui/icons-material'
import { Box, Tabs, Tab, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import BarChart from '~/components/Charts/BarChart'
import CustomSelect from '~/components/CustomSelect'
import LiveClock from '~/components/LiveClock'
import {
  DASHBOARD_MENU_TAB_KEY,
  DASHBOARD_MENU_TAB_VALUE,
  DASHBOARD_TAB_MAPPING,
} from '~/constants/general'
import { colors } from '~/styles/colors'
import { thousandSeparator } from '~/utils/number'

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
                      {`${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.PENDAPATAN].name}`}
                      {`${data?.summary?.pendapatan?.totalMonth} bulan terakhir`}
                    </Typography>
                    <Typography className={classes.tabLabelDesc}>
                      {`${data?.summary?.pendapatan?.lastMonth} - ${data?.summary?.pendapatan?.currentMonth}`}
                    </Typography>
                    <Typography className={classes.tabLabelDesc}>
                      {`${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.PENDAPATAN].prefix}
                      ${thousandSeparator(data?.summary?.pendapatan?.value, 0, false)}
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
                      {`${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN].name}`}
                      {`${data?.summary?.jam?.totalMonth} bulan terakhir`}
                    </Typography>
                    <Typography className={classes.tabLabelDesc}>
                      {`${data?.summary?.jam?.lastMonth} - ${data?.summary?.jam?.currentMonth}`}
                    </Typography>
                    <Typography className={classes.tabLabelDesc}>
                      {`${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN].prefix}
                      ${thousandSeparator(data?.summary?.jam?.value, 0, false)}
                      ${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN].suffix}`}
                    </Typography>
                  </div>
                }
                value={DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN]}
              />
            </Tabs>
          </Box>
          <Box className={classes.content}>
            <Box className={classes.verticalChartSection}>
              <Box className={classes.verticalChartWrapper}>
                <BarChart
                  chartData={data?.verticalChartData?.data}
                  decimalPlaces={data?.verticalChartData?.decimalPlaces}
                  metric={data?.verticalChartData?.metric}
                />
              </Box>
              <Box className={classes.verticallLegendWrapper}>
                <Box className={classes.legendWrapper} key='legend-bulan-sekarang'>
                  <Box className={classes.legendBox} sx={{ backgroundColor: colors.Aqua }} />
                  <Typography className={classes.legendLabel}>
                    {`Bulan sekarang ${state?.currentDate.date}`}
                  </Typography>
                </Box>
                <Box className={classes.legendWrapper} key='legend-bulan-lainnya'>
                  <Box className={classes.legendBox} sx={{ backgroundColor: colors.Turbo }} />
                  <Typography className={classes.legendLabel}>Bulan lainnya</Typography>
                </Box>
              </Box>
            </Box>
            {/* <Box className={classes.horizontalChartSection}>
              <Box className={classes.horizontalChartWrapper}>
                <HorizontalBarChart
                  chartData={data?.horizontalChartData?.data}
                  decimalPlaces={data?.horizontalChartData?.decimalPlaces}
                  metric={data?.horizontalChartData?.metric}
                />
              </Box>
              <Box className={classes.horizontalLegendWrapper}>
                {data?.horizontalChartData?.data?.datasets &&
                  data?.horizontalChartData?.data?.datasets.length > 0 &&
                  data?.horizontalChartData?.data?.datasets.map((legendData) => (
                    <Box className={classes.legendWrapper}>
                      <Box
                        className={classes.legendBox}
                        sx={{ backgroundColor: legendData?.backgroundColor }}
                      />
                      <Typography className={classes.legendLabel}>{legendData?.label}</Typography>
                    </Box>
                  ))}
              </Box>
            </Box> */}
          </Box>
          <Box className={classes.dateWrapper}>
            <Typography className={classes.dateLabel}>Bulan - Tahun</Typography>
            <CustomSelect
              handleChange={handler.handleChangeMonthYear}
              options={data?.monthYearOptions}
              value={state?.selectedMonthYear}
              width='252px'
            />
            {/* <DatePicker
              minDate={moment('2023-01-01').format(date.daily.format)}
              maxDate={moment().endOf('year').format(date.daily.format)}
              handleDateChange={(value) => {
                handler?.setSelectedDate(value.format('YYYY-MM-DD'))
                const newLocale = new Date(value.format('YYYY-MM-DD'))
                  .toLocaleDateString('id', {
                    month: 'short',
                    year: 'numeric',
                  })
                  .replace('Agu', 'Agt')
                handler?.setSelectedLocaleDate(newLocale)
              }}
              selectedDate={state.selectedDate}
              mode='monthly'
              width='252px'
            /> */}
          </Box>
          <Box className={classes.menuTabs}>
            <Tabs
              classes={{
                indicator: classes.tabsIndicator,
                root: classes.tabsContainer,
              }}
              value={state.belowCurrentTab}
              onChange={handler.handleChangeBelowTab}
              variant='fullWidth'
            >
              <Tab
                label={
                  <div
                    className={
                      state?.belowCurrentTab ===
                      DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN]
                        ? classes.activeTab
                        : classes.tab
                    }
                  >
                    <Typography className={classes.tabLabel}>
                      Jumlah Pendapatan pada bulan
                    </Typography>
                    <Typography className={classes.tabLabelDesc}>
                      {state?.selectedMonthYear}
                      {/* {`${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.PENDAPATAN].prefix}
                      ${thousandSeparator(data?.summary?.pendapatan, 0, false)}
                      ${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.PENDAPATAN].suffix}`} */}
                    </Typography>
                  </div>
                }
                value={DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN]}
              />
              <Tab
                label={
                  <div
                    className={`${
                      state?.belowCurrentTab ===
                      DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN]
                        ? classes.activeTab
                        : classes.tab
                    } ${classes.tabSecond}
                    `}
                  >
                    <Typography className={classes.tabLabel}>
                      Jumlah Jam Penyewaan pada bulan
                    </Typography>
                    <Typography className={classes.tabLabelDesc}>
                      {state?.selectedMonthYear}
                      {/* {`${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN].prefix}
                      ${thousandSeparator(data?.summary?.jam, 0, false)}
                      ${DASHBOARD_TAB_MAPPING[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN].suffix}`} */}
                    </Typography>
                  </div>
                }
                value={DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.JAM_PENYEWAAN]}
              />
            </Tabs>
          </Box>
          <Box className={classes.content}>
            <Box className={classes.verticalChartSection} sx={{ border: 'none !important' }}>
              <Box className={classes.summaryTotal}>
                <Typography className={classes.summaryTotalLabel}>
                  {data?.belowChartData?.data?.total}
                </Typography>
                <Typography className={classes.summaryTotalDesc}>
                  {`telah dikumpulkan dari total penyewaan yang disewakan untuk bulan `}
                  <span className={classes.boldLabel}>{state?.selectedMonthYear}</span>
                </Typography>
              </Box>
              <Box className={classes.summaryDetail}>
                <Typography className={classes.summaryDetailabel}>
                  {`Dari 100% jumlah pendapatan yang didapat pada bulan `}
                  <span className={classes.boldLabel}>{state?.selectedMonthYear}</span>
                  {` ditemukan rincian sebagai berikut antara lain sebagai berikut:`}
                </Typography>
                <Box className={classes.summaryDetailBreakdown}>
                  {data?.belowChartData?.data?.datasets &&
                    data?.belowChartData?.data?.datasets.length > 0 &&
                    data?.belowChartData?.data?.datasets.map((belowData) => (
                      <Box className={classes.breakdownWrapper}>
                        <Circle sx={{ color: colors.White, height: '10px', width: '10px' }} />
                        <Typography className={classes.summaryDetailabel} key=''>
                          <span className={classes.boldLabel}>{`${belowData?.label}`}</span>
                          {` dengan total sebesar `}
                          <span className={classes.boldLabel}>{`${belowData?.value}`}</span>
                        </Typography>
                      </Box>
                    ))}
                </Box>
              </Box>
            </Box>
            {/* <Box className={classes.horizontalChartSection}>
              <Box className={classes.horizontalChartWrapper}>
                <HorizontalBarChart
                  chartData={data?.horizontalChartData?.data}
                  decimalPlaces={data?.horizontalChartData?.decimalPlaces}
                  metric={data?.horizontalChartData?.metric}
                />
              </Box>
              <Box className={classes.horizontalLegendWrapper}>
                {data?.horizontalChartData?.data?.datasets &&
                  data?.horizontalChartData?.data?.datasets.length > 0 &&
                  data?.horizontalChartData?.data?.datasets.map((legendData) => (
                    <Box className={classes.legendWrapper}>
                      <Box
                        className={classes.legendBox}
                        sx={{ backgroundColor: legendData?.backgroundColor }}
                      />
                      <Typography className={classes.legendLabel}>{legendData?.label}</Typography>
                    </Box>
                  ))}
              </Box>
            </Box> */}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default DashboardPage
