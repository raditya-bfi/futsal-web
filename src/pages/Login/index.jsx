import { Typography } from '@mui/material'
import { Field, Formik, Form } from 'formik'

import { KorlantasLogo, LoginHero, MainLogo } from '~/assets/png'
import Button from '~/components/Button'
import CustomCheckBox from '~/components/CustomCheckbox'
import CustomField from '~/components/CustomField'
import Snackbar from '~/components/Snackbar'

import useCustom from './hooks'
import loginSchema from './schema'
import useStyle from './style'

function Login() {
  const { handler, refs, state } = useCustom()
  const classes = useStyle()
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img className={classes.backgroundLogo} src={KorlantasLogo} alt='korlantas-logo-login' />
        <div className={classes.loginBox}>
          <Formik
            innerRef={refs?.formikRef}
            initialValues={{
              username: '',
              password: '',
              rememberMe: false,
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true)
              handler.handleSubmit(values)
              setTimeout(() => {
                setSubmitting(false)
              }, 1000)
            }}
            validationSchema={loginSchema}
          >
            {({ errors, handleSubmit, isSubmitting, touched }) => (
              <Form className={classes.loginForm}>
                <Snackbar
                  handleClose={handler.handleCloseSnackbar}
                  message={state?.alert?.message}
                  open={state?.alert?.open}
                  severity={state?.alert?.severity}
                />
                <Typography fontWeight={700} className={classes.title}>
                  DASHBOARD EXECUTIVE
                </Typography>
                <img className={classes.mainLogo} src={MainLogo} alt='main-logo-login' />
                <div className={classes.input}>
                  <Field
                    isFullWidth
                    name='username'
                    type='text'
                    label='Nama Pengguna atau Akun'
                    placeholder='Nama Pengguna atau Akun'
                    as={CustomField}
                    error={errors.username}
                    touch={touched.username}
                  />
                  <Field
                    isFullWidth
                    name='password'
                    type='password'
                    label='Sandi'
                    placeholder='Sandi'
                    as={CustomField}
                    error={errors.password}
                    touch={touched.password}
                  />
                </div>
                <div className={classes.remember}>
                  <Field name='rememberMe' type='checkbox' label='Ingat Saya' as={CustomCheckBox} />
                </div>
                <div className={classes.buttonWrapper}>
                  <Button
                    disabled={isSubmitting}
                    handleOnClick={handleSubmit}
                    isFullWidth
                    label='Masuk / Login'
                    loading={isSubmitting}
                    type='button'
                  />
                </div>
                <div className={classes.forgotWrapper}>
                  <a className={classes.forgotLabel} href='#' target='_blank' rel='noreferrer'>
                    Lupa Sandi ?
                  </a>
                </div>
              </Form>
            )}
          </Formik>
          <img className={classes.hero} src={LoginHero} alt='hero-login' />
        </div>
      </div>
    </div>
  )
}

export default Login
