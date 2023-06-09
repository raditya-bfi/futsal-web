import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
  MENU_TAB_KEY,
  MENU_TAB_VALUE,
  MENU_TAB_VALUE_ROUTE_MAPPING,
  MENU_TAB_ROUTE_VALUE_MAPPING,
} from '~/constants/general'
import useAuth from '~/utils/auth/useAuth'
import { useNavigateParams } from '~/utils/routing'

const useCustom = () => {
  const { handler, state } = useAuth()
  const navigate = useNavigateParams()
  const location = useLocation()

  const [anchorEl, setAnchorEl] = useState(null)
  const [showPopUp, setShowPopUp] = useState(false)
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const [notification, setNotification] = useState([])
  const [currentTab, setCurrentTab] = useState(MENU_TAB_VALUE[MENU_TAB_KEY.DASBOR])

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue)
    navigate(MENU_TAB_VALUE_ROUTE_MAPPING[newValue])
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setShowPopUp(true)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setShowPopUp(false)
  }

  const handleLogout = async () => {
    await handler.handleLogout()
    window.location.reload()
  }

  useEffect(() => {
    if (location?.pathname) {
      const currentPath = location?.pathname.substring(1).split('/')[0]
      if (MENU_TAB_ROUTE_VALUE_MAPPING[currentPath]) {
        setCurrentTab(MENU_TAB_ROUTE_VALUE_MAPPING[currentPath])
      }
    }
  }, [location?.pathname])

  return {
    handler: {
      handleChangeTab,
      handleClick,
      handleClose,
      handleLogout,
    },
    state: {
      anchorEl,
      currentTab,
      notification,
      showPopUp,
      userData: state.userData,
    },
  }
}

export default useCustom
