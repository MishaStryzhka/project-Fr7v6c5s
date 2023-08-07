import styled from 'styled-components';

export const StatusContainer = styled.ul`
  display: flex;
  align-self: flex-start;
  padding: 0px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    justify-content: center;
    padding: 0px;
  }
`;

export const StatusOption = styled.li`
  position: relative;
  font-family: Manrope;
  font-size: 10px;
  line-height: 1.37;
  font-weight: 500;
  padding-bottom: 20px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.color.btnLogOut};
  width: 85px;
  max-width: 120px;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &::after {
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.color.btnLight};
    width: 85px;
    height: 8px;
    border-radius: 8px;
    left: 0;
    bottom: 0;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    min-width: 140px;

    &::after {
      width: 140px;
    }

    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;
