import { useState } from 'react'

import { MENU_TAB_KEY, MENU_TAB_VALUE } from '~/constants/general'
import useAuth from '~/utils/auth/useAuth'

const useCustom = () => {
  const { handler, state } = useAuth()

  const [anchorEl, setAnchorEl] = useState(null)
  const [showPopUp, setShowPopUp] = useState(false)
  const [notification, setNotification] = useState([])
  const [currentTab, setCurrentTab] = useState(MENU_TAB_VALUE[MENU_TAB_KEY.DASBOR])

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue)
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
