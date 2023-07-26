import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: white;
  box-shadow: blue;
  border-radius: 45px;
  padding: 8px 16px 9px 14px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 310px;
    padding: 8px 11px 9px 12px;
  }
`;
export const PaginationListItem = styled.li``;

export const PaginationBtn = styled.button`
  outline: none;
  border: 1px solid blue;
  color: blue;
  background-color: transparent;
  display: inline-flex;
  width: 35px;
  height: 35px;
  cursor: pointer;

  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &:hover,
  :focus {
    color: lightblue;
    background-color: lightblue;
  }
`;

export const PaginationBtnActive = styled(PaginationBtn)`
  border-color: blue;
  background-color: lightblue;
  color: white;
`;

export const PaginationArrowBtn = styled(PaginationBtn)`
  border-color: blue;
  background-color: white;
  color: blue;
  &:hover,
  :focus {
    color: blue;
    background-color: lightblue;
  }
`;
