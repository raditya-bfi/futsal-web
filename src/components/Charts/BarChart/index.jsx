/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Bar } from 'react-chartjs-2'

import { thousandSeparator } from '~/utils/number'

ChartJS.register(ChartDataLabels, CategoryScale, LinearScale, BarElement, Tooltip, Legend)

function BarChart({ chartData, decimalPlaces, metric }) {
  const chartOptions = {
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: ['white'],
          beginAtZero: true,
          font: { size: 15 },
        },
        grid: {
          display: false,
        },
        border: {
          width: 5,
          color: ['white'],
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
    plugins: {
      datalabels: {
        formatter(value) {
          return `${thousandSeparator(value, decimalPlaces, true)}${
            metric !== null && metric ? ` ${metric}` : ''
          }`
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label(tooltipItem) {
            const value = tooltipItem?.formattedValue
            return `${thousandSeparator(value, decimalPlaces, true)}${
              metric !== null && metric ? ` ${metric}` : ''
            }`
          },
        },
      },
    },
    layout: {
      padding: {
        top: 25,
        // left: 25,
        // right: 25,
      },
    },
  }
  return <Bar data={chartData} options={chartOptions} />
}

BarChart.defaultProps = {
  chartData: {},
  decimalPlaces: 1,
  metric: null,
}

BarChart.propTypes = {
  chartData: PropTypes.object,
  decimalPlaces: PropTypes.number,
  metric: PropTypes.string,
}

export default BarChart
