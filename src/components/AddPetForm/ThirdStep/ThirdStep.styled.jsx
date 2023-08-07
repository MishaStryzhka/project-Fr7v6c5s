import styled from 'styled-components';

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: Manrope;
  font-size: 20px;
  line-height: 1.37;
  margin-bottom: 24px;
  margin-left: 20px;
  color:${({ theme }) => theme.color.secondary};

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const PointBlock = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 60px;
  }
`;

export const SexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const SexPhotoBlock = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-right: 56px;
  }

  @media screen and (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    margin-right: 72px;
  }
`;

export const LabelSex = styled.p`
  font-family: Manrope;
  color:  ${({ theme }) => theme.color.secondary};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const SexButtonsWrap = styled.div`
  display: flex;
`;

export const SexRadioInput = styled.input.attrs({ type: 'radio' })`
  display: none;
`;

export const SexLabelStyled = styled.label`
  font-family: Manrope;
  display: flex;
  background-color: inherit;
  cursor: pointer;
  border: none;
  color:  ${({ theme }) => theme.color.btnLogOut};
  background-color: ${props => (props.isActive ? ({ theme }) => theme.color.btnDark : 'transparent')};
  color: ${props => (props.isActive ? ({ theme }) => theme.color.cardBG : ({ theme }) => theme.color.btnLogOut)};
  font-size: 16px;
  align-items: center;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 40px;
  align-items: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.btnDark};
    color: ${({ theme }) => theme.color.cardBG};
  }
`;

export const SexButton = styled.button`
  font-family: Manrope;
  display: flex;
  background-color: inherit;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.color.btnLogOut};
  font-size: 16px;
  align-items: center;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 40px;
  gap: 12px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    background-color:${({ theme }) => theme.color.btnDark} ;
    color: ${({ theme }) => theme.color.cardBG} ;
  }
`;

export const ErrorSex = styled.p`
  position: absolute;
  bottom: 5%;
  left: 5%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color:${({ theme }) => theme.color.error};

  @media screen and (min-width: 768px) {
    bottom: 25%;
    font-size: 12px;
  }
`;

export const PhotoContainerSell = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-left: 8px;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: 0;
  }
`;

export const LabelAddPhoto = styled.p`
  font-family: Manrope;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  width: 85px;
  color: ${({ theme }) => theme.color.secondary};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    display: block;
    margin-bottom: 2px;
    width: 115px;
    overflow: wrap;
    width: 200px;
  }
`;

export const LabelPhoto = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  background-color: ${({ theme }) => theme.color.btnLight};
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const LabelAddedPhoto = styled.label`
  position: relative;
  width: 112px;
  height: 112px;
  background-color: ${({ theme }) => theme.color.btnLight};
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const PreviewPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const ErrorTextLowSell = styled.p`
  font-family: Manrope;
  position: absolute;
  font-size: 10px;
  bottom: -10%;
  left: 15%;
  color: ${({ theme }) => theme.color.error};

  @media screen and (min-width: 768px) {
    font-size: 12px;
    left: 8%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-top: 0;
  }
`;

export const Label = styled.label`
  font-family: Manrope;
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  font-family: Manrope;
  border-radius: 40px;
  color:${({ theme }) => theme.color.btnLogOut};
  font-size: 14px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.color.btnDark};
  max-width: 242px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.indicator};
  }

  @media screen and (min-width: 768px) {
    min-width: 396px;
    font-size: 16px;
    padding: 12px;
  }
`;

export const ErrorTextLostLocation = styled.p`
  font-family: Manrope;
  position: absolute;
  bottom: 60%;
  left: 10%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color: ${({ theme }) => theme.color.error};

  @media screen and (min-width: 768px) {
    bottom: 70%;
    left: 5%;
    font-size: 12px;
  }
`;

export const LabelCommentsSell = styled.label`
  font-family: Manrope;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33px;
  color: ${({ theme }) => theme.color.secondary};
  margin-bottom: 8px;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const InputCommentsLost = styled.textarea`
  font-family: Manrope;
  width: 242px;
  height: 80px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.btnDark};
  border-radius: 20px;
  resize: none;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 396px;
    height: 184px;
    font-size: 16px;
  }
`;

export const ErrorCommentSell = styled.p`
  font-family: Manrope;
  position: absolute;
  bottom: -5%;
  left: 10%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color: ${({ theme }) => theme.color.error};

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -5%;
    left: 5%;
    font-size: 12px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
  margin-left: 8px;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const ErrorTextLow = styled.p`
  font-family: Manrope;
  position: absolute;
  bottom: -5%;
  right: 76%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.error};

  @media screen and (min-width: 768px) {
    bottom: 25%;
  }
`;

export const ErrorComment = styled.p`
  font-family: Manrope;
  position: absolute;
  bottom: -20%;
  left: 5%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.error};
`;

export const CommentsContainerMyPet = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
`;

export const LabelComments = styled.label`
  font-family: Manrope;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33px;
  color: ${({ theme }) => theme.color.secondary};
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const InputComments = styled.textarea`
  font-family: Manrope;
  width: 242px;
  height: 80px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.btnDark};
  border-radius: 20px;
  resize: none;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 396px;
    height: 80px;
    font-size: 16px;
  }
`;

export const WrapForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorTextPrice = styled.p`
  font-family: Manrope;
  position: absolute;
  bottom: 44%;
  left: 10%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color: ${({ theme }) => theme.color.error};

  @media screen and (min-width: 768px) {
    bottom: 38%;
    left: 5%;
    font-size: 12px;
  }
`;

export const ErrorTextSellLocation = styled.p`
  font-family: Manrope;
  position: absolute;
  bottom: 72%;
  left: 10%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color:${({ theme }) => theme.color.error};

  @media screen and (min-width: 768px) {
    bottom: 70%;
    left: 5%;
    font-size: 12px;
  }
`;
