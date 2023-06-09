import { colors } from '~/styles/theme'

export const BUTTON_VARIANT_KEY = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  NO_OUTLINED: 'no-outlined',
}

export const BUTTON_STYLE_MAPPING = {
  [BUTTON_VARIANT_KEY.PRIMARY]: {
    borderColor: 'transparent',
    borderColorHover: 'transparent',
    borderStyle: 'none',
    borderStyleHover: 'none',
    borderWidth: '0px',
    borderWidthHover: '0px',
    backgroundColor: colors.White,
    backgroundColorDisabled: colors.Mischka,
    backgroundColorDisabledHover: colors.GreyChateau,
    backgroundColorHover: colors.White,
    backgroundColorFocus: colors.White,
    textColor: colors.MineShaft,
    textColorHover: colors.MineShaft,
    textColorDisabled: colors.MineShaft,
  },
  [BUTTON_VARIANT_KEY.SECONDARY]: {
    borderColor: colors.ForestGreen,
    borderColorHover: colors.ForestGreen,
    borderStyle: 'solid',
    borderStyleHover: 'solid',
    borderWidth: '1px',
    borderWidthHover: '1px',
    backgroundColor: colors.ForestGreen,
    backgroundColorDisabled: colors.Mischka,
    backgroundColorDisabledHover: colors.GreyChateau,
    backgroundColorHover: colors.ForestGreen,
    backgroundColorFocus: colors.ForestGreen,
    textColor: colors.White,
    textColorHover: colors.White,
    textColorDisabled: colors.White,
  },
  [BUTTON_VARIANT_KEY.NO_OUTLINED]: {
    borderColor: 'transparent',
    borderColorHover: 'transparent',
    borderStyle: 'none',
    borderStyleHover: 'none',
    borderWidth: '0px',
    borderWidthHover: '0px',
    backgroundColor: colors.White,
    backgroundColorDisabled: colors.Mischka,
    backgroundColorDisabledHover: colors.GreyChateau,
    backgroundColorHover: colors.White,
    backgroundColorFocus: colors.White,
    textColor: colors.ToryBlue,
    textColorHover: colors.ToryBlue,
    textColorDisabled: colors.White,
  },
}
