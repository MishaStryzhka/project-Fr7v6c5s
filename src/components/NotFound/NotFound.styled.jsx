import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.h2`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Title = styled.h2`
  font-family: Manrope;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.35;
  text-align: center;
  color: ${({ theme }) => theme.color.secondary};
  margin-right: auto;
  margin-left: auto;
  max-width: 280px;
  height: 66px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    font-weight: 800;
    font-size: 32px;
    line-height: 1.35;
    max-width: 450px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Cat = styled.img`
  width: 280px;
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    width: 822px;
  }
`;

export const Links = styled(Link)`
  font-family: Manrope;
  font-weight: 700;
  font-size: 16px;
  border-radius: 40px;
  padding: 8px 28px 8px 28px;
  margin: 60px auto 0;
  color:${({ theme }) => theme.color.cardBG};
  background: ${({ theme }) => theme.color.btnDark};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 192px;
  transition: background 0.25s ease-in-out;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(155, 208, 255, 1) 0%,
      rgba(65, 158, 241, 1) 100%
    );
  }

  @media screen and (min-width: 768px) {
    margin-top: 70px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 18px;
  }
`;
