import PropTypes from 'prop-types'

import { Box, Button, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'

import useCustom from './hooks'
import useStyles from './style'

function ButtonMenu({ menus, buttonProps, menuHeader }) {
  const { state, handler } = useCustom()
  const classes = useStyles()

  return (
    <>
      {buttonProps.icon ? (
        <IconButton display='inline-block' onClick={handler.handleMenu}>
          {buttonProps.icon}
        </IconButton>
      ) : (
        <Button startIcon={buttonProps.startIcon} onClick={handler.handleMenu}>
          <Typography className={buttonProps.labelClasses}>{buttonProps.label}</Typography>
        </Button>
      )}
      <Menu
        id='menu-appbar'
        elevation={2}
        anchorEl={state.anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={!!state.anchorEl}
        onClose={handler.handleClose}
      >
        {menuHeader && <Box paddingX={4}>{menuHeader}</Box>}
        {menus.map((menu, id) => (
          <MenuItem
            className={classes.menuItem}
            onClick={menu.action}
            key={`profilemenu-${id + 1}`}
            disabled={menu.disabled}
          >
            <Grid container gap={4} alignItems='center'>
              {menu?.icon && (
                <Grid item xs alignItems='center'>
                  {menu.icon}
                </Grid>
              )}
              <Grid item>{menu.label}</Grid>
            </Grid>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

ButtonMenu.propTypes = {
  buttonProps: PropTypes.shape({
    label: PropTypes.string,
    startIcon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]),
    icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]),
    labelClasses: PropTypes.string,
  }),
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func,
    }),
  ),
  menuHeader: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]),
}

export default ButtonMenu
