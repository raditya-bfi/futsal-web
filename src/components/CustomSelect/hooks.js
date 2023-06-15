import { useEffect, useState, useRef } from 'react'

const useCustom = ({ options }) => {
  const inputRef = useRef()

  const [searchVal, setSearchVal] = useState('')
  const [searchOptions, setSearchOptions] = useState(options)

  const handleSearchVal = (event) => {
    event.preventDefault()
    setSearchVal(event.target.value)
  }

  useEffect(() => {
    const searchValues = searchVal.length !== 0 ? searchVal?.toLowerCase() : ''
    const optionResult = options?.filter((val) => val?.label?.toLowerCase().includes(searchValues))

    setTimeout(() => {
      setSearchOptions(optionResult)
      inputRef?.current?.focus()
    }, 1000)
  }, [searchVal, options])

  return {
    handler: {
      handleSearchVal,
    },
    state: {
      searchVal,
      searchOptions,
    },
    refs: {},
  }
}

export default useCustom
