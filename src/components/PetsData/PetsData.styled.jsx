import Btn from 'components/Btn/Btn';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 46px;
  padding-bottom: 137px;
  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    width: 704px;
    padding-bottom: 121px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-top: 0;
    padding-top: 60px;
    padding-bottom: 57px;
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.8px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
export const WrapItem = styled.li`
  position: relative;
  margin-top: 30px;
  border-radius: 20px;
  /* background: var(--unnamed, #fff); */
  background-color: ${({ theme }) => theme.color.cardBG};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media screen and (min-width: 768px) {
    height: 256px;
    margin-top: 22px;
    display: flex;
    flex-direction: row;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 24px;
    height: 100%;
    gap: 12px;
  }
`;

export const StyledBtnPlus = styled(Btn)`
  cursor: pointer;
  padding: 8px 20px;
  position: absolute;
  top: 0;
  right: 0;
  gap: 8px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    top: 0;
  }
  @media screen and (min-width: 1280px) {
    top: 60px;
  }
`;
export const Text = styled.p`
margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
