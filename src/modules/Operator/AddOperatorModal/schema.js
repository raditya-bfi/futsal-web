import * as Yup from 'yup'

export const AddOperatorSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Nama must contain at least 3 characters')
    .max(30, `Nama should be less than 30 characters`)
    .required('Required'),
  gender: Yup.string().required('Required'),
  phone: Yup.string()
    .min(5, 'No. HP must contain at least 5 characters')
    .max(15, `No. HP should be less than 15 characters`)
    .required('Required'),
  email: Yup.string().email().required('Required'),
  address: Yup.string()
    .min(5, 'Alamat must contain at least 5 characters')
    .max(120, `Alamat should be less than 120 characters`)
    .required('Required'),
  password: Yup.string().min(3, 'Password must contain at least 3 characters').required('Required'),
})
