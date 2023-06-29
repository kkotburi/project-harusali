import React, { useState, useRef } from 'react';
import { InputArea, BtnArea } from './styled/users.styled';
import { BtnFill } from '../Btn.style';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../../firebase';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import InspectionCaption from './styled/InspectionCaption';

const UserSettingForm = () => {
  const [nickName, setNickName] = useState('');
  const [profileimg, setProfileImg] = useState(null);
  const [profileimgData, setprofileimgData] = useState(null);
  const [currentNickNames, setCurrentNickNames] = useState([]);
  const [nickNamestate, setNickNameState] = useState('');
  const imageRef = useRef('');

  const navigate = useNavigate();

  const userSetting = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;

    if (nickName.length < 3) {
      setNickNameState('none');
      setNickName('');
      return;
    }

    let currentNickname = [];
    const userRef = collection(db, 'users');
    const querySnapshot = await getDocs(userRef);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      currentNickname.push(doc.data().userPiece.nickname);
    });

    if (currentNickname.indexOf(nickName) >= 0) {
      setNickNameState('overlap');
      setNickName('');
      return;
    }

    const newUser = {
      uid: user.uid,
      userPiece: {
        id: user.email,
        nickname: nickName,
        profileimg: ''
      },
      userLike: { follow: [], following: [] }
    };

    if (profileimg !== null) {
      const imageRef = ref(storage, `${user.uid}/profileimg/${profileimgData.name}`);
      await uploadBytes(imageRef, profileimgData);
      const downloadUrl = await getDownloadURL(imageRef);
      newUser.userPiece.profileimg = downloadUrl;

      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, newUser);
    } else {
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, newUser);
    }
    navigate('/home');
  };

  const encodeFileTobase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setProfileImg(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <ImgArea
        profileimg={profileimg ? profileimg : ''}
        onClick={() => {
          imageRef.current?.click();
        }}
      >
        {profileimg && <PreviewImg src={profileimg} color="red" alt="priview-img"></PreviewImg>}
        <InputArea
          type="file"
          name="email"
          style={{ visibility: 'hidden' }}
          placeholder="프로필 사진을 선택하세요."
          onChange={(event) => {
            encodeFileTobase64(event.target.files[0]);
            setprofileimgData(event.target.files[0]);
          }}
          ref={imageRef}
        ></InputArea>
      </ImgArea>

      <div>
        <div></div>
        <InputArea
          type="email"
          name="email"
          placeholder="3자 이상 입력하세요"
          value={nickName}
          onChange={(event) => {
            setNickName(event.target.value);
          }}
        ></InputArea>
      </div>
      <InspectionCaption nickNamestate={nickNamestate}></InspectionCaption>
      <BtnArea>
        <BtnFill size="M" type="submit" onClick={userSetting}>
          시작하기!
        </BtnFill>
      </BtnArea>
    </>
  );
};

export default UserSettingForm;

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
