import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: #FFF;
  border-radius: 40px;
  display: flex;
  font-family: 'Manrope';
  flex-direction: column;
  gap: 28px;
  left: 50%;
  /* max-width: 50vw; */
  /* padding: 32px; */
  position: absolute;
  /* top: 50%; */
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 11;
  @media screen and (max-width: 767.5px) {
    width: 280px;
    height: 786px;
  }
  @media screen and (min-width: 768px) {
    padding: 32px;
    top: 50%;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 24px;
  transform: rotate(45deg);
  top: 24px;
`;

export const BackgroundDiv = styled.div`
    background-color: rgba(97, 97, 97, 0.6);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
`;
