import { Typography } from '@mui/material'
import { Field, Formik, Form } from 'formik'

import Button from '~/components/Button'
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
        <Typography fontWeight={700} className={classes.title}>
          FUTSAL GEMBIRA
        </Typography>
        <div className={classes.loginBox}>
          <Typography fontWeight={700} className={classes.subtitle}>
            Masuk Admin
          </Typography>
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
                <div className={classes.input}>
                  <Typography className={classes.inputLabel}>Email</Typography>
                  <Field
                    className={classes.textInput}
                    isFullWidth
                    name='username'
                    type='text'
                    as={CustomField}
                    error={errors.username}
                    touch={touched.username}
                  />
                  <Typography className={classes.inputLabel}>Password</Typography>
                  <Field
                    className={classes.textInput}
                    isFullWidth
                    name='password'
                    type='password'
                    as={CustomField}
                    error={errors.password}
                    touch={touched.password}
                  />
                </div>
                <div className={classes.buttonWrapper}>
                  <Button
                    disabled={isSubmitting}
                    handleOnClick={handleSubmit}
                    isFullWidth
                    label='Masuk'
                    loading={isSubmitting}
                    type='button'
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className={classes.footer}>
        <Typography className={classes.inputLabel}>
          “Semangat adalah modal utama dalam meraih kesuksesan”
        </Typography>
      </div>
    </div>
  )
}

export default Login
