import { makeStyles } from '@mui/styles'

import { fontSize } from '~/styles/theme'

import { ALERT_STYLE_MAPPING } from './helper'

const style = makeStyles(() => ({
  action: {
    color: ({ severity }) => ALERT_STYLE_MAPPING[severity].textColor,
  },
  alert: {
    borderRadius: '8px',
    backgroundColor: ({ severity }) => ALERT_STYLE_MAPPING[severity].backgroundColor,
    borderColor: ({ severity }) => ALERT_STYLE_MAPPING[severity].borderColor,
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  message: {
    color: ({ severity }) => ALERT_STYLE_MAPPING[severity].textColor,
    fontSize: fontSize[14],
  },
}))

export default style
