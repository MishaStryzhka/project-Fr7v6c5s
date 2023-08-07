import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--overlay-color);
  z-index: 100;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  background-color: #ffffff;
  z-index: 5;
  padding: 5px;

  @media screen and (max-width: 767px) {
    min-width: 280px;
  }

  @media screen and (min-width: 768px) {
    min-width: 680px;
  }
`;

export const BtnClose = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--overlay-color);
  z-index: 100;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const ModalContent = styled.div`
  max-height: 600px;
  overflow-y: auto;
`;
