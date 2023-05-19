import { useState } from 'react'

const useCustom = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return {
    handler: {
      handleMenu,
      handleClose,
    },
    state: {
      anchorEl,
    },
  }
}

export default useCustom
