import PropTypes from 'prop-types'

import { ExpandMore } from '@mui/icons-material'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  FilledInput,
} from '@mui/material'
import { isObject, isUndefined } from 'lodash-es'

import Search from '~/components/Search'
import { fontSize } from '~/styles/theme'

import { generateValue } from './helper'
import useCustom from './hooks'
import useStyle from './style'

function CustomSelect({
  className,
  allowSearch,
  disabled,
  error,
  helperText,
  handleChange,
  handleSearchCustom,
  isFormControlFullWidth,
  isFullWidth,
  isReadOnly,
  keyValue,
  label,
  labelSize,
  multiple,
  name,
  options,
  placeholder,
  placeholderSearch,
  required,
  searchCustomVal,
  value,
  variant,
  width,
}) {
  const isError = error !== '' && error !== false
  const isEmpty = !!(options.length < 0 || value !== '')
  const isOptionObject = options.every((option) => isObject(option))
  const classes = useStyle({ isError, isEmpty, isFullWidth, labelSize, width })
  const { handler, state, refs } = useCustom({ options })
  return (
    <FormControl
      variant={variant}
      sx={{ m: '0px !important', left: '0px', width: isFormControlFullWidth ? '100%' : 'auto' }}
    >
      {label && !isEmpty && (
        <InputLabel
          classes={{
            root: classes.rootLabel,
            focused: classes.focusedLabel,
          }}
          shrink={false}
        >
          {label}
        </InputLabel>
      )}
      <Select
        className={`${className} ${classes.select}`}
        fullWidth={isFullWidth}
        label={label}
        name={name}
        disabled={disabled}
        error={error}
        IconComponent={ExpandMore}
        input={
          variant === 'outlined' ? (
            <OutlinedInput
              classes={{
                root: classes.outlinedInput,
                notchedOutline: classes.notchedOutline,
              }}
            />
          ) : (
            <FilledInput
              classes={{
                root: classes.outlinedInput,
                notchedOutline: classes.notchedOutline,
              }}
            />
          )
        }
        inputProps={{ readOnly: isReadOnly }}
        MenuProps={{
          classes: { paper: classes.paper },
          variant: 'menu',
        }}
        onChange={handleChange}
        value={value}
        multiple={multiple}
        renderValue={generateValue(options, placeholder, keyValue, isOptionObject)}
        required={required}
      >
        {placeholder && (
          <MenuItem
            value=''
            classes={{
              selected: classes.menuItemSelected,
            }}
            className={`${classes.menuItem} ${classes.menuItemPlaceholder}`}
            selected
          >
            {placeholder}
          </MenuItem>
        )}
        {allowSearch && (
          <MenuItem
            classes={{
              selected: classes.menuItemSelected,
            }}
            autoFocus={false}
            onKeyDown={(e) => e.stopPropagation()}
            className={classes.searchFieldContainer}
            // eslint-disable-next-line react/no-children-prop
            children={
              <div
                style={{
                  width: '100%',
                  padding: '8px',
                  boxShadow: '0px 2px 4px rgba(96, 97, 112, 0.16)',
                }}
              >
                <Search
                  variant={variant}
                  inputRef={refs.inputRef}
                  searchVal={isUndefined(searchCustomVal) ? state.searchVal : searchCustomVal}
                  handleSearch={
                    isUndefined(handleSearchCustom) ? handler.handleSearchVal : handleSearchCustom
                  }
                  className={classes.searchField}
                  isFullWidth
                  width='100%'
                  placeholder={placeholderSearch}
                />
              </div>
            }
          />
        )}
        {state.searchOptions?.map((option) => (
          <MenuItem
            classes={{
              selected: classes.menuItemSelected,
            }}
            onKeyDown={(e) => e.stopPropagation()}
            key={option.key}
            value={option.value}
            className={classes.menuItem}
            disabled={option.disabled}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>
    </FormControl>
  )
}

CustomSelect.defaultProps = {
  className: null,
  allowSearch: false,
  disabled: false,
  error: false,
  helperText: '',
  isFormControlFullWidth: false,
  isFullWidth: false,
  isReadOnly: false,
  keyValue: 'value',
  label: '',
  labelSize: fontSize[16],
  multiple: false,
  name: '',
  options: [],
  placeholder: undefined,
  placeholderSearch: undefined,
  value: '',
  variant: 'outlined',
  width: '20vw',
}

CustomSelect.propTypes = {
  className: PropTypes.string,
  allowSearch: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  handleChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  isFormControlFullWidth: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  keyValue: PropTypes.oneOf(['key', 'value']),
  label: PropTypes.string,
  labelSize: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])),
  placeholder: PropTypes.string,
  placeholderSearch: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
  ]),
  variant: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CustomSelect
