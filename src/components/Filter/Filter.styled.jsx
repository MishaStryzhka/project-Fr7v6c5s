import styled from 'styled-components';

const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 17px;
`;

const Btn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  width: 40px;
  padding: 8px;

  background-color: ${({ theme, isOpen, age, gender }) =>
    isOpen || age !== '' || gender !== ''
      ? 'transparent'
      : theme.color.btnLight};
  border: none;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;
    background: linear-gradient(290.46deg,  #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: ${({ isOpen, age, gender }) =>
      isOpen || age !== '' || gender !== '' ? 1 : 0};

    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    min-width: 152px;
    height: 40px;

    font-family: Manrope;
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme, isOpen }) => (isOpen ? theme.color.background : theme.color.btnDark)};

    background-color: transparent;
    border-width: 2px;
    border-color: ${({ theme }) => theme.color.btnDark};
    border-radius: 40px;
    border-style: solid;
    color: ${({ age, gender, theme, isOpen }) =>
      age !== '' || gender !== '' || isOpen ? theme.color.background : theme.color.btnDark};
    background: ${({ age, gender }) =>
      age !== '' || gender !== ''
        ? 'linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%)'
        : 'transparent'};
  }
`;

const Filters = styled.div`
  position: absolute;
  top: 44px;
  right: 0;
  box-sizing: border-box;
  z-index: 99;

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 152px;
  height: ${({ isOpen, isAgeMenuOpen, isGenderMenuOpen }) =>
    isOpen ? filtersHeight(isAgeMenuOpen, isGenderMenuOpen) : '0px'};
  padding: 8px;

  background-color: ${({ theme }) => theme.color.cardBG};
  border-radius: 20px;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  will-change: opacity, max-height;
  overflow: hidden;

  transition:
    opacity ${({ isOpen }) => (isOpen ? '200ms' : '550ms')}
      cubic-bezier(0.4, 0, 0.2, 1),
    height 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const FiltersText = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.color.btnDark};
  text-align: left;
`;

export { FilterWrapper, Btn, Filters, FiltersText };

function filtersHeight(ageFilterFlag, genderFilterFlag) {
  if (!ageFilterFlag && !genderFilterFlag) {
    return '118px';
  } else if (ageFilterFlag && !genderFilterFlag) {
    return '225px';
  } else if (!ageFilterFlag && genderFilterFlag) {
    return '195px';
  } else {
    return '305px';
  }
}
