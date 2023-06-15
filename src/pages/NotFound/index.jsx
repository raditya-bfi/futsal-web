import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { NotFoundIllustration } from '~/assets/svg'
import Button from '~/components/Button'

import useStyle from './style'

function NotFound() {
  const navigate = useNavigate()
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
        <Button
          label='Kembali ke halaman utama'
          handleOnClick={() => {
            navigate('/')
          }}
        />
      </div>
    </>
  )
}

export default NotFound
