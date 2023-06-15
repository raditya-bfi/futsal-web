export const generateValue = (options, placeholder, keyValue, isOptionObject) => (selected) => {
  // if multiple
  if (Array.isArray(selected)) {
    let selectedOptions
    if (isOptionObject) {
      selectedOptions = options.filter(
        (option) => selected.includes(option?.[keyValue]) && option?.[keyValue] !== 'all',
      )
      selectedOptions = selectedOptions.map(
        (selectedOption) => selectedOption?.label || selectedOption?.value,
      )
    } else {
      selectedOptions = options.filter((option) => selected.includes(option) && option !== 'all')
    }
    return selectedOptions.join(', ') || placeholder
  }
  let selectedValue
  if (isOptionObject) {
    selectedValue = options.find((option) => option[keyValue]?.toString() === selected.toString())

    return selectedValue?.label || selectedValue?.value || placeholder
  }
  selectedValue = options.find((option) => option.toString() === selected.toString())
  return selectedValue || placeholder
}
