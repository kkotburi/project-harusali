import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

function ProfileEditForm() {
  const loginUser = useSelector((state) => state.loginUserReducer);
  const profileImgLink = loginUser.userPiece.profileimg;
  const nickname = loginUser.userPiece.nickname;

  const { id } = useParams();

  const dispatch = useDispatch();

  // user 정보
  const [newProfileimg, setProfilimg] = useState('');
  const [newNickname, setNewNickname] = useState(nickname);

  return (
    <form
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
      <StPreviewImg src={profileImgLink} />
      <input
        type="text"
        name="newProfilimg"
        value={newProfileimg}
        onChange={(event) => {
          setProfilimg(event.target.value);
        }}
      />
      <input
        type="text"
        name="newNickname"
        value={newNickname}
        onChange={(event) => {
          setNewNickname(event.target.value);
        }}
      />
      <button type="submit">수정하기</button>
    </form>
  );
}

export default ProfileEditForm;

const StPreviewImg = styled.img`
  width: 300px;
`;
