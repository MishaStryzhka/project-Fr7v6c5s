import styled from 'styled-components';

export const Title = styled.h2`
  font-family: Manrope;
  font-size: 20px;
  line-height: 1.37;
  margin-bottom: 24px;
  margin-left: 20px;
  color: ${({ theme }) => theme.color.secondary};

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const Label = styled.label`
  font-family: Manrope;
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  font-family: Manrope;
  border-radius: 40px;
  color:${({ theme }) => theme.color.btnLogOut};
  font-size: 14px;
  padding: 9.5px 16px;
  border: 1px solid ${({ theme }) => theme.color.btnDark};
  max-width: 260px;

  &:focus {
    border-color:${({ theme }) => theme.color.indicator};
  }

  @media screen and (min-width: 768px) {
    min-width: 400px;
    font-size: 16px;
    padding: 12px 16px;
  }
`;

export const ErrorText = styled.p`
  font-family: Manrope;
  position: absolute;
  bottom: -20%;
  left: 5%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color: ${({ theme }) => theme.color.error};
`;
