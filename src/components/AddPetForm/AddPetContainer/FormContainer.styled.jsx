import styled from 'styled-components';

export const FormCntr = styled.div`
  width: 280px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 16px 8px;
  margin-top: 44px;
  margin-bottom: 44px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    width: 458px;
    padding: 20px 32px;
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

export const FormCntrThird = styled.div`
  width: 280px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 16px 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 44px;
  margin-bottom: 44px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 60px;
    margin-bottom: 60px;
    width: 704px;
    padding: 20px 32px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 1025px) {
    width: 822px;
    padding: 20px 72px;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;
