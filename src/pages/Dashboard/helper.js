import ChartDataLabels from 'chartjs-plugin-datalabels'

import { DASHBOARD_MENU_TAB_KEY, DASHBOARD_MENU_TAB_VALUE } from '~/constants/general'
import { colors } from '~/styles/theme'

export const getVerticalChartData = (
  dashboardType = DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN],
) => {
  if (dashboardType === DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN]) {
    return {
      data: {
        labels: [
          'Agustus 2022',
          'September 2022',
          'Oktober 2022',
          'November 2022',
          'Desember 2022',
          'Januari 2023',
        ],
        plugins: [ChartDataLabels],
        datasets: [
          {
            data: [38.6, 48.5, 41.7, 48.5, 58.4, 38.6],
            backgroundColor: [
              colors.Turbo,
              colors.Turbo,
              colors.Turbo,
              colors.Turbo,
              colors.Turbo,
              colors.Aqua,
            ],
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
      decimalPlaces: 1,
      metric: 'Juta',
    }
  }

  return {
    data: {
      labels: [
        'Agustus 2022',
        'September 2022',
        'Oktober 2022',
        'November 2022',
        'Desember 2022',
        'Januari 2023',
      ],
      plugins: [ChartDataLabels],
      datasets: [
        {
          data: [484, 609, 521, 609, 734, 485],
          backgroundColor: [
            colors.Turbo,
            colors.Turbo,
            colors.Turbo,
            colors.Turbo,
            colors.Turbo,
            colors.Aqua,
          ],
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
  dashboardType = DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN],
  laporanPendapatanData = [],
  laporanWaktuSewaData = [],
) => {
  if (dashboardType === DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN]) {
    console.log(laporanPendapatanData)
    return {
      data: {
        labels: ['Januari 2023'],
        plugins: [ChartDataLabels],
        datasets: [
          {
            label: 'Biaya Admin - 5.5% - Rp 2.144.493',
            data: [5.5],
            backgroundColor: [colors.ForestGreen],
            barPercentage: 1.5,
          },
          {
            label: 'Sewa Per Jam - 43.44% - Rp 16.785.006',
            data: [43.44],
            backgroundColor: [colors.Matisse],
            barPercentage: 1.5,
          },
          {
            label: 'Sewa Khusus Malam Per Jam - 51.01% - Rp 19.710.018',
            data: [51.01],
            backgroundColor: [colors.KeyLimePie],
            barPercentage: 1.5,
          },
        ],
      },
      decimalPlaces: 1,
    }
  }

  console.log(laporanWaktuSewaData)

  return {
    data: {
      labels: ['Januari 2023'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Lainnya - 13.22% - 64 jam',
          data: [13.22],
          backgroundColor: [colors.AgedMoustacheGrey],
          barPercentage: 1.5,
        },
        {
          label: 'Pukul 14:00 hingga 15:00 - 11.11% - 53 jam',
          data: [11.11],
          backgroundColor: [colors.Indochine],
          barPercentage: 1.5,
        },
        {
          label: 'Pukul 21:00 hingga 22:00 - 12.00% - 59 jam',
          data: [12.0],
          backgroundColor: [colors.PigmentIndigo],
          barPercentage: 1.5,
        },
        {
          label: 'Pukul 16:00 hingga 17:00 - 14.11% - 69 jam',
          data: [14.11],
          backgroundColor: [colors.Pueblo],
          barPercentage: 1.5,
        },
        {
          label: 'Pukul 20:00 hingga 21:00 - 14.77% - 72 jam',
          data: [14.77],
          backgroundColor: [colors.ForestGreen],
          barPercentage: 1.5,
        },
        {
          label: 'Pukul 15:00 hingga 16:00 -  15.00% - 73 jam',
          data: [15.0],
          backgroundColor: [colors.Matisse],
          barPercentage: 1.5,
        },
        {
          label: 'Pukul 17:00 hingga 18:00 - 19.79% - 95 jam',
          data: [19.79],
          backgroundColor: [colors.KeyLimePie],
          barPercentage: 1.5,
        },
      ],
    },
    decimalPlaces: 1,
  }
}
