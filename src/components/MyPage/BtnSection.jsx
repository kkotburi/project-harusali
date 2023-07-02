import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnFill } from '../Btn.styled/Btn.style';

import WriteModal from '../../Modal.styled/WriteModal';

import ProfileEditModal from './ProfileEditModal';

const BtnArea = () => {
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
        <BtnFill onClick={WriteBtnHandler}>글 작성</BtnFill>
        {/* {editmodal ? <ProfileEditModal /> : " "} */}
        <BtnFill onClick={ProfileEditBtnHandler}> 내 정보 수정하기 </BtnFill>
      </BtnSection>
    </>
  );
};
export default BtnArea;

const BtnSection = styled.section`
  //   position: fixed;

  //   top: 230px;
  //   right: 0px;
  width: 300px;
  height: calc(100vh - 230px);
  background-color: #61dafb;
  flex-basis: 300px;
  flex-grow: 1;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
`;
