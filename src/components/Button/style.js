import { makeStyles } from '@mui/styles'

import { fontSize } from '~/styles/theme'

import { BUTTON_STYLE_MAPPING } from './helper'

const style = makeStyles((theme) => ({
  button: {
    backgroundColor: ({ disabled, variant }) =>
      disabled
        ? BUTTON_STYLE_MAPPING[variant].backgroundColorDisabled
        : BUTTON_STYLE_MAPPING[variant].backgroundColor,
    borderColor: ({ variant }) => BUTTON_STYLE_MAPPING[variant].borderColor,
    borderStyle: ({ variant }) => BUTTON_STYLE_MAPPING[variant].borderStyle,
    borderWidth: ({ variant }) => BUTTON_STYLE_MAPPING[variant].borderWidth,
    color: ({ disabled, variant }) =>
      disabled
        ? BUTTON_STYLE_MAPPING[variant].textColorDisabled
        : BUTTON_STYLE_MAPPING[variant].textColor,
    fontSize: fontSize[20],
    fontWeight: theme.typography.fontWeightMedium,
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    textTransform: 'none',
    pointerEvents: ({ disabled }) => (disabled ? 'auto !important' : 'inherit'),
    '&:focus': {
      backgroundColor: ({ disabled, variant }) =>
        disabled
          ? BUTTON_STYLE_MAPPING[variant].backgroundColorDisabled
          : BUTTON_STYLE_MAPPING[variant].backgroundColorFocus,
    },
    '&:hover': {
      backgroundColor: ({ disabled, variant }) =>
        disabled
          ? BUTTON_STYLE_MAPPING[variant].backgroundColorDisabledHover
          : BUTTON_STYLE_MAPPING[variant].backgroundColorHover,
      borderColor: ({ variant }) => BUTTON_STYLE_MAPPING[variant].borderColorHover,
      borderStyle: ({ variant }) => BUTTON_STYLE_MAPPING[variant].borderStyleHover,
      borderWidth: ({ variant }) => BUTTON_STYLE_MAPPING[variant].borderWidthHover,
      color: ({ variant }) => BUTTON_STYLE_MAPPING[variant].textColorHover,
    },
  },
}))

export default style
