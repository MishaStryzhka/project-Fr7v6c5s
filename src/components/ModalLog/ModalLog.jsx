import Modal from 'components/Modal/Modal';
import {
  StyledSection,
  Title,
  WrapBtn,
  StyledBtn,
  StyledBtnYes,
} from './ModalLog.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

 const ModalLog = ({ close }) => {
  const dispatch = useDispatch();
  const hendlelogout = () => {
    dispatch(logOut());
    close();
  };
  return (
    <Modal onClick={close}>
      <StyledSection>
        <Title>Already leaving?</Title>
        <WrapBtn>
          <StyledBtn text={'Cancel'} onClick={close}></StyledBtn>
          <StyledBtnYes
            text={'Yes'}
            icon={'Iconlogout'}
            onClick={hendlelogout}
          ></StyledBtnYes>
        </WrapBtn>
      </StyledSection>
    </Modal>
  );
};

export default ModalLog;
