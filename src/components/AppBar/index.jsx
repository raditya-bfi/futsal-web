import { NotificationsOutlined } from '@mui/icons-material'
import LogoutIcon from '@mui/icons-material/Logout'
import { AppBar, Box, Container, Stack, Toolbar, Typography } from '@mui/material'

import Logo from '~/assets/png/logo-k3i.png'
import ButtonMenu from '~/components/ButtonDropdown'

import useCustom from './hooks'
import useStyles from './style'

function CustomAppBar() {
  const classes = useStyles()
  const { state } = useCustom()

  const profileMenu = [
    {
      label: 'Logout',
      icon: <LogoutIcon className={classes.menuIcon} />,
      action: async () => {
        // TODO handling logout
      },
    },
  ]

  const notification = () => {
    if (!state.notification?.length) {
      return [
        {
          label: 'notifikasi kosong',
          disabled: true,
        },
      ]
    }
    return state.notification
  }

  return (
    <Box>
      <AppBar className={classes.appBarRoot}>
        <Toolbar>
          <Container maxWidth='xl'>
            <Stack direction='row' justifyContent='space-between' width='100%'>
              <Box>
                <Typography className={classes.textDark} fontSize={12}>
                  Welcome to Dashboard Operasi
                </Typography>
                <Typography className={classes.titleRed}>
                  PUSAT KENDALI KOORDINASI KOMUNIKASI & INFORMASI &nbsp;-
                </Typography>
                <Typography className={classes.titleBlue}>
                  &nbsp; K3I KORLANTAS POLRI - OPERASI KTT FEBRUARY
                </Typography>
              </Box>
              <Stack direction='row' spacing={4} alignItems='center'>
                <Box display='inline-block' textAlign='right'>
                  <Typography className={classes.dateBar}>{state.locale.date}</Typography>
                  <Typography className={classes.timeBar}>{state.locale.time}</Typography>
                </Box>
                <div>
                  <ButtonMenu
                    buttonProps={{
                      icon: <NotificationsOutlined />,
                    }}
                    menus={notification()}
                    menuHeader={<Typography className={classes.menuHeader}>Notifikasi</Typography>}
                  />
                </div>
                <ButtonMenu
                  buttonProps={{
                    startIcon: <img src={Logo} alt='logo-k3i' height={36} width={36} />,
                    label: 'Operation',
                    labelClasses: `${classes.textDark} ${classes.s1}`,
                  }}
                  menus={profileMenu}
                />
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default CustomAppBar
