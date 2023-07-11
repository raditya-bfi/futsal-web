import { useEffect, useMemo, useState } from 'react'

import moment from 'moment'

import date from '~/config/date'
import { DASHBOARD_MENU_TAB_KEY, DASHBOARD_MENU_TAB_VALUE } from '~/constants/general'
import { getLaporanPendapatan, getLaporanWaktuSewa } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

import {
  getBelowChartData,
  getHorizontalChartData,
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

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue)
  }

  const handleChangeBelowTab = (event, newValue) => {
    setBelowCurrentTab(newValue)
  }

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
      getBelowChartData(selectedDate, belowCurrentTab, laporanPendapatanData, laporanWaktuSewaData),
    [belowCurrentTab, selectedDate, laporanPendapatanData, laporanWaktuSewaData],
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
    fetchLaporanData()
  }, [])

  return {
    data: {
      belowChartData,
      horizontalChartData,
      summary,
      verticalChartData,
    },
    handler: {
      handleChangeTab,
      handleChangeBelowTab,
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
    },
  }
}

export default useCustom
