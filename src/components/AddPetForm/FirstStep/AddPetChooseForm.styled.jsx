import styled from 'styled-components';

export const Title = styled.h2`
  font-family: Manrope;
  font-size: 20px;
  line-height: 1.37;
  margin-bottom: 24px;
  margin-left: 20px;
  color: ${({ theme }) => theme.color.secondary};

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
