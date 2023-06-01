import { useEffect, useMemo, useState } from 'react'

import { DASHBOARD_MENU_TAB_KEY, DASHBOARD_MENU_TAB_VALUE } from '~/constants/general'
import { getLaporanPendapatan, getLaporanWaktuSewa } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

import { getHorizontalChartData, getVerticalChartData } from './helper'

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

  const [currentTab, setCurrentTab] = useState(
    DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN],
  )

  const [laporanPendapatanData, setLaporanPendapatanData] = useState([])
  const [laporanWaktuSewaData, setLaporanWaktuSewaData] = useState([])

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue)
  }

  const horizontalChartData = useMemo(
    () =>
      getHorizontalChartData(locale?.date, currentTab, laporanPendapatanData, laporanWaktuSewaData),
    [currentTab, locale, laporanPendapatanData, laporanWaktuSewaData],
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
      horizontalChartData,
      verticalChartData,
    },
    handler: {
      handleChangeTab,
    },
    state: {
      currentDate,
      currentTab,
      locale,
    },
  }
}

export default useCustom
