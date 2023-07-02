import React, { useEffect, useRef, useState } from 'react';
import { BtnFill } from '../Btn.styled/Btn.style';
import { styled } from 'styled-components';
import { Container, Title, TitleCaption } from '../Users/styled/users.styled';
import ProfileEditForm from './ProfileEditForm';

function ProfileEditModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const clickOutside = (event) => {
    if (modalRef.current && modalRef.current === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  });

  return (
    <>
      <BtnFill onClick={openModal}>내 정보 수정하기</BtnFill>
      {isOpen && (
        <StModalBox ref={modalRef}>
          <Container>
            <button onClick={closeModal}>×</button>
            <Title>UserSetting</Title>
            <TitleCaption>변경할 닉네임과 프로필 사진을 지정하세요.</TitleCaption>
            <ProfileEditForm />
          </Container>
        </StModalBox>
      )}
    </>
  );
}

export default ProfileEditModal;

const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
