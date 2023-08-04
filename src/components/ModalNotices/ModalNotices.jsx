import { BackDrop,Image, CloseButton, Modal, ModalComments, ModalHeader,
     ModalInfo, ModalPersonality, ModalPersonalityField, ModalPersonalityKey,
      ModalPersonalityLink, ModalPersonalityValue, ModalPhoto, ModalStatus, 
       WrapBtn, StyledNavLink, BtnContacts, Title } from "./ModalNotices.styled"
import IconHeart from 'images/icons/IconHeart';
import dateFormat  from "dateformat";
import { useAuth } from 'hooks';

import ListIcons from 'images/icons/ListIcons';
import { useCallback, useEffect } from "react";
import theme from "components/theme";

const ModalNotices = ({animal, addToFavorite,  handleClose}) => {
    const { currentTheme } = useAuth();
    const handleKeyDown = useCallback(
        e => {
          if (e.code === 'Escape') {
            handleClose() ;
          }
        },
        [handleClose]
      );
    
      const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            handleClose();
        }
      };
    
      useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [handleKeyDown]);

    // const acceptColor = '#54ADFF';

return(<>
  <BackDrop onClick={handleBackdropClick}>
  <Modal  handleClose={handleClose} animal={animal}>
  <CloseButton onClick={handleClose}> {ListIcons(null, 'IconPlus')}</CloseButton>
        <ModalHeader>
        <ModalPhoto>
          <ModalStatus>
              {animal.category === 'for-free'
                ? 'In good hands'
                : animal.category}
            </ModalStatus>
            <Image src={animal.photoUrl} alt={animal.name || 'animal'} />
          </ModalPhoto>
          <ModalInfo>
            <Title>{animal.title}</Title>
            <ModalPersonality>
              <ModalPersonalityField>
                <ModalPersonalityKey>Name:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.name}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Birthday:</ModalPersonalityKey>
                <ModalPersonalityValue>{dateFormat(new Date(animal.birthday), 'dd.mm.yyyy')}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Breed:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.breed}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Location:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.place}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>The sex:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.sex}</ModalPersonalityValue>
              </ModalPersonalityField>

               <ModalPersonalityField>
                <ModalPersonalityKey>Email:</ModalPersonalityKey>
                <ModalPersonalityValue>
                  <ModalPersonalityLink href={`mailto:${animal.email}`}>
                    {animal.email}
                  </ModalPersonalityLink>
                </ModalPersonalityValue>
              </ModalPersonalityField>
                
              {animal.phone && <ModalPersonalityField>
                <ModalPersonalityKey>Phone:</ModalPersonalityKey>
                <ModalPersonalityValue>
                  <ModalPersonalityLink href={`tel:${animal.phone}`}>
                    {animal.phone}
                  </ModalPersonalityLink>
                </ModalPersonalityValue>
              </ModalPersonalityField>
              }
            </ModalPersonality>
          </ModalInfo>
        </ModalHeader>
       {animal.comments && <div className="modal-footer">
          <ModalComments>
            <b>Comments:</b> {animal.comments}
          </ModalComments>
        </div>
       }
        <WrapBtn>
          <StyledNavLink onClick={() => addToFavorite(animal._id)}>
            Add to <IconHeart fill={theme[currentTheme].color.bodyColor}/>
          </StyledNavLink>
          <BtnContacts href={`tel:${animal.phone}`} target="_blank">
            Contacts
          </BtnContacts>
        </WrapBtn>
      </Modal>
      </BackDrop>
      </>
)
}
export default ModalNotices