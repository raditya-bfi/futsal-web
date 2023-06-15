import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { ForbiddenIllustration } from '~/assets/svg'
import Button from '~/components/Button'

import useStyle from './style'

function Forbidden() {
  const navigate = useNavigate()
  const classes = useStyle()

  return (
    <>
      <Helmet title='Forbidden'>
        <meta name='description' content='Forbidden | K3I Korlantas' />
      </Helmet>
      <div className={classes.wrapper}>
        <img className={classes.illustration} alt='forbidden' src={ForbiddenIllustration} />
        <Typography className={classes.label}>
          Maaf, Anda tidak dapat mengakses halaman yang ada cari, Karena anda tidak punya hak akses
          terhadap halaman tersebut. Masukkan atau coba cari halaman lain. Terimakasih
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

export default Forbidden
