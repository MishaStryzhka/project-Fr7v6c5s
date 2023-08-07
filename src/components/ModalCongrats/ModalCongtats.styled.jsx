import Btn from 'components/Btn/Btn';
import styled from 'styled-components';

export const StyledSection = styled.div`
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color:${({ theme }) => theme.color.secondary};
  margin-top: 68px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 49px;
    margin-top: 60px;
  }
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-top: 24px;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: 0.04em;
  color:${({ theme }) => theme.color.secondary};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 33px;
    margin-top: 52px;
    margin-bottom: 60px;
  }
`;
export const StyledBtn = styled(Btn)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  margin-right: auto;
  margin-left: auto;
  width: 248px;
  height: 40px;
  outline: none;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 60px;
  cursor: pointer;
  gap: 12px;
`;
