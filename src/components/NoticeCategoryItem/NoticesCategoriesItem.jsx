import React, { useState } from 'react';
import { useAuth } from 'hooks';

import {
  Header,
  NoticeItem,
  Status,
  Information,
  InformationItem,
  Favorite,
  Top,
  Footer,
  BtnStyled,
  DeletePet,
  Wrapper,
} from './NoticesCategoriesItem.styled';
import ListIcons from 'images/icons/ListIcons';
import { Description } from 'components/NewsList/NewsList.styled';
import { addFavoriteNotices, removeNotices } from 'services/notices';
import { Notify } from 'notiflix';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import ModalNotices from 'components/ModalNotices/ModalNotices';

const NoticesCategoriesItem = ({ animal, setNoticesList }) => {
  const [error, setError] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [isModalAtention, setModalAtention] = useState(false);

  if (2 === 1) {
    removeNotices('id');
    console.log('error', error);
	}
	const isCloseModal = () => setModalAtention(false);

  const handleClose = () => setIsOpen(false);

  const addToFavorite = id => {
    addFavoriteNotices(id)
      .then(res => {
        if (res.status === 204) {
          Notify.success('Notices ad removed from favorites', {
            timeout: 4000,
          });
        }
        if (res.status === 200) {
          Notify.success('The notices has been added to favorites', {
            timeout: 4000,
          });
        }
      })
      .catch(err => {
        setError(err);
        Notify.failure(err.response.data.message, {
          timeout: 4000,
        });
      });
  };

  const acceptColor = '#54ADFF';
  const { isLoggedIn } = useAuth();

  return (
    <NoticeItem>
      <Header img={animal}>
        <Wrapper>
          <Top>
            <Status>
              {animal.category === 'for-free'
                ? 'In good hands'
                : animal.category}
            </Status>
            <Favorite
              onClick={
                isLoggedIn
                  ? () => addToFavorite(animal._id)
                  : () => setModalAtention(true)
              }
            >
              {ListIcons(null, 'IconHeart')}
            </Favorite>
            {isModalAtention && <ModalAttention close={isCloseModal} />}
          </Top>
          {isLoggedIn && (
            <DeletePet onClick={() => removeNotices(animal._id)}>
              {ListIcons(null, 'IconTrash2')}
            </DeletePet>
          )}
        </Wrapper>
        <Information>
          <InformationItem>
            {ListIcons(null, 'IconLocation1')}
            <span>{animal.place}</span>
          </InformationItem>
          <InformationItem>
            {ListIcons(null, 'IconClock')}
            <span>
              {animal.age} {animal.age > 1 ? 'years' : 'year'}
            </span>
          </InformationItem>
          <InformationItem>
            {ListIcons(null, animal.sex !== 'male' ? 'IconFemale' : 'IconMale')}
            <span>{animal.sex}</span>
          </InformationItem>
        </Information>
      </Header>
      <Footer>
        <Description>{animal.title}</Description>
        <BtnStyled onClick={() => setIsOpen(true)} color={acceptColor}>
          Learn more
        </BtnStyled>
      </Footer>

    {isOpen &&  <ModalNotices  handleClose={handleClose} animal={animal} addToFavorite={addToFavorite}></ModalNotices>}
   </NoticeItem>
  );
};

export default NoticesCategoriesItem;
