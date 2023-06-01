import { useEffect, useMemo, useState } from 'react'

import { DASHBOARD_MENU_TAB_KEY, DASHBOARD_MENU_TAB_VALUE } from '~/constants/general'
import { getLaporanPendapatan } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

import { getHorizontalChartData, getVerticalChartData } from './helper'

const useCustom = () => {
  const { setIsLoading } = useLoading()
  const [locale, setLocale] = useState({
    date: new Date().toLocaleDateString('id', {
      month: 'long',
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
    () => getHorizontalChartData(currentTab, laporanPendapatanData, laporanWaktuSewaData),
    [currentTab, laporanPendapatanData, laporanWaktuSewaData],
  )

  const verticalChartData = useMemo(
    () => getVerticalChartData(currentTab, laporanPendapatanData, laporanWaktuSewaData),
    [currentTab, laporanPendapatanData, laporanWaktuSewaData],
  )

  const fetchLaporanData = async () => {
    await setIsLoading(true)
    setLaporanPendapatanData([])
    const response = await getLaporanPendapatan()
    if (response && response.status === 200) {
      setLaporanPendapatanData(response?.data?.data || [])
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
      currentTab,
      locale,
    },
  }
}

export default useCustom
