import styled from 'styled-components';

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  display: none;
`;

export const LabelStyled = styled.label`
  font-size: 14px;
  line-height: 1.33;
  padding: 8px 16px;
  background-color: ${props => (props.isActive ? '#54adff' : '#cce4fb')};
  color: ${props => (props.isActive ? '#fff' : '#54adff')};
  border: none;
  border-radius: 40px;
  margin-bottom: 12px;
  width: fit-content;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color:${({ theme }) => theme.color.bodyColor};
    background-color:${({ theme }) => theme.color.btnDark};
  }
`;

export const BtnWrap = styled.li`
  border-radius: 40px;
  width: fit-content;
  cursor: pointer;
`;

export const BtnContainer = styled.ul`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  flex: 1;
  margin-bottom: 80px;
  gap: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    margin-bottom: 120px;
  }
`;

export const BtnRoutesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin-right: auto;
  margin-left: auto;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-self: center;
    margin-bottom: 20px;
  }
`;

export const BtnNext = styled.button`
  margin-right: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: ${({ theme }) => theme.color.bodyColor};
  background-color: ${({ theme }) => theme.color.btnDark};
 
  border: none;
  border-radius: 40px;
  text-decoration: none;
  align-items: center;
  width: 248px;
  height: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  text-transform: none;
  gap: 12px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const BtnPrev = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: ${({ theme }) => theme.color.btnDark};
  background-color: transparent;
  border: none;
  text-decoration: none;
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  gap: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
