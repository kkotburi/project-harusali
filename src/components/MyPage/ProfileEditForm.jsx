import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

function ProfileEditForm() {
  const { id } = useParams();

  const dispatch = useDispatch();

  // user 정보
  const users = useSelector((state) => state.users);
  const user = users.filter((user) => user.uid === id)[0];
  const uid = user.uid;
  const currnetProfileimg = user.userPiece.profileimg;
  const currnetNickname = user.userPiece.nickname;

  const [newProfileimg, setProfilimg] = useState('');
  const [newNickname, setNewNickname] = useState(currnetNickname);

  return (
    <form
      onSubmit={(event) => {
        if (!newNickname) {
          alert('닉네임을 3자 이상 입력해 주세요!');
        }

        dispatch({
          type: 'EDIT_PROFILE',
          payload: {
            uid,
            userPiece: {
              nickname: newNickname,
              profileimg: newProfileimg
            }
          }
        });
        event.preventDefault();
      }}
    >
      <p>{user.uid}</p>
      <StPreviewImg src={currnetProfileimg} />
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
