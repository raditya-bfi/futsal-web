import { useEffect, useState } from 'react'

import useAuth from '~/utils/auth/useAuth'

const useCustom = () => {
  const [locale, setLocale] = useState({
    date: new Date().toLocaleDateString('id', {
      weekday: 'long',
      month: 'long',
      year: 'numeric',
      day: 'numeric',
    }),
    time: new Date().toLocaleTimeString('id', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hourCycle: 'h12',
    }),
  })
  const [anchorEl, setAnchorEl] = useState(null)
  const { handler } = useAuth()
  const [notification, setNotification] = useState([])

  useEffect(() => {
    const itv = setInterval(() => {
      setLocale({
        date: new Date().toLocaleDateString('id', {
          weekday: 'long',
          month: 'long',
          year: 'numeric',
          day: 'numeric',
        }),
        time: new Date().toLocaleTimeString('id', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hourCycle: 'h12',
        }),
      })
      return clearInterval(itv)
    }, 1000)
  }, [locale])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    await handler.handleLogout()
    window.location.reload()
  }

  return {
    handler: {
      handleMenu,
      handleClose,
      handleLogout,
    },
    state: {
      locale,
      anchorEl,
      notification,
    },
  }
}

export default useCustom
