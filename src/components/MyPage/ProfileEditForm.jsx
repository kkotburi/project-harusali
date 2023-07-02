import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { BtnFill } from '../Btn.styled/Btn.style';
import { InputArea, BtnArea } from '../Users/styled/users.styled';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const ProfileEditForm = () => {
  // redux
  const loginUser = useSelector((state) => state.loginUserReducer);
  const profileImgLink = loginUser.userPiece.profileimg;
  const nickname = loginUser.userPiece.nickname;
  const id = loginUser.userPiece.id;
  const dispatch = useDispatch();

  const [newProfileimg, setNewProfileimg] = useState('');
  const [newNickname, setNewNickname] = useState(nickname);

  // firebase
  const updateUser = async (event) => {
    const userRef = doc(db, 'users', loginUser.uid);
    await updateDoc(userRef, {
      uid: loginUser.uid,
      userPiece: {
        id,
        profileimg: newProfileimg,
        nickname: newNickname
      }
    });
  };

  // firebase - EditModal.jsx;
  // const updateUser = async () => {
  //   const userRef = doc(db, 'users', String(user?.uid));
  //   const editProfile = {
  //     uid: user?.uid,
  //     userPiece: {
  //       nickname: newNickname,
  //       profileimg: newProfileimg
  //     }
  //   };
  //   await updateDoc(userRef, editProfile);
  // };

  return (
    <form
      key={loginUser.uid}
      onSubmit={(event) => {
        if (!newNickname) {
          alert('닉네임을 3자 이상 입력해 주세요!');
        }

        dispatch({
          type: 'EDIT_PROFILE',
          payload: {
            uid: loginUser.uid,
            userPiece: {
              nickname: newNickname,
              profileimg: newProfileimg
            }
          }
        });
        event.preventDefault();
      }}
    >
      <ImgArea>
        <PreviewImg src={profileImgLink} />
      </ImgArea>
      <input
        type="text"
        name="newProfilimg"
        value={newProfileimg}
        onChange={(event) => {
          setNewProfileimg(event.target.value);
        }}
      />
      <div>
        <InputArea
          type="text"
          name="newNickname"
          value={newNickname}
          onChange={(event) => {
            setNewNickname(event.target.value);
          }}
        />
      </div>
      <BtnArea>
        <BtnFill size="M" type="submit" onClick={updateUser}>
          수정하기
        </BtnFill>
      </BtnArea>
    </form>
  );
};

export default ProfileEditForm;

const ImgArea = styled.div`
  background-color: #9bcdfb;
  width: 110px;
  height: 110px;
  border-radius: 100px;
  margin: 10px 0;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: #5763d4;
  }
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
