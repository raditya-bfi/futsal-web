import * as Yup from 'yup'

export const EditFieldSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Judul lapangan must contain at least 3 characters')
    .max(30, `Judul lapangan should be less than 30 characters`)
    .required('Required'),
  description: Yup.string()
    .min(3, 'Deskripsi lapangan must contain at least 3 characters')
    .max(300, `Deskripsi lapangan should be less than 300 characters`)
    .required('Required'),
  booking_open: Yup.string().typeError('Waktu buka sewa must be a string').required('Required'),
  booking_close: Yup.string().typeError('Waktu tutup sewa must be a string').required('Required'),
  harga: Yup.number('Harga sewa lapangan must be a number')
    .positive('Harga sewa lapangan must be a positive number')
    .integer('Harga sewa lapangan must be a number')
    .typeError('Harga sewa lapangan must be a number')
    .required('Required'),
  harga_malam: Yup.number('Harga sewa khusus malam must be a number')
    .positive('Harga sewa khusus malam must be a positive number')
    .integer('Harga sewa khusus malam must be a number')
    .typeError('Harga sewa khusus malam must be a number')
    .required('Required'),
  waktu_mulai_malam: Yup.string()
    .typeError('Waktu mulai malam must be a string')
    .required('Required'),
  daysActive: Yup.array().min(1, 'Pilih Hari Buka Sewa minimal 1 hari').required('Required'),
})

export const EditFieldSchemaOption = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Judul lapangan must contain at least 3 characters')
    .max(30, `Judul lapangan should be less than 30 characters`)
    .required('Required'),
  description: Yup.string()
    .min(3, 'Deskripsi lapangan must contain at least 3 characters')
    .max(300, `Deskripsi lapangan should be less than 300 characters`)
    .required('Required'),
  booking_open: Yup.string().typeError('Waktu buka sewa must be a string').required('Required'),
  booking_close: Yup.string().typeError('Waktu tutup sewa must be a string').required('Required'),
  harga: Yup.number('Harga sewa lapangan must be a number')
    .positive('Harga sewa lapangan must be a positive number')
    .integer('Harga sewa lapangan must be a number')
    .typeError('Harga sewa lapangan must be a number')
    .required('Required'),
  daysActive: Yup.array().min(1, 'Pilih Hari Buka Sewa minimal 1 hari').required('Required'),
})
