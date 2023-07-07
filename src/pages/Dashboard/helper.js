import ChartDataLabels from 'chartjs-plugin-datalabels'
import { get, orderBy, set } from 'lodash-es'

import {
  DASHBOARD_MENU_TAB_KEY,
  DASHBOARD_MENU_TAB_VALUE,
  DASHBOARD_RENT_TIME_MAPPING,
} from '~/constants/general'
import { colors } from '~/styles/theme'
import { thousandSeparator } from '~/utils/number'

export const getSummary = (currentDate, laporanPendapatanData = [], laporanWaktuSewaData = []) => {
  const res = {
    pendapatan: 0,
    jam: 0,
  }

  // ? : Pendapatan
  if (laporanPendapatanData && laporanPendapatanData?.length > 0) {
    laporanPendapatanData.forEach((pendapatanData) => {
      Object.keys(pendapatanData).forEach((key) => {
        if (key === currentDate) {
          res.pendapatan = pendapatanData[key]?.total_all || 0
        }
      })
    })
  }

  // ? : Jam
  if (laporanWaktuSewaData && laporanWaktuSewaData?.length > 0) {
    laporanWaktuSewaData.forEach((waktuData) => {
      Object.keys(waktuData).forEach((key) => {
        if (key === currentDate) {
          waktuData[key].forEach((scheduleData) => {
            res.jam += scheduleData.total
          })
        }
      })
    })
  }

  return res
}

export const getVerticalChartData = (
  currentDate,
  dashboardType = DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN],
  laporanPendapatanData = [],
  laporanWaktuSewaData = [],
) => {
  if (dashboardType === DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN]) {
    const chartData = []
    if (laporanPendapatanData && laporanPendapatanData?.length > 0) {
      laporanPendapatanData.forEach((data, index) => {
        const monthlyData = {
          index,
          monthName: '',
          total: 0,
        }
        Object.keys(data).forEach((key) => {
          monthlyData.total = data[key]?.total_all || 0
          monthlyData.total = monthlyData.total > 0 ? monthlyData.total / 1000000 : 0
          monthlyData.monthName = key
        })
        chartData.push(monthlyData)
      })
    }
    const res = {
      months: [],
      data: [],
      colors: [],
    }
    orderBy(chartData, ['index'], ['desc']).forEach((data) => {
      res.months.push(data?.monthName)
      res.data.push(data?.total)
      res.colors.push(data?.monthName === currentDate ? colors.Aqua : colors.Turbo)
    })

    return {
      data: {
        labels: res?.months,
        plugins: [ChartDataLabels],
        datasets: [
          {
            data: res?.data,
            backgroundColor: res?.colors,
            datalabels: {
              color: 'White',
              align: 'top',
              anchor: 'end',
              font: {
                weight: 'bold',
                size: 20,
              },
            },
          },
        ],
      },
      decimalPlaces: 2,
      metric: 'Juta',
    }
  }

  const chartData = []
  if (laporanWaktuSewaData && laporanWaktuSewaData?.length > 0) {
    laporanWaktuSewaData.forEach((data, index) => {
      const monthlyData = {
        index,
        monthName: '',
        total: 0,
      }
      Object.keys(data).forEach((key) => {
        if (key !== 'total_time_rent') {
          let totalHourPerMonth = 0
          data[key].forEach((scheduleData) => {
            totalHourPerMonth += scheduleData.total
          })
          monthlyData.monthName = key
          monthlyData.total = totalHourPerMonth
        }
      })
      chartData.push(monthlyData)
    })
  }
  const res = {
    months: [],
    data: [],
    colors: [],
  }
  orderBy(chartData, ['index'], ['desc']).forEach((data) => {
    res.months.push(data?.monthName)
    res.data.push(data?.total)
    res.colors.push(data?.monthName === currentDate ? colors.Aqua : colors.Turbo)
  })

  return {
    data: {
      labels: res?.months,
      plugins: [ChartDataLabels],
      datasets: [
        {
          data: res?.data,
          backgroundColor: res?.colors,
          datalabels: {
            color: 'White',
            align: 'top',
            anchor: 'end',
            font: {
              weight: 'bold',
              size: 20,
            },
          },
        },
      ],
    },
    decimalPlaces: 0,
    metric: 'Jam',
  }
}

export const getHorizontalChartData = (
  currentDate,
  dashboardType = DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN],
  laporanPendapatanData = [],
  laporanWaktuSewaData = [],
) => {
  if (dashboardType === DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN]) {
    const totalPendapatan = {
      total_all: 0,
      total_admin: 0,
      total_day: 0,
      total_night: 0,
    }

    if (laporanPendapatanData && laporanPendapatanData?.length > 0) {
      laporanPendapatanData.forEach((data) => {
        Object.keys(data).forEach((key) => {
          // ? : iterate by month
          totalPendapatan.total_admin += data[key]?.total_admin || 0
          totalPendapatan.total_all += data[key]?.total_all || 0
          totalPendapatan.total_day += data[key]?.total_day || 0
          totalPendapatan.total_night += data[key]?.total_night || 0
        })
      })
    }

    const totalPercentage = {
      admin:
        totalPendapatan.total_all > 0
          ? (totalPendapatan.total_admin / totalPendapatan.total_all) * 100
          : 0,
      day:
        totalPendapatan.total_all > 0
          ? (totalPendapatan.total_day / totalPendapatan.total_all) * 100
          : 0,
      night:
        totalPendapatan.total_all > 0
          ? (totalPendapatan.total_night / totalPendapatan.total_all) * 100
          : 0,
    }
    return {
      data: {
        labels: [currentDate],
        plugins: [ChartDataLabels],
        datasets: [
          {
            label: `Biaya Admin - ${thousandSeparator(
              totalPercentage?.admin,
              1,
              true,
            )}% - Rp ${thousandSeparator(totalPendapatan?.total_admin, 0, false)}`,
            data: [totalPercentage?.admin],
            backgroundColor: [colors.ForestGreen],
            barPercentage: 1.5,
          },
          {
            label: `Sewa Per Jam - ${thousandSeparator(
              totalPercentage?.day,
              1,
              true,
            )}% - Rp ${thousandSeparator(totalPendapatan?.total_day, 0, false)}`,
            data: [totalPercentage?.day],
            backgroundColor: [colors.Matisse],
            barPercentage: 1.5,
          },
          {
            label: `Sewa Khusus Malam Per Jam - ${thousandSeparator(
              totalPercentage?.night,
              1,
              true,
            )}% - Rp ${thousandSeparator(totalPendapatan?.total_night, 0, false)}`,
            data: [totalPercentage?.night],
            backgroundColor: [colors.KeyLimePie],
            barPercentage: 1.5,
          },
        ],
      },
      decimalPlaces: 1,
    }
  }

  const totalJam = {
    total_all: 0,
    monthly: {
      Lainnya: 0,
      'Pukul 14:00 hingga 15:00': 0,
      'Pukul 15:00 hingga 16:00': 0,
      'Pukul 16:00 hingga 17:00': 0,
      'Pukul 17:00 hingga 18:00': 0,
      'Pukul 20:00 hingga 21:00': 0,
      'Pukul 21:00 hingga 22:00': 0,
    },
  }

  if (laporanWaktuSewaData && laporanWaktuSewaData?.length > 0) {
    laporanWaktuSewaData.forEach((data) => {
      Object.keys(data).forEach((key) => {
        if (key !== 'total_time_rent') {
          // ? : iterate by month
          if (data[key] && data[key].length > 0) {
            data[key].forEach((monthlyData) => {
              set(
                totalJam.monthly,
                `${DASHBOARD_RENT_TIME_MAPPING[monthlyData?.time]}`,
                get(totalJam.monthly, `${DASHBOARD_RENT_TIME_MAPPING[monthlyData?.time]}`, 0) +
                  get(monthlyData, 'total', 0),
              )
              set(
                totalJam,
                'total_all',
                get(totalJam, 'total_all', 0) + get(monthlyData, 'total', 0),
              )
            })
          }
        }
      })
    })
  }

  const totalPercentage = {
    Lainnya: 0,
    'Pukul 14:00 hingga 15:00': 0,
    'Pukul 15:00 hingga 16:00': 0,
    'Pukul 16:00 hingga 17:00': 0,
    'Pukul 17:00 hingga 18:00': 0,
    'Pukul 20:00 hingga 21:00': 0,
    'Pukul 21:00 hingga 22:00': 0,
  }

  Object.keys(totalJam?.monthly).forEach((key) => {
    set(
      totalPercentage,
      key,
      totalJam.total_all > 0 ? (totalJam.monthly[key] / totalJam.total_all) * 100 : 0,
    )
  })

  return {
    data: {
      labels: [currentDate],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: `Pukul 14:00 hingga 15:00 - ${thousandSeparator(
            totalPercentage['Pukul 14:00 hingga 15:00'],
            1,
            true,
          )}% - ${thousandSeparator(totalJam?.monthly['Pukul 14:00 hingga 15:00'], 0, false)} jam`,
          data: [totalPercentage['Pukul 14:00 hingga 15:00']],
          backgroundColor: [colors.Indochine],
          barPercentage: 1.5,
        },
        {
          label: `Pukul 15:00 hingga 16:00 - ${thousandSeparator(
            totalPercentage['Pukul 15:00 hingga 16:00'],
            1,
            true,
          )}% - ${thousandSeparator(totalJam?.monthly['Pukul 15:00 hingga 16:00'], 0, false)} jam`,
          data: [totalPercentage['Pukul 15:00 hingga 16:00']],
          backgroundColor: [colors.Matisse],
          barPercentage: 1.5,
        },
        {
          label: `Pukul 16:00 hingga 17:00 - ${thousandSeparator(
            totalPercentage['Pukul 16:00 hingga 17:00'],
            1,
            true,
          )}% - ${thousandSeparator(totalJam?.monthly['Pukul 16:00 hingga 17:00'], 0, false)} jam`,
          data: [totalPercentage['Pukul 16:00 hingga 17:00']],
          backgroundColor: [colors.Pueblo],
          barPercentage: 1.5,
        },
        {
          label: `Pukul 17:00 hingga 18:00 - ${thousandSeparator(
            totalPercentage['Pukul 17:00 hingga 18:00'],
            1,
            true,
          )}% - ${thousandSeparator(totalJam?.monthly['Pukul 17:00 hingga 18:00'], 0, false)} jam`,
          data: [totalPercentage['Pukul 17:00 hingga 18:00']],
          backgroundColor: [colors.KeyLimePie],
          barPercentage: 1.5,
        },
        {
          label: `Pukul 20:00 hingga 21:00 - ${thousandSeparator(
            totalPercentage['Pukul 20:00 hingga 21:00'],
            1,
            true,
          )}% - ${thousandSeparator(totalJam?.monthly['Pukul 20:00 hingga 21:00'], 0, false)} jam`,
          data: [totalPercentage['Pukul 20:00 hingga 21:00']],
          backgroundColor: [colors.ForestGreen],
          barPercentage: 1.5,
        },
        {
          label: `Pukul 21:00 hingga 22:00 - ${thousandSeparator(
            totalPercentage['Pukul 21:00 hingga 22:00'],
            1,
            true,
          )}% - ${thousandSeparator(totalJam?.monthly['Pukul 21:00 hingga 22:00'], 0, false)} jam`,
          data: [totalPercentage['Pukul 21:00 hingga 22:00']],
          backgroundColor: [colors.PigmentIndigo],
          barPercentage: 1.5,
        },
        {
          label: `Lainnya - ${thousandSeparator(
            totalPercentage.Lainnya,
            1,
            true,
          )}% - ${thousandSeparator(totalJam?.monthly.Lainnya, 0, false)} jam`,
          data: [totalPercentage.Lainnya],
          backgroundColor: [colors.AgedMoustacheGrey],
          barPercentage: 1.5,
        },
      ],
    },
    decimalPlaces: 1,
  }
}
