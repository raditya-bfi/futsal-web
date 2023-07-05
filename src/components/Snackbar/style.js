import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

import { ALERT_STYLE_MAPPING } from './helper'

const style = makeStyles(() => ({
  snackBar: {
    top: '135px',
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.White,
  },
  alert: {
    borderRadius: '15px',
    backgroundColor: ({ severity }) => ALERT_STYLE_MAPPING[severity].backgroundColor,
    borderColor: ({ severity }) => ALERT_STYLE_MAPPING[severity].borderColor,
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.2)',
  },
  message: {
    color: ({ severity }) => ALERT_STYLE_MAPPING[severity].textColor,
    fontSize: fontSize[22],
  },
}))

export default style
