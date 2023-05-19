import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Nama Pengguna (Akun) must contain at least 3 characters')
    .required('Required'),
  password: Yup.string().min(3, 'Password must contain at least 3 characters').required('Required'),
})

export default loginSchema
