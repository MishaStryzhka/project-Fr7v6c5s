import Btn from 'components/Btn/Btn';
import { Container } from 'components/Container/Container';
import styled from 'styled-components';

export const StyledAppBar = styled.header`
  box-sizing: border-box;
  margin-top: 20px;
  height: 28px;

  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 44px;
    margin-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    height: 48px;
    margin-top: 20px;
  }
`;

export const StyledContainer = styled(Container)`
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 9;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;

export const NavContainer = styled.div`
  ${({ isOpenMenu }) =>
    isOpenMenu
      ? `
  display:flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  z-index: -1;
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 100vh;
  `
      : `
      display:flex;
      width: 100%;
  flex-direction: row-reverse;
      `};

  background-color: ${({ theme }) => theme.color.bodyColor};
  

  @media screen and (min-width: 768px) {
    top: -32px;
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;

export const ButtonMenu = styled.button`
  margin-left: 8px;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;

  width: 24px;
  height: 24px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const StyleBtn = styled(Btn)`
  @media screen and (max-width: 767px) {
    ${({ isOpenMenu }) =>
      isOpenMenu
        ? `
      position: absolute;
      left: 20px;
      bottom: 20px;
  `
        : `
      display: none;
      `};
  }

  @media screen and (min-width: 768px) {
    ${({ isOpenMenu }) =>
      isOpenMenu
        ? `
    position: absolute;
    right: 80px;
    top: 26px;
`
        : `
    display: none;
    `};
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    right: 131px;
    top: 0;
  }
`;
