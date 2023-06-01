/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import { Close } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, Dialog, DialogContent, Typography } from '@mui/material'

import useStyle from './style'

function CustomModal({
  children,
  open,
  onClose,
  modalPadding,
  modalBorderRadius,
  width,
  ...props
}) {
  const classes = useStyle({
    modalPadding,
    modalBorderRadius,
    width,
  })
  return (
    <Dialog onClose={onClose} open={open} {...props} classes={{ paper: classes.paper }}>
      <Box className={classes.modal}>{children}</Box>
    </Dialog>
  )
}

CustomModal.Divider = function CustomModalDivider({ ...props }) {
  const classes = useStyle()
  return <div className={classes.divider} {...props} />
}

CustomModal.Header = function CustomModalHeaderH2({ onClose, closeButton, children, ...props }) {
  const classes = useStyle()
  return (
    <Box className={classes.header} {...props}>
      {children}
      {closeButton !== false && (
        <Grid container justifyContent='flex-end' width='max-content'>
          <IconButton onClick={onClose}>
            <Close className={classes.closeButton} />
          </IconButton>
        </Grid>
      )}
    </Box>
  )
}

CustomModal.HeaderTitle = function CustomModalHeaderTitle({ size, children, ...props }) {
  const classes = useStyle({ size })
  return (
    <Typography component='div' className={classes.headerTitle} {...props}>
      {children}
    </Typography>
  )
}

CustomModal.Content = function CustomModalContent({ contentMaxHeight, children, ...props }) {
  const classes = useStyle({ contentMaxHeight })
  return (
    <DialogContent className={classes.content} {...props}>
      {children}
    </DialogContent>
  )
}

CustomModal.Footer = function CustomModalFooter({ children, footerJustifyContent, ...props }) {
  const classes = useStyle({ footerJustifyContent })
  return (
    <Grid className={classes.footer} {...props}>
      {children}
    </Grid>
  )
}

CustomModal.ButtonSmall = function CustomModalButtonSmall({ children, otherClass, ...props }) {
  const classes = useStyle()
  return (
    <Button className={`${classes.buttonSmall} ${otherClass}`} {...props}>
      {children}
    </Button>
  )
}

CustomModal.ButtonMedium = function CustomModalButtonMedium({ children, otherClass, ...props }) {
  const classes = useStyle()
  return (
    <Button className={`${classes.buttonMedium} ${otherClass}`} {...props}>
      {children}
    </Button>
  )
}

export default CustomModal
