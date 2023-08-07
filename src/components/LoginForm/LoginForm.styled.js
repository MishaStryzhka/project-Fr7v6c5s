import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'formik';


export const FormStyled = styled(Form)`
  width: 280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 12px;
  border-radius: 20px;
  margin-top: 40px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 60px 0;
    margin-top: 80px;
    border-radius: 40px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 110px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 60px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.secondary};
  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const FieldStyled = styled(Field)`
  display: block;
  position: relative;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;
  padding: 12px 16px;
  width: 256px;
  border-radius: 40px;
  border: 1px solid
    ${({ theme, error, valid }) =>
      error
        ? theme.color.error
        : valid
        ? theme.color.indicator
        : theme.color.btnDark};
  outline: none;
  color: ${({ theme }) => theme.color.btnLogOut};
  @media screen and (min-width: 768px) {
    width: 448px;
  }
`;
export const Label = styled.label`
  position: relative;
`;

export const FieldError = styled(Field)`
  position: relative;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;
  padding: 12px 16px;
  width: 256px;
  border-radius: 40px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.error};
  color: #888;
  @media screen and (min-width: 768px) {
    width: 458px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  width: 256px;
  height: 48px;
  padding: 10px 28px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.8px;
  border: transparent;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.color.background};
  background-color: ${({ theme }) => theme.color.btnDark} !important;


  :hover {
    background: ${({ theme }) => theme.color.gradient} !important;
  }
  @media screen and (min-width: 768px) {
    width: 478px;
    margin-bottom: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  text-decoration-line: underline;

  color: ${({ theme }) => theme.color.btnDark};
`;

export const Text = styled.p`
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;

  color: #888;
`;

export const TextError = styled.div`
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  color: ${({ theme }) => theme.color.error};
  margin-top: 4px;
  margin-left: 16px;
`;

export const SuccessText = styled.div`
  margin-top: 4px;
  margin-left: 16px;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  color: ${({ theme }) => theme.color.indicator};
`;

export const WrapIcons = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  display: flex;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;
