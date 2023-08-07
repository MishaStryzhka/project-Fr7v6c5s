import styled from 'styled-components';

export const PaginationWrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;

  @media screen and (min-width: 768px) {
    margin: 60px 0px;
  }
  @media screen and (min-width: 1280px) {
    margin: 68px 0px;
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-shadow: ${({ theme }) => theme.color.btnLogOut};
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
  border: 1px solid lightblue;
  color:${({ theme }) => theme.color.secondary};
  background-color: transparent;
  display: inline-flex;
  width: 35px;
  height: 35px;
  cursor: pointer;

  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  :focus {
    color: ${({ theme }) => theme.color.cardBG};
    background-color: ${({ theme }) => theme.color.btnDark};
  }
`;

export const PaginationBtnActive = styled(PaginationBtn)`
  border-color: ${({ theme }) => theme.color.btnDark};
  background-color: ${({ theme }) => theme.color.btnDark};
  color:${({ theme }) => theme.color.cardBG};
`;

export const PaginationArrowBtn = styled(PaginationBtn)`
  color: ${({ theme }) => theme.color.btnDark};
  border-color: ${({ theme }) => theme.color.btnDark};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  :focus {
    color:${({ theme }) => theme.color.cardBG};
    background-color:${({ theme }) => theme.color.btnDark};
  }
`;
