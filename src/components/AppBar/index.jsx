import LogoutIcon from '@mui/icons-material/Logout'
import {
  AppBar,
  Avatar,
  Box,
  Fade,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Tabs,
  Tab,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { capitalize, toLower } from 'lodash-es'

import { MENU_TAB_KEY, MENU_TAB_MAPPING, MENU_TAB_VALUE } from '~/constants/general'
import { stringAvatar } from '~/utils/string'

import useCustom from './hooks'
import useStyles from './style'

function CustomAppBar() {
  const classes = useStyles()
  const { handler, state } = useCustom()

  return (
    <Box>
      <AppBar className={classes.appBarRoot}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.container}>
            <Box className={classes.mainHeader}>
              <Box className={classes.appTitleWrapper}>
                <Typography className={classes.appTitle}>FUTSAL GEMBIRA</Typography>
              </Box>
              <Box className={classes.headerMenu}>
                <Box className={classes.menuTabs}>
                  <Tabs
                    classes={{
                      indicator: classes.tabsIndicator,
                      root: classes.tabsContainer,
                    }}
                    value={state.currentTab}
                    onChange={handler.handleChangeTab}
                  >
                    {toLower(state?.userData.type) === 'admin' && (
                      <Tab
                        label={
                          <div
                            className={
                              state?.currentTab === MENU_TAB_VALUE[MENU_TAB_KEY.DASBOR]
                                ? classes.activeTab
                                : classes.tab
                            }
                          >
                            <Tooltip
                              title={
                                state?.currentTab !== MENU_TAB_VALUE[MENU_TAB_KEY.DASBOR]
                                  ? MENU_TAB_MAPPING[MENU_TAB_KEY.DASBOR].name
                                  : ''
                              }
                            >
                              <img
                                className={classes.tabIcon}
                                src={MENU_TAB_MAPPING[MENU_TAB_KEY.DASBOR].icon}
                                alt={`${MENU_TAB_MAPPING[
                                  MENU_TAB_KEY.DASBOR
                                ].name.toLowerCase()}-menu-tab`}
                              />
                            </Tooltip>
                            {state?.currentTab === MENU_TAB_VALUE[MENU_TAB_KEY.DASBOR] && (
                              <Typography className={classes.tabLabel} fontWeight={500}>
                                {MENU_TAB_MAPPING[MENU_TAB_KEY.DASBOR].name}
                              </Typography>
                            )}
                          </div>
                        }
                        value={MENU_TAB_VALUE[MENU_TAB_KEY.DASBOR]}
                      />
                    )}
                    <Tab
                      label={
                        <div
                          className={
                            state?.currentTab === MENU_TAB_VALUE[MENU_TAB_KEY.PENYEWAAN]
                              ? classes.activeTab
                              : classes.tab
                          }
                        >
                          <Tooltip
                            title={
                              state?.currentTab !== MENU_TAB_VALUE[MENU_TAB_KEY.PENYEWAAN]
                                ? MENU_TAB_MAPPING[MENU_TAB_KEY.PENYEWAAN].name
                                : ''
                            }
                          >
                            <img
                              className={classes.tabIcon}
                              src={MENU_TAB_MAPPING[MENU_TAB_KEY.PENYEWAAN].icon}
                              alt={`${MENU_TAB_MAPPING[
                                MENU_TAB_KEY.PENYEWAAN
                              ].name.toLowerCase()}-menu-tab`}
                            />
                          </Tooltip>
                          {state?.currentTab === MENU_TAB_VALUE[MENU_TAB_KEY.PENYEWAAN] && (
                            <Typography className={classes.tabLabel} fontWeight={500}>
                              {MENU_TAB_MAPPING[MENU_TAB_KEY.PENYEWAAN].name}
                            </Typography>
                          )}
                        </div>
                      }
                      value={MENU_TAB_VALUE[MENU_TAB_KEY.PENYEWAAN]}
                    />
                    <Tab
                      label={
                        <div
                          className={
                            state?.currentTab === MENU_TAB_VALUE[MENU_TAB_KEY.LAPANGAN]
                              ? classes.activeTab
                              : classes.tab
                          }
                        >
                          <Tooltip
                            title={
                              state?.currentTab !== MENU_TAB_VALUE[MENU_TAB_KEY.LAPANGAN]
                                ? MENU_TAB_MAPPING[MENU_TAB_KEY.LAPANGAN].name
                                : ''
                            }
                          >
                            <img
                              className={classes.tabIcon}
                              src={MENU_TAB_MAPPING[MENU_TAB_KEY.LAPANGAN].icon}
                              alt={`${MENU_TAB_MAPPING[
                                MENU_TAB_KEY.LAPANGAN
                              ].name.toLowerCase()}-menu-tab`}
                            />
                          </Tooltip>

                          {state?.currentTab === MENU_TAB_VALUE[MENU_TAB_KEY.LAPANGAN] && (
                            <Typography className={classes.tabLabel} fontWeight={500}>
                              {MENU_TAB_MAPPING[MENU_TAB_KEY.LAPANGAN].name}
                            </Typography>
                          )}
                        </div>
                      }
                      value={MENU_TAB_VALUE[MENU_TAB_KEY.LAPANGAN]}
                    />
                    {toLower(state?.userData.type) === 'admin' && (
                      <Tab
                        label={
                          <div
                            className={
                              state?.currentTab === MENU_TAB_VALUE[MENU_TAB_KEY.OPERATOR]
                                ? classes.activeTab
                                : classes.tab
                            }
                          >
                            <Tooltip
                              title={
                                state?.currentTab !== MENU_TAB_VALUE[MENU_TAB_KEY.OPERATOR]
                                  ? MENU_TAB_MAPPING[MENU_TAB_KEY.OPERATOR].name
                                  : ''
                              }
                            >
                              <img
                                className={classes.tabIcon}
                                src={MENU_TAB_MAPPING[MENU_TAB_KEY.OPERATOR].icon}
                                alt={`${MENU_TAB_MAPPING[
                                  MENU_TAB_KEY.OPERATOR
                                ].name.toLowerCase()}-menu-tab`}
                              />
                            </Tooltip>
                            {state?.currentTab === MENU_TAB_VALUE[MENU_TAB_KEY.OPERATOR] && (
                              <Typography className={classes.tabLabel} fontWeight={500}>
                                {MENU_TAB_MAPPING[MENU_TAB_KEY.OPERATOR].name}
                              </Typography>
                            )}
                          </div>
                        }
                        value={MENU_TAB_VALUE[MENU_TAB_KEY.OPERATOR]}
                      />
                    )}
                  </Tabs>
                </Box>
                <div className={classes.avatarWrapper}>
                  <Avatar
                    className={classes.avatar}
                    onClick={handler.handleClick}
                    src={state?.userData?.thumbnail && state?.userData?.thumbnail}
                  >
                    {stringAvatar(state?.userData?.name)}
                  </Avatar>
                </div>
                <Popover
                  className={classes.menu}
                  anchorEl={state.anchorEl}
                  open={state.showPopUp}
                  onClose={() => handler.handleClose()}
                  TransitionComponent={Fade}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                >
                  <Box className={classes.userInfo}>
                    <Typography className={classes.roleName} fontWeight={600}>
                      {capitalize(state?.userData?.name)}
                    </Typography>
                    <Typography
                      className={classes.email}
                    >{`@${state?.userData?.type}-${state?.userData?.user_id}`}</Typography>
                  </Box>
                  <MenuItem onClick={() => handler.handleLogout()}>
                    <ListItemIcon>
                      <LogoutIcon className={classes.menuIcon} />
                    </ListItemIcon>
                    <ListItemText className={classes.menuLabel}>Keluar</ListItemText>
                  </MenuItem>
                </Popover>
              </Box>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default CustomAppBar
