import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnFill } from '../Btn.styled/Btn.style';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

import WriteModal from '../../Modal.styled/WriteModal';

import ProfileEditModal from './ProfileEditModal';
import { useNavigate } from 'react-router-dom';

const BtnArea = () => {
  const navigate = useNavigate();
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [profileEditModalOpen, setProfileEditModalOpen] = useState(false);

  const WriteBtnHandler = (event) => {
    setWriteModalOpen(true);
  };

  const ProfileEditBtnHandler = (event) => {
    setProfileEditModalOpen(true);
  };

  return (
    <>
      {writeModalOpen && <WriteModal setModalOpen={setWriteModalOpen}></WriteModal>}
      {profileEditModalOpen && <ProfileEditModal setProfileEditModalOpen={setProfileEditModalOpen}></ProfileEditModal>}
      <BtnSection>
        <BtnFill onClick={WriteBtnHandler} width="150">
          글 작성
        </BtnFill>
        <BtnFill onClick={ProfileEditBtnHandler} width="150">
          내 정보 수정하기
        </BtnFill>
        <BtnFill
          width="150"
          state="disable"
          onClick={() => {
            signOut(auth);
            navigate('/');
          }}
        >
          로그아웃
        </BtnFill>
      </BtnSection>
    </>
  );
};
export default BtnArea;

const BtnSection = styled.section`
  width: 300px;
  height: calc(100vh - 500px);

  flex-basis: 300px;
  flex-grow: 1;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
`;
