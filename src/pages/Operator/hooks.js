import { useEffect, useState } from 'react'

import { getListOfOperator } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

const useCustom = () => {
  const { setIsLoading } = useLoading()

  const [operatorsData, setOperatorsData] = useState([])

  const fetchOperatorsData = async () => {
    await setIsLoading(true)
    // ? Init Operators
    setOperatorsData([])
    // ? Operators
    const response = await getListOfOperator({
      type: 'active',
    })
    if (response.status === 200) {
      setOperatorsData(response?.data?.data || [])
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    fetchOperatorsData()
  }, [])

  return {
    data: {
      operatorsData,
    },
    handler: {},
    state: {},
  }
}

export default useCustom
