/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Bar } from 'react-chartjs-2'

import { colors } from '~/styles/theme'
import { thousandSeparator } from '~/utils/number'

ChartJS.register(ChartDataLabels, CategoryScale, LinearScale, BarElement, Tooltip, Legend)

function HorizontalBarChart({ chartData, decimalPlaces }) {
  const chartOptions = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: colors.White,
        font: {
          weight: 'bold',
          size: 20,
        },
        formatter(value) {
          return `${thousandSeparator(value, decimalPlaces, true)}%`
        },
      },
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          color: ['white'],
          usePointStyle: true,
          pointStyle: 'rect',
          font: {
            size: 20,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: ['white'],
          beginAtZero: true,
          font: { size: 10 },
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          width: 5,
          color: ['white'],
          display: false,
          z: 10,
        },
      },
      y: {
        beginAtZero: true,
        grace: '10%',
        stacked: true,
        ticks: {
          color: ['white'],
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  }
  return <Bar data={chartData} options={chartOptions} />
}

HorizontalBarChart.defaultProps = {
  chartData: {},
  decimalPlaces: 1,
}

HorizontalBarChart.propTypes = {
  chartData: PropTypes.object,
  decimalPlaces: PropTypes.number,
}

export default HorizontalBarChart
