import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BackDrop = styled.div`
  background-color: rgba(97, 97, 97, 0.6);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  overflow: hidden;
`;
export const Modal = styled.div`
  background-color: ${({ theme }) => theme.color.cardBG};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translate(-50%);
  padding: 44px 12px 16px;
  @media screen and (max-width: 767.5px) {
    width: 280px;
    height: 786px;
  }
  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 680px;
    max-height: 540px;
    top: 200px;
    border-radius: 40px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
    margin-bottom: 28px;
  }
`;

export const ModalPhoto = styled.div`
  border-radius: 0 0 40px 40px;
  overflow: hidden;
  position: relative;
  width: 240px;
  height: 240px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    margin: 0;
    width: 262px;
    height: 298px;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 12px;
  top: 12px;
  transform: rotate(45deg);

  @media screen and (min-width: 768px) {
    right: 26px;
    top: 23px;
  }
`;

export const ModalStatus = styled.span`
  background: #cce4fb;
  border-radius: 0 12px 12px 0;
  color: #111;
  left: 0;
  padding: 12px;
  position: absolute;
  top: 16px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.secondary};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.28px;
  @media screen and (max-width: 767.5px) {
    max-width: 200px;
  }
`;
export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalPersonality = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalPersonalityField = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const ModalPersonalityKey = styled.p`
  font-weight: 600;
  flex: 0 0 30%;
  color: ${({ theme }) => theme.color.secondary};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ModalPersonalityValue = styled.p`
  flex: 1;
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ModalPersonalityLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
`;

export const ModalComments = styled.div`
  letter-spacing: 0.04em;
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;

export const WrapBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px auto 0;

  @media screen and (min-width: 768px) {
    margin-top: 70px;
    margin-left: auto;
    margin-right: 0;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }
`;
export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  width: 256px;
  background-color: ${({ theme }) => theme.color.btnDark};
  color: ${({ theme }) => theme.color.bodyColor};
  display: flex;
  gap: 8px;
  justify-content: center;

  padding: 8px 14px;

  border-radius: 25px;

  text-decoration: none;
  text-align: center;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;

  &:hover {
    background: ${({ theme }) => theme.color.gradient};
  }

  > svg {
    ${({ isfavorite }) => (isfavorite ? 'fill: white' : '')};
  }

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;

export const BtnContacts = styled.a`
  display: block;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.btnDark};
  color: ${({ theme }) => theme.color.btnDark};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.64px;
  padding: 8px 14px;
  border-radius: 25px;
  width: 256px;
  text-decoration: none;
  text-align: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ theme }) => theme.color.gradient};
    color: ${({ theme }) => theme.color.bodyColor};
  }

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;
