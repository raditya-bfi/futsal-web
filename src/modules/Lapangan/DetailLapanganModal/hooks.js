import { useEffect, useState } from 'react'

import { getDetailField } from '~/helpers/request'
import useAuth from '~/utils/auth/useAuth'
import useLoading from '~/utils/loading/useLoading'
import { useNavigateParams } from '~/utils/routing'

const useCustom = ({ open, fieldId }) => {
  const { state } = useAuth()
  const { setIsLoading } = useLoading()
  const navigate = useNavigateParams()

  const [fieldData, setFieldData] = useState({})

  const handleEditNavigation = (paramId) => {
    navigate('/lapangan/edit', {
      id: paramId,
    })
  }

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
    handler: {
      handleEditNavigation,
    },
    state: {
      fieldData,
      userData: state?.userData,
    },
  }
}

export default useCustom
