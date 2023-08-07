
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { Formik} from 'formik';
import * as Yup from 'yup'
import { useAuth } from 'hooks';
import theme from 'components/theme';
import IconCheck from 'images/icons/IconCheck';
import IconEyeClosed from 'images/icons/IconEyeClosed'
import IconEyeOpen from 'images/icons/IconEyeOpen';
import IconCross from 'images/icons/IconCross';
import Notiflix from 'notiflix';
import { Button, FieldStyled, FormStyled, Label, StyledNavLink,
   SuccessText, Text, TextError, Title, Wrap, WrapIcons } from './LoginForm.styled';
import Loader from 'components/Loader/Loader';




const validationSchema = Yup.object().shape({
    email:Yup.string().required("Field is a required").email('Enter a valid Email'),
    password:Yup.string().required("Field is a required")
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must be less at 16 characters")
    .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
        'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number'
      )
      
    })
   

const LoginForm = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { currentTheme } = useAuth();
    const [openPassword, setOpenPassword] = useState(false);

    const handleOpenPassword = () => setOpenPassword(openPassword => !openPassword);

   const handleLogInSubmit = async (values) => {
    
     const res = await dispatch(
    
        logIn({
           email: values.email,
           password: values.password,
         })
       );
       setIsLoading(true)
       if (res.error || res.payload.status === 401) {
        Notiflix.Notify.failure(res.payload.message);
        setIsLoading(false)
      } else {
       navigate('/user');
        setIsLoading(false)
      }
    }
    
return(
  <>
  {isLoading ? <Loader/> :
  
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleLogInSubmit}
      >
         {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const isPasswordValid = values.password && values.password.length>=6;
          
    return(
     <FormStyled onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Wrap>
        <Label>
              <FieldStyled 
                error={errors.email && touched.email && errors.email}
                valid={values.email}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Email'
                required/>
              {errors.email && touched.email && errors.email  && <WrapIcons><IconCross fill={theme[currentTheme].color.error}/></WrapIcons>}
              {values.email && !errors.email &&  <WrapIcons><IconCheck fill={theme[currentTheme].color.indicator}/></WrapIcons>}
              <TextError>{errors.email && touched.email && errors.email}</TextError>
          </Label>
        
          <Label>
              <FieldStyled
                error={errors.password && touched.password && errors.password}
                type={openPassword ? 'text':'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Password'
                style={{
                  borderColor:
                    errors.password && touched.password && errors.password
                      ? theme[currentTheme].color.error
                      : isPasswordValid
                      ? theme[currentTheme].color.indicator
                      : theme[currentTheme].color.btnDark,
                }}
                required/>
                
              <WrapIcons>
                <div onClick={handleOpenPassword}>
                  {openPassword ? 
                      <IconEyeOpen
                      fill={errors.password && touched.password
                        ? theme[currentTheme].color.error
                        : isPasswordValid
                        ? theme[currentTheme].color.btnLogOut 
                        : theme[currentTheme].color.btnDark}/> :
                  <IconEyeClosed
                      fill={errors.password && touched.password
                        ? theme[currentTheme].color.error
                        : isPasswordValid
                        ? theme[currentTheme].color.btnLogOut 
                        : theme[currentTheme].color.btnDark}/>
                    } 
                </div>
              {errors.password && touched.password && errors.password  && <IconCross fill={theme[currentTheme].color.error}/>}
              {values.password && !errors.password &&  <IconCheck fill={theme[currentTheme].color.indicator}/>}
              </WrapIcons>

          
          

                  {errors.password && touched.password && errors.password &&
                  <TextError>{errors.password}</TextError>}
                  {!errors.password && touched.password && <SuccessText>Password is secure</SuccessText>}
              </Label> 
        </Wrap>
        <Button type='submit'>Login</Button>
        <Text>Don't have an account?<StyledNavLink to="/register">Register</StyledNavLink></Text>
     </FormStyled>
           )
            }}
        </Formik>
       }
        </>
      )
    };
export default LoginForm