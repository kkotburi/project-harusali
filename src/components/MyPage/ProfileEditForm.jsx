// style
import { styled } from 'styled-components';
import { BtnFill } from '../Btn.styled/Btn.style';
import { InputArea, BtnArea } from '../Users/styled/users.styled';
// react
import React, { useEffect, useState } from 'react';
// firebase
import { auth, db, storage } from '../../firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const ProfileEditForm = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user);
    });
  }, []);
  // 사용자 정보 확인용

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const fetchData = async () => {
        const usersQuery = query(collection(db, 'users'));
        const querySnapshot = await getDocs(usersQuery);
        querySnapshot.forEach((doc) => {
          if (doc.data().uid === user.uid) {
            console.log(doc.data().userPiece.profileimg);
          }
        });
        // firestore에서 가져온 data를 state에 전달
      };
      fetchData();
    });
  }, []);
  // profile image data 확인용

  const [profileimgData, setProfileimgData] = useState(null);
  const [profileimg, setProfileImg] = useState(null);
  const [nickName, setNickName] = useState('');

  // image file 올리기
  const handleFileSelect = (event) => {
    setProfileimgData(event.target.files[0]);
  };

  const handleUpload = async () => {
    const imageRef = ref(storage, `${auth.currentUser.uid}/profileimg/${profileimgData.name}`);
    await uploadBytes(imageRef, setProfileimgData);

    const downloadURL = await getDownloadURL(imageRef);
    console.log('downloadURL', downloadURL);
  };

  const dispatch = useDispatch();
  // image file 올리기

  return (
    <form
      onSubnit={(event) => {
        dispatch({
          uid: '7m9oJnT0rtURDvLxypCOjs4IFig2',
          userPiece: {
            id: '123@123.com',
            nickname: '123',
            profileimg:
              'https://firebasestorage.googleapis.com/v0/b/project-newsfeed-cf73e.appspot.com/o/7m9oJnT0rtURDvLxypCOjs4IFig2%2Fprofileimg%2Fimage%20(1).png?alt=media&token=f8c7fb90-337b-4dc7-b5c0-1e87e82ea22d'
          },
          userLike: { follow: [], following: [] }
        });

        event.preventDefault();
      }}
    >
      <ImgArea>
        <PreviewImg src={profileimg} />
        {/* <InputArea type="file" name="image" value={profileimg} onChange={handleFileSelect} /> */}
      </ImgArea>
      <InputArea type="text" placeholder={nickName} />
      <BtnArea>
        <BtnFill size="M" type="submit" onClick={handleUpload}>
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
  cursor: pointer;

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
