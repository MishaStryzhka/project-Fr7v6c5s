import * as Yup from 'yup';

const nameValidation = Yup.string()
  .min(2, 'Too Short! 2 characters minimum')
  .max(120, 'Too Long! 16 characters maximum')
  .label('Name')
  .required('Name is required')
  .matches(/^[a-zA-Z\s]+?$/iu, 'Only Latin letters');

const dateValidation = Yup.string()

  .test('is-date-valid', 'Future date not allowed', value => {
    if (value) {
      const date = value.split('.');
      const correctFormat = new Date(`${date[2]}.${date[1]}.${date[0]}`);
      return correctFormat.getTime() < Date.now();
    }
    return true;
  })
  .label('Date of birth')
  .required('Date of birth is required');

const breedValidation = Yup.string()
  .min(2, 'Too Short! 2 characters minimum')
  .max(16, 'Too Long! 16 characters maximum')
  .label('Breed or type your pet')
  .required('Breed is required');

const imageValidation = Yup.mixed()
  .label('Pet image')
  // .required('Pet`s image is required')
  .test(
    'fileSize',
    'File size must be less than 3MB',
    value => value && value.size <= 3 * 1024 * 1024
  )
  .test(
    'fileType',
    'Only image files are allowed',
    value =>
      value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
  );

const locationValidation = Yup.string()
  .min(2, 'Too Short! 2 characters minimum')
  .max(16, 'Too Long! 16 characters maximum')
  .matches(/^[A-Z][a-zA-Z]*$/, 'The first letter must be uppercase')
  .label('Location')
  .required('Location is required');

// const sexValidation = Yup.string().required('Choose gender');

export const validationSchema = Yup.object({
  name: nameValidation,
  birthday: dateValidation,
  breed: breedValidation,
});

export const validationSchemaAdd = Yup.object({
  name: nameValidation,
  date: dateValidation,
  breed: breedValidation,
  title: Yup.string()
    .min(2, 'Too Short! 2 characters minimum')
    .max(64, 'Too Long! 64 characters maximum')
    .required('Title is required'),
});

export const validationSchemaThirdAddMy = Yup.object({
  comments: Yup.string()
    .max(120, 'Too Long! 120 characters maximum')
    .label('Comment'),
  // imageURL: imageValidation,
  file: imageValidation,

});

export const validationSchemaThirdAddSell = Yup.object({
  comments: Yup.string()
    .max(120, 'Too Long! 120 characters maximum')
    .label('Comment'),
  file: imageValidation,
  location: locationValidation,
  // sex: sexValidation,
  price: Yup.number()
    .positive()
    .required()
    .label(`Price`)
    .typeError(`Must be a number`),
});

export const validationSchemaThirdAddLost = Yup.object({
  comments: Yup.string()
    .max(120, 'Too Long! 120 characters maximum')
    .label('Comment'),
  file: imageValidation,
  location: locationValidation,
  // sex: sexValidation,
});
