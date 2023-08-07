import styled from 'styled-components'

export const ListTime = styled.ul`
      cursor: pointer;    
position:relative;
border:none;
font-size: 12px;
font-weight: 400;
line-height: normal;
color: ${({ theme }) => theme.color.secondary};
outline: none;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover{
    color: ${({ theme }) => theme.color.btnDark}
}
@media screen and (min-width: 768px) {
    font-size: 14px;
    }
@media screen and (min-width: 1280px) {
   font-size:16px;
  }
`

export const TimeItem = styled.li`

font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
color: ${({ theme }) => theme.color.secondary};
display:flex;
justify-content: space-between;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover{
    background-color: ${({ theme }) => theme.color.btnDark}
}
`

export const TimeWrap =styled.div`
position: absolute;
background-color: ${({ theme }) => theme.color.cardBG};
border: 1px solid ${({ theme }) => theme.color.btnDark};
padding:12px;
display:flex;
gap:6px;
border-radius: 8px;
box-shadow: ${({ theme }) => theme.boxShadow};
`

export const Text = styled.span`
    margin-left: 12px;
`

export const TimeTitle = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
`


   
