import React from 'react'

import { Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { NotFoundIllustration } from '~/assets/svg'

import useStyle from './style'

function NotFound() {
  const classes = useStyle()

  return (
    <>
      <Helmet title='Not Found'>
        <meta name='description' content='Not Found | K3I Korlantas' />
      </Helmet>
      <div className={classes.wrapper}>
        <img className={classes.illustration} alt='not-found' src={NotFoundIllustration} />
        <Typography className={classes.label}>
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Silahkan periksa kembali URL yang Anda
          masukkan atau coba cari halaman lain. Terimakasih
        </Typography>
      </div>
    </>
  )
}

export default NotFound
