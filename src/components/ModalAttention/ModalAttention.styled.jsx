import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSection = styled.div`
  padding: 22px 6px 46px;
  width: 252px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 552px;
  }
`;
export const Title = styled.h2`
  margin: 0 auto 20px;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;
  @media screen and (min-width: 768px) {
    margin: 0 auto 40px;
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;
export const WrapText = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px; /* 140% */
    letter-spacing: 0.8px;
  }
`;

export const WrapBtn = styled.div`
/* padding: 0 6px; */
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }
`;
export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  background: ${({ dark, theme }) =>
    dark === 'true' ? theme.color.primary : 'transparent'};
  color: ${({ dark, theme }) =>
    dark === 'true' ? theme.color.background : theme.color.primary};
  border: 2px solid ${({ theme }) => theme.color.primary};

  display: flex;
  justify-content: center;
  min-width: 125px;
  padding: 8px 20px;

  border-radius: 25px;

  text-decoration: none;
  text-align: center;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
  }

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;


