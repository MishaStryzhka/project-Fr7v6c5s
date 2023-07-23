import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';

import * as Element from './RegisterForm.styled';
import { ReactComponent as CrossIcon } from '../../images/icons/cross-small.svg';
import { ReactComponent as CheckIcon } from '../../images/icons/check.svg';
import { ReactComponent as OpenEyeIcon } from '../../images/icons/eye-open.svg';
import { ReactComponent as CloseEyeIcon } from '../../images/icons/eye-closed.svg';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Z\s]*$/),
  email: Yup.string()
    .email('Enter a valid Email')
    .required('Email is required')
    .matches(
      /^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
      'Enter a valid Email'
    ),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be at most 16 characters')
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
    ),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const data = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailExist, setEmailExist] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    if (loading) {
      return;
    }

    setLoading(true);
    const credentials = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      const response = await dispatch(register(credentials));
      if (response.error) {
        setEmailExist(false);
      } else {
        setEmailExist(true);
        navigate('/user');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={registerSchema}
      validateOnChange={false}
      onSubmit={handleFormSubmit}
    >
      {({
        values,
        errors,
        setErrors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
        resetForm,
      }) => {
        const isPasswordValid = values.password && values.password.length >= 8;
        const handleFieldChange = e => {
          const { name } = e.target;
          setErrors({ ...errors, [name]: '' });
          handleChange(e);
        };

        return (
          <Element.RegisterFormEl onSubmit={handleSubmit}>
            <Element.RegisterFormTitle>Registration</Element.RegisterFormTitle>
            <Element.RegisterFormUsernameContainer
              error={errors.name && touched.name}
            >
              <Element.RegisterFormUsernameInputContainer
                error={errors.name && touched.name}
                style={{
                  borderColor:
                    errors.name && touched.name ? '#F43F5E' : '#54ADFF',
                }}
              >
                <Element.RegisterFormInput
                  type="string"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                {errors.name && touched.name && values.name && (
                  <Element.ErrorIcon
                    onClick={() => {
                      resetForm({ values: { ...values, name: '' } });
                    }}
                  >
                    <CrossIcon />
                  </Element.ErrorIcon>
                )}
              </Element.RegisterFormUsernameInputContainer>
              {errors.name && touched.name && (
                <Element.ErrorMessage name="name">
                  {errors.name}
                </Element.ErrorMessage>
              )}
            </Element.RegisterFormUsernameContainer>

            <Element.RegisterFormEmailContainer
              error={errors.email && touched.email}
            >
              <Element.RegisterFormEmailInputContainer
                error={errors.email && touched.email}
                style={{
                  borderColor:
                    errors.email && touched.email ? '#F43F5E' : '#54ADFF',
                }}
              >
                <Element.RegisterFormInput
                  type="string"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                {errors.email && touched.email && values.email && (
                  <Element.ErrorIcon
                    onClick={() => {
                      resetForm({ values: { ...values, email: '' } });
                    }}
                  >
                    <CrossIcon />
                  </Element.ErrorIcon>
                )}
              </Element.RegisterFormEmailInputContainer>

              {errors.email && touched.email && (
                <Element.ErrorMessage name="email">
                  {errors.email}
                </Element.ErrorMessage>
              )}
            </Element.RegisterFormEmailContainer>

            <Element.RegisterFormPasswordContainer
              error={errors.password && touched.password}
              secure={isPasswordValid}
            >
              <Element.RegisterFormPasswordInputContainer
                error={errors.password && touched.password}
                secure={isPasswordValid}
                style={{
                  borderColor:
                    errors.password && touched.password
                      ? '#F43F5E'
                      : isPasswordValid
                      ? '#00C3AD'
                      : '#54ADFF',
                }}
              >
                <Element.RegisterFormInput
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                <Element.PasswordIcon>
                  <Element.EyeIcon
                    onClick={handleClickShowPassword}
                    error={errors.password && touched.password}
                    secure={isPasswordValid}
                  >
                    {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                  </Element.EyeIcon>
                  {isPasswordValid && (
                    <Element.CheckMarkIcon>
                      <CheckIcon />
                    </Element.CheckMarkIcon>
                  )}
                  {errors.password && touched.password && values.password && (
                    <Element.ErrorIcon
                      onClick={() => {
                        resetForm({ values: { ...values, password: '' } });
                      }}
                    >
                      <CrossIcon />
                    </Element.ErrorIcon>
                  )}
                </Element.PasswordIcon>
              </Element.RegisterFormPasswordInputContainer>

              {errors.password && touched.password && (
                <Element.ErrorMessage>{errors.password}</Element.ErrorMessage>
              )}
              {isPasswordValid && (
                <Element.InfoMessage valid={isPasswordValid}>
                  Password is secure
                </Element.InfoMessage>
              )}
            </Element.RegisterFormPasswordContainer>

            <Element.RegisterFormPasswordContainer
              error={errors.confirmPassword && touched.confirmPassword}
            >
              <Element.RegisterFormPasswordInputContainer
                error={errors.confirmPassword && touched.confirmPassword}
                style={{
                  borderColor:
                    errors.confirmPassword && touched.confirmPassword
                      ? '#F43F5E'
                      : '#54ADFF',
                }}
              >
                <Element.RegisterFormInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                <Element.PasswordIcon>
                  <Element.EyeIcon
                    onClick={handleClickShowConfirmPassword}
                    error={errors.confirmPassword && touched.confirmPassword}
                  >
                    {showConfirmPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                  </Element.EyeIcon>
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    values.confirmPassword && (
                      <Element.ErrorIcon
                        onClick={() => {
                          resetForm({
                            values: { ...values, confirmPassword: '' },
                          });
                        }}
                      >
                        <CrossIcon />
                      </Element.ErrorIcon>
                    )}
                </Element.PasswordIcon>
              </Element.RegisterFormPasswordInputContainer>

              {errors.confirmPassword && touched.confirmPassword && (
                <Element.ErrorMessage>
                  {errors.confirmPassword}
                </Element.ErrorMessage>
              )}
            </Element.RegisterFormPasswordContainer>

            {!emailExist && (
              <Element.RegisterErrorMessage>
                This email is already in use. Please, try with another email!
              </Element.RegisterErrorMessage>
            )}

            <Element.RegisterBtn type="submit" disabled={isSubmitting}>
              Registration
            </Element.RegisterBtn>
            <Element.LoginText>
              Already have an account?
              <Element.LoginLink to={'/login'}>Log In</Element.LoginLink>
            </Element.LoginText>
          </Element.RegisterFormEl>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
