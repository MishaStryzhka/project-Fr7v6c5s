import styled from 'styled-components'

export const List = styled.ul`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    flex-direction: column;
    gap: 20px;
    margin: 24px auto 75px;
    @media screen and (min-width: 768px) {
        
        flex-direction: row;
        gap:32px;
        margin: 40px 32px 172px;
    }
    @media screen and (min-width: 1280px) {
        align-items:baseline;
        margin: 60px 16px 69px;
  }

`

export const Item = styled.li`
    height:240px;
    width:280px;
    display:flex;
    flex-direction: column;
    background-color:#fff;
    box-shadow:${({ theme }) => theme.boxShadow};
    border-radius:40px; 
    @media screen and (min-width: 768px) {
        height:275px;
        width:320px;
        flex-basis: calc((100% - 32px) / 2);
    } 
    @media screen and (min-width: 1280px) {
        height:287px;
        width:394px;
        flex-basis: calc((100% - 64px) / 3);
  }
`

export const CardTitle = styled.h2`
margin:16px auto;
text-align: center;
font-size: 20px;
font-weight: 700;
line-height: normal;
color:${({ theme }) => theme.color.btnDark};
`
export const WrapImage = styled.div`
margin-left:12px;
width: 100px;
height: 68px;
@media screen and (min-width: 768px) {
    width: 124px;
    height: 88px;
    }
@media screen and (min-width: 1280px) {
    width: 146px;
    height: 104px;
  }
`

export const Image = styled.img`
display: block;
max-width: 100%;
height: auto;
`

export const MainWrap = styled.div`
display: flex;
gap:12px;
@media screen and (min-width: 1280px) {
    gap:20px;
  }
`
export const TextWrap = styled.div`
display:flex;
flex-direction: column;
gap: 12px;
@media screen and (min-width: 768px) {
    gap: 16px;
    }
    @media screen and (min-width: 1280px) {
    gap:12px;
  }
    
`
export const Text = styled.p`
color: ${({ theme }) => theme.color.secondary};

font-size: 12px;
font-weight: 600;
line-height: normal;
@media screen and (min-width: 768px) {
    font-size: 14px;
    }
@media screen and (min-width: 1280px) {
   font-size:16px;
  }
    `
export const TextTime = styled.p`
color: ${({ theme }) => theme.color.secondary};

font-size: 12px;
font-weight: 400;
line-height: normal;
@media screen and (min-width: 768px) {
    font-size: 14px;
    }
@media screen and (min-width: 1280px) {
   font-size:16px;
  }
`
export const Link = styled.a`
cursor:pointer;
color: ${({ theme }) => theme.color.secondary};
text-decoration:none;
font-size: 12px;
font-weight: 400;
line-height: normal;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover{
    color: ${({ theme }) => theme.color.btnDark};
}
@media screen and (min-width: 768px) {
    font-size: 14px;
    }
@media screen and (min-width: 1280px) {
   font-size:16px;
  }
`


