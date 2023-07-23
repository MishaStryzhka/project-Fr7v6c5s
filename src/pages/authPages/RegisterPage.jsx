import RegisterForm from 'components/RegisterForm/RegisterForm';

import { RegisterBackground, RegisterBorder } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <RegisterBackground>
      <RegisterBorder>
        <RegisterForm />
      </RegisterBorder>
    </RegisterBackground>
  );
};

export default RegisterPage;
