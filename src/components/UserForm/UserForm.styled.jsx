import Btn from 'components/Btn/Btn';
import IconCamera from 'images/icons/IconCamera';
import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  margin-top: 18px;
  padding-bottom: 20px;
  border-radius: 20px;
  background: ${p => p.theme.color.cardBG};
  box-shadow:${({theme}) => theme.boxShadow};
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 40px;
    padding-bottom: 28px;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    padding-bottom: 45px;
  }
`;
export const WrapFoto = styled.div`
  position: relative;
  padding: 20px 49px 43px;
  @media screen and (min-width: 768px) {
    padding: 20px 76px 66px 91px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 106px 63px;
    display: block;
  }
`;
export const ThumbAvatar = styled.div`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  overflow: hidden;
`;
export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const WrapInfo = styled.form`
  padding: 0 8px;
  @media screen and (min-width: 768px) {
    padding: 24px 0 20px 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 24px 20px 16px;
    display: block;
  }
`;
export const InfoItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const TextTitle = styled.label`
  width: 74px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
  @media screen and (min-width: 768px) {
    width: 100px;
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`;
export const Text = styled.input`
  width: 190px;
  outline: none;
  padding: 4px 12px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  box-sizing: border-box;
  border-radius: 20px;
  color: ${p => p.theme.color.secondary};
  border: 1px solid ${p => p.theme.color.btnDark};
  @media screen and (min-width: 768px) {
    width: 230px;
    font-size: 16px;
    letter-spacing: 0.64px;
  }
  @media screen and (min-width: 1280px) {
    width: 255px;
  }
  &:focus {
    border: 2px solid ${p => p.theme.color.btnDark};
  }
`;
export const StyledBtnSave = styled.button`
  cursor: pointer;
  width: 190px;
  padding: 4px 12px;
  display: block;
  margin-left: 120px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  margin-left: auto;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid ${p => p.theme.color.btnDark};
  background-color: ${p => p.theme.color.btnDark} !important;
  color: ${p => p.theme.color.background};
  @media screen and (min-width: 768px) {
    width: 230px;
    font-size: 16px;
    letter-spacing: 0.64px;
  }
  @media screen and (min-width: 1280px) {
    width: 255px;
  }
  &:hover {
    background: ${({ theme }) => theme.color.gradient} !important;
    color: ${({ theme }) => theme.color.background};
  }
`;
export const StyledBtnEdit = styled(Btn)`
  cursor: pointer;
  ${({ isEdit }) => isEdit && `display: none;`};
  z-index: 2;
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;
export const StyledLabel = styled.label`
  cursor: pointer;
  ${({ isEdit }) => !isEdit && `display: none;`};
  ${({ isFile }) => isFile && `display: none;`};
  ${({ isEdit, isFile }) =>
    !isFile && isEdit && `display: flex; align-items: center`};
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  @media screen and (min-width: 768px) {
    bottom: 37px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover {
    color: ${({ theme }) => theme.color.gradient};
    box-shadow: ${({ theme }) => theme.boxShadowHover};
  }
`;
export const WrapFileOk = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;
  fill: ${p => p.theme.color.ErrorMessage};
  @media screen and (min-width: 768px) {
    bottom: 37px;
  }
`;
export const StyledBtnFile = styled.button`
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  margin: 0 8px;
  border: none;
  fill: inherit;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
  }
`;

export const StyledBtn = styled(Btn)`
  cursor: pointer;
  margin-top: 8px;
  padding-left: 2px;
  gap: 12px;
  flex-direction: row-reverse;
  font-weight: 500;
  border: none;
  color: ${p => p.theme.color.btnLogOut};
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 21px;
    left: 40px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 25px;
    left: 10px;
  }
`;
export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -8px;
  right: 84px;
  color: ${p => p.theme.color.error};
  font-size: 8px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
    bottom: -10px;
    left: 110px;
  }
`;

export const IconCameraOk = styled(IconCamera)`
  height: 20px;
`;
export const ErrorMessageRes = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;
  color: ${p => p.theme.color.error};
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    bottom: 0px;
    left: 150px;
  }
  @media screen and (min-width: 1280) {
    font-size: 14px;
    bottom: 45px;
    left: 20px;
  }
`;
export const ErrorFile = styled(ErrorMessage)`
  font-size: 14px;
  bottom: 5px;
  right: 5%;
  transform: translate(-50%, 0);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    bottom: 20px;
    left: 55%;
  }
  @media screen and (min-width: 1280) {
    font-size: 14px;
    bottom: 45px;
    left: 20px;
  }
`;
