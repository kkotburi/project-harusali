// 임시 프로필 수정
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import ProfileEditModal from '../components/MyPage/ProfileEditModal';

const ProfileEdit = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.users);
  const user = users.filter((user) => user.uid === id)[0];
  const profileimg = user.userPiece.profileimg;
  const nickname = user.userPiece.nickname;

  return (
    <>
      <h2>ProfileEdit</h2>
      <p>{user.uid}</p>
      <StPreviewImg src={profileimg} />
      <p>{nickname} </p>
      <ProfileEditModal />
    </>
  );
};

export default ProfileEdit;

const StPreviewImg = styled.img`
  width: 300px;
`;
// 임시 프로필 수정
