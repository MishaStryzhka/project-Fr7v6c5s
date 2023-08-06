import * as Yup from 'yup';

const regexName = /^[a-zA-Z\s-]*$/;
const regexPhone = /^\+38\d{10}$/;
const regexCity = /^[A-Z]{1}[a-zA-Z\s-]*$/;

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be min 2')
    .max(50, 'Name must be max 50')
    .matches(regexName, 'Invalid name'),
  birthday: Yup.date()
    .min(1900, 'Birthday is old')
    .max(new Date(), 'Birthday is future')
    .notRequired(),
  email: Yup.string()
    .email('Invalid email')
    .max(50, 'Email must be max 50')
    .required('Email is required'),
  phone: Yup.string()
    .matches(regexPhone, {
      message: 'Format is +380000000000',
    })
    .notRequired(),
  city: Yup.string()
    .min(4, 'Word must be min 4')
    .max(50, 'Word must be max 50')
    .matches(regexCity, 'The first letter must be uppercase')
    .notRequired(),
});

export const validationSchemaFile = Yup.number()
    .notRequired()
    .test((value, ctx) => {
      if (value > 3000000) {
        return ctx.createError({ message: 'Size of the file is big' });
		 }
		 return true
    });
