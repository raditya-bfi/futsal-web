import { useEffect, useMemo, useState } from 'react'

import moment from 'moment'

import date from '~/config/date'
import { DASHBOARD_MENU_TAB_KEY, DASHBOARD_MENU_TAB_VALUE } from '~/constants/general'
import { getLaporanPendapatan, getLaporanWaktuSewa } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

import {
  getBelowChartData,
  getHorizontalChartData,
  getOptions,
  getSummary,
  getVerticalChartData,
} from './helper'

const useCustom = () => {
  const { setIsLoading } = useLoading()
  const [currentDate, setCurrentDate] = useState({
    date: new Date().toLocaleDateString('id', {
      month: 'long',
      year: 'numeric',
    }),
  })
  const [locale, setLocale] = useState({
    date: new Date().toLocaleDateString('id', {
      month: 'short',
      year: 'numeric',
    }),
  })
  const [selectedLocaleDate, setSelectedLocaleDate] = useState({
    date: new Date().toLocaleDateString('id', {
      month: 'short',
      year: 'numeric',
    }),
  })
  const [selectedDate, setSelectedDate] = useState(moment().format(date.daily.format))

  const [currentTab, setCurrentTab] = useState(
    DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN],
  )

  const [belowCurrentTab, setBelowCurrentTab] = useState(
    DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN],
  )

  const [laporanPendapatanData, setLaporanPendapatanData] = useState([])
  const [laporanWaktuSewaData, setLaporanWaktuSewaData] = useState([])
  const [selectedMonthYear, setSelectedMonthYear] = useState(null)

  const handleChangeMonthYear = (event) => {
    setSelectedMonthYear(event.target.value)
  }

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue)
  }

  const handleChangeBelowTab = (event, newValue) => {
    setBelowCurrentTab(newValue)
  }

  const monthYearOptions = useMemo(() => getOptions(laporanPendapatanData), [laporanPendapatanData])

  const summary = useMemo(
    () => getSummary(locale?.date, laporanPendapatanData, laporanWaktuSewaData),
    [locale?.date, laporanPendapatanData, laporanWaktuSewaData],
  )

  const horizontalChartData = useMemo(
    () =>
      getHorizontalChartData(locale?.date, currentTab, laporanPendapatanData, laporanWaktuSewaData),
    [currentTab, locale, laporanPendapatanData, laporanWaktuSewaData],
  )

  const belowChartData = useMemo(
    () =>
      getBelowChartData(
        selectedMonthYear,
        belowCurrentTab,
        laporanPendapatanData,
        laporanWaktuSewaData,
      ),
    [belowCurrentTab, selectedMonthYear, laporanPendapatanData, laporanWaktuSewaData],
  )

  const verticalChartData = useMemo(
    () =>
      getVerticalChartData(locale?.date, currentTab, laporanPendapatanData, laporanWaktuSewaData),
    [currentTab, locale, laporanPendapatanData, laporanWaktuSewaData],
  )

  const fetchLaporanData = async () => {
    await setIsLoading(true)
    setLaporanPendapatanData([])
    setLaporanWaktuSewaData([])
    const responsePendapatan = await getLaporanPendapatan()
    if (responsePendapatan && responsePendapatan.status === 200) {
      setLaporanPendapatanData(responsePendapatan?.data?.data || [])
    }
    const responseWaktuSewa = await getLaporanWaktuSewa()
    if (responseWaktuSewa && responseWaktuSewa.status === 200) {
      setLaporanWaktuSewaData(responseWaktuSewa?.data?.data || [])
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    if (monthYearOptions && monthYearOptions.length > 0) {
      const currentMonthYear = locale.date.replace('Agu', 'Agt')
      const currentMonthYearOption = monthYearOptions.find(
        (monthYearOption) => monthYearOption.label === currentMonthYear,
      )
      setSelectedMonthYear(currentMonthYearOption.value)
    }
  }, [monthYearOptions, locale])

  useEffect(() => {
    fetchLaporanData()
  }, [])

  return {
    data: {
      belowChartData,
      horizontalChartData,
      monthYearOptions,
      summary,
      verticalChartData,
    },
    handler: {
      handleChangeTab,
      handleChangeBelowTab,
      handleChangeMonthYear,
      setSelectedDate,
      setSelectedLocaleDate,
    },
    state: {
      currentDate,
      currentTab,
      belowCurrentTab,
      locale,
      selectedDate,
      selectedLocaleDate,
      selectedMonthYear,
    },
  }
}

export default useCustom
