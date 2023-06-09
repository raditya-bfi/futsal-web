import { useCallback, useEffect, useState } from 'react'

import { getDetailOperator, patchStatusOperator } from '~/helpers/request'
import useLoading from '~/utils/loading/useLoading'

const useCustom = ({ setAlert, setIsNeedRefetch, open, setOpenModal, userId }) => {
  const { setIsLoading } = useLoading()

  const [operatorData, setOperatorData] = useState({})

  const handleUpdateStatusOperator = useCallback(
    async (userIdentity, status) => {
      await setIsLoading(true)
      const response = await patchStatusOperator(userIdentity, {
        isaktif: status !== true,
      })
      if (response && (response?.status === 200 || response?.status === 201)) {
        setAlert((prev) => ({
          ...prev,
          open: true,
          title: '',
          severity: 'success',
          message:
            status !== true
              ? 'Berhasil mengaktifkan Operator - Pindah ke Daftar Operator'
              : 'Berhasil menonaktifkan Operator - Pindah ke arsip',
        }))
      } else {
        setAlert((prev) => ({
          ...prev,
          open: true,
          title: '',
          severity: 'error',
          message:
            response?.data?.message || response?.statusText || status !== true
              ? 'Gagal mengaktifkan Operator - Pindah ke Daftar Operator'
              : 'Gagal menonaktifkan Operator - Pindah ke arsip',
        }))
      }
      await setIsLoading(false)
      setOpenModal(false)
      setIsNeedRefetch(true)
    },
    [setAlert, setIsNeedRefetch, setOpenModal, setIsLoading],
  )

  const fetchOperatorData = async () => {
    await setIsLoading(true)
    // ? Init Operators
    setOperatorData({})
    // ? Operators
    const response = await getDetailOperator(userId)
    if (response && response.status === 200) {
      setOperatorData(response?.data?.data || {})
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    if (userId) {
      fetchOperatorData()
    }
  }, [open, userId])

  return {
    handler: {
      handleUpdateStatusOperator,
    },
    state: {
      operatorData,
    },
  }
}

export default useCustom
