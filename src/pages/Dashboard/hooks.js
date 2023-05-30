import { useMemo, useState } from 'react'

import { DASHBOARD_MENU_TAB_KEY, DASHBOARD_MENU_TAB_VALUE } from '~/constants/general'

import { getHorizontalChartData, getVerticalChartData } from './helper'

const useCustom = () => {
  const [locale, setLocale] = useState({
    date: new Date().toLocaleDateString('id', {
      month: 'long',
      year: 'numeric',
    }),
  })

  const [currentTab, setCurrentTab] = useState(
    DASHBOARD_MENU_TAB_VALUE[DASHBOARD_MENU_TAB_KEY.PENDAPATAN],
  )

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue)
  }

  const horizontalChartData = useMemo(() => getHorizontalChartData(currentTab), [currentTab])
  const verticalChartData = useMemo(() => getVerticalChartData(currentTab), [currentTab])

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
