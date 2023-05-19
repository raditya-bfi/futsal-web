import { colors } from '~/styles/theme'

export const ALERT_SEVERITY_KEY = {
  ERROR: 'error',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
}

export const ALERT_STYLE_MAPPING = {
  [ALERT_SEVERITY_KEY.ERROR]: {
    borderColor: colors.AlizarinCrimson,
    backgroundColor: colors.FairPink,
    textColor: colors.AlizarinCrimson,
  },
  [ALERT_SEVERITY_KEY.INFO]: {
    borderColor: colors.Gold,
    backgroundColor: colors.Corn,
    textColor: colors.White,
  },
  [ALERT_SEVERITY_KEY.SUCCESS]: {
    borderColor: colors.MountainMeadow,
    backgroundColor: colors.Conifer,
    textColor: colors.White,
  },
  [ALERT_SEVERITY_KEY.WARNING]: {
    borderColor: colors.TreePoppy,
    backgroundColor: colors.OutrageousOrange,
    textColor: colors.White,
  },
}
