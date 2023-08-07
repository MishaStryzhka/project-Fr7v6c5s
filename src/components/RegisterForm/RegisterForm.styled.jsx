import { Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterFormEl = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterFormTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({ theme }) => theme.color.secondary};
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`;

export const RegisterFormUsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '6px' : '32px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error }) => (error ? '1px' : '24px')};
  }
`;

export const RegisterFormUsernameInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.btnDark)};
  border-radius: 40px;
`;

export const RegisterFormEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '6px' : '32px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error }) => (error ? '1px' : '24px')};
  }
`;

export const RegisterFormEmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.btnDark)};
  border-radius: 40px;
`;

export const RegisterFormInput = styled(Field)`
  padding: 12px 0;
  line-height: 1.5;
  letter-spacing: 0.04em;
  box-sizing: border-box;

  width: 100%;
  height: 48px;
  border: none;
  outline: none;
`;

export const ErrorIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({ theme }) => theme.color.error};
`;

export const RegisterFormPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error, secure }) => (error || secure ? '6px' : '32px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error, secure }) => (error || secure ? '1px' : '24px')};
  }
`;

export const RegisterFormPasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error, secure }) =>
      error
        ? theme.color.error
        : secure
        ? theme.color.indicator
        : theme.color.btnDark};
  border-radius: 40px;
`;

export const PasswordIcon = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EyeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const CheckMarkIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const InfoMessage = styled.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({ theme }) => theme.color.indicator};
`;

export const RegisterErrorMessage = styled.div`
  padding: 15px 16px 0 16px;
  color: ${({ theme }) => theme.color.error};
`;

export const RegisterBtn = styled.button`
  margin-top: 8px;
  margin-bottom: 20px;
  width: 100%;

  padding: 10px 0 10px 0;

  background: ${({ theme }) => theme.color.btnDark} !important;
  border: none;
  border-radius: 40px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;
  
  color:${({ theme }) => theme.color.cardBG};
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.color.gradient} !important;
  }

  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
`;

export const LoginText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color:${({ theme }) => theme.color.btnLogOut};
`;

export const LoginLink = styled(Link)`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.color.btnDark};
  display: inline;
  cursor: pointer;
`;
