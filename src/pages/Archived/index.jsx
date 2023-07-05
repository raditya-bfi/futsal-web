import { InfoOutlined, NavigateBeforeRounded } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import GridTable from '~/components/GridTable'
import Snackbar from '~/components/Snackbar'
import DetailOperatorModal from '~/modules/Operator/DetailOperatorModal'
import EditOperatorModal from '~/modules/Operator/EditOperatorModal'

import useCustom from './hooks'
import useStyles from './style'

export const getArchivedColumns = () => [
  {
    field: 'name',
    headerName: 'Nama Operator',
    width: '160px',
    editable: false,
    justifyContentHeader: 'start',
    renderCell: (cellValues) => <div>{cellValues?.name}</div>,
  },
  {
    field: 'username',
    headerName: 'Id Unik',
    width: '160px',
    editable: false,
    justifyContentHeader: 'start',
    renderCell: (cellValues) => <div>{`@${cellValues?.username}-${cellValues?.user_id}`}</div>,
  },
  {
    field: 'no_hp',
    headerName: 'Nomor Telepon',
    width: '160px',
    editable: false,
    justifyContentHeader: 'start',
    renderCell: (cellValues) => <div>{cellValues?.no_hp}</div>,
  },
  {
    field: 'updated_at',
    headerName: 'Tanggal diarsipkan',
    width: '160px',
    editable: false,
    justifyContentHeader: 'start',
    renderCell: (cellValues) => <div>{cellValues?.updated_at}</div>,
  },
  {
    field: 'isaktif',
    headerName: 'Status',
    width: '160px',
    editable: false,
    justifyContentHeader: 'start',
    renderCell: (cellValues) => <div>{cellValues?.isaktif === true ? 'Aktif' : 'Nonaktif'}</div>,
  },
]

function ArchivedPage() {
  const { data, handler, state } = useCustom()
  const classes = useStyles()

  return (
    <>
      <Helmet title='Arsip Operator Nonaktif'>
        <meta name='description' content='Arsip Operator Nonaktif | Futsal Gembira' />
      </Helmet>
      <Snackbar
        handleClose={handler.handleCloseSnackbar}
        message={state?.alert?.message}
        open={state?.alert?.open}
        severity={state?.alert?.severity}
      />
      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Box className={classes.titleWrapper}>
            <IconButton className={classes.backIcon} onClick={() => handler?.handleBackButton()}>
              <NavigateBeforeRounded />
            </IconButton>
            <Typography className={classes.title}>Arsip Operator Nonaktif</Typography>
          </Box>
        </Box>
        <Box className={classes.pageContent}>
          <Box className={classes.contentInfo}>
            <Typography className={classes.infoLabel}>
              <InfoOutlined />
              Daftar yang memuat data data kumpulan operator yang statusnya bersifat nonaktif.
              Operator yang status bersifat nonaktif tidak dapat login
            </Typography>
          </Box>
          <Box className={classes.content}>
            <GridTable
              columns={getArchivedColumns()}
              rows={data?.operatorTableData}
              page={state?.pagination?.currentPage}
              rowsPerPage={state?.pagination?.rowPerPage}
              totalData={state?.pagination?.totalData}
              totalPage={state?.pagination?.totalPage}
              handleChangePage={handler?.handleChangePage}
              handleClickRow={handler?.handleOpenDetailModal}
            />
          </Box>
        </Box>
      </Box>
      <DetailOperatorModal
        alert={state?.alert}
        setAlert={handler?.setAlert}
        setIsNeedRefetch={handler?.setIsNeedRefetch}
        onClose={handler?.handleCloseDetailModal}
        open={state?.openDetailModal}
        setOpenModal={handler?.setOpenDetailModal}
        userId={state?.selectedUserId}
        handleSuntingOperator={handler?.handleSuntingOperator}
      />
      <EditOperatorModal
        alert={state?.alert}
        setAlert={handler?.setAlert}
        editPhotoMode
        editKtpMode
        setIsNeedRefetch={handler?.setIsNeedRefetch}
        onClose={handler?.handleCloseEditModal}
        open={state?.openEditModal}
        setOpenModal={handler?.setOpenEditModal}
        userId={state?.selectedUserId}
      />
    </>
  )
}

export default ArchivedPage
