import { useEffect, useState } from 'react'

import { getDetailField } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

const useCustom = ({ open, fieldId }) => {
  const { setIsLoading } = useLoading()

  const [fieldData, setFieldData] = useState({})

  const fetchFieldData = async () => {
    await setIsLoading(true)
    // ? Init Field
    setFieldData({})
    // ? Field
    const response = await getDetailField(fieldId)
    if (response && response.status === 200) {
      setFieldData(response?.data?.data || {})
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    if (fieldId) {
      fetchFieldData()
    }
  }, [open, fieldId])

  return {
    handler: {},
    state: {
      fieldData,
    },
  }
}

export default useCustom
