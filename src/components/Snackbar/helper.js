import { colors } from '~/styles/theme'

export const ALERT_SEVERITY_KEY = {
  ERROR: 'error',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
}

export const ALERT_STYLE_MAPPING = {
  [ALERT_SEVERITY_KEY.ERROR]: {
    borderColor: colors.White,
    backgroundColor: colors.TricornBlack,
    textColor: colors.AlizarinCrimson,
  },
  [ALERT_SEVERITY_KEY.INFO]: {
    borderColor: colors.White,
    backgroundColor: colors.TricornBlack,
    textColor: colors.Corn,
  },
  [ALERT_SEVERITY_KEY.SUCCESS]: {
    borderColor: colors.White,
    backgroundColor: colors.TricornBlack,
    textColor: colors.Malachite,
  },
  [ALERT_SEVERITY_KEY.WARNING]: {
    borderColor: colors.White,
    backgroundColor: colors.TricornBlack,
    textColor: colors.OutrageousOrange,
  },
}
