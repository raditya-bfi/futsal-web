import moment from 'moment'

export const getPagination = (operatorData = []) => {
  const res = {
    rowPerPage: 10,
    currentPage: 1,
    totalData: 0,
    totalPage: 0,
  }

  if (operatorData && operatorData.length > 0) {
    const totalData = operatorData.length
    // calculate total pages
    res.totalPage = Math.ceil(totalData / res.rowPerPage)
    res.totalData = totalData
  }

  return res
}

export const getOperatorTableData = (operatorData = [], pagination = {}) => {
  const res = []
  if (operatorData && operatorData.length > 0) {
    // calculate start and end item indexes
    const startIndex = (pagination.currentPage - 1) * pagination.rowPerPage
    const endIndex = Math.min(startIndex + pagination.rowPerPage - 1, pagination.totalData - 1)

    for (let counter = startIndex; counter <= endIndex; counter += 1) {
      res.push({
        key: counter,
        id: operatorData[counter]?.user_id,
        user_id: operatorData[counter]?.user_id,
        name: operatorData[counter]?.name,
        username: operatorData[counter]?.username,
        no_hp: operatorData[counter]?.no_hp,
        isaktif: operatorData[counter]?.isaktif,
        updated_at: moment(operatorData[counter]?.updated_at).format('YYYY-MM-DD hh:mm:ss'),
      })
    }
  }

  return res
}
