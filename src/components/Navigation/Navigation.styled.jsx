import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  height: auto;
  text-align: center;

  white-space: nowrap;

  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
  transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: ${({ dark, theme }) =>
      dark === 'true' ? theme.color.background : theme.color.primary};
  }
  &.active:hover {
    text-shadow: 1px 1px 2px ${({ theme }) => theme.color.secondary};
  }

  &:hover {
    text-shadow: 1px 1px 2px ${({ theme }) => theme.color.primary};
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    letter-spacing: 1.92px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    letter-spacing: 0.8px;
  }
`;

export const NavContainer = styled.nav`
  ${({ isOpenMenu }) => (isOpenMenu ? 'display: grid' : 'display: none')};

  row-gap: 20px;
  margin-top: ${({ isLoggedIn }) => (isLoggedIn ? '84px' : '40px')};

  @media screen and (min-width: 768px) {
    margin-top: ${({ isLoggedIn }) => (isLoggedIn ? '84px' : '40px')};
  }

  @media screen and (min-width: 1280px) {
    box-shadow: none;
    display: flex;
    column-gap: 40px;
    top: 0;
    position: relative;
    margin-left: 159px;
    margin-top: 0;
  }
`;
