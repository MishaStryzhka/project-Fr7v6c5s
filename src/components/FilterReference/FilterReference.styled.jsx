import styled from 'styled-components';

const Wrapper = styled.div`
  @media screen and (max-width: 1280px) {
    position: absolute;
    top: 68px;
    right: -140px;
    width: 86px;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 86px;
    right: 0px;
    width: 86px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  z-index: 100;

  max-height: 32px;

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 8px;

  background-color: ${({ theme }) => theme.color.cardBG};
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
`;

const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.btnDark};
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
`;

export { Wrapper, Text, Btn };
