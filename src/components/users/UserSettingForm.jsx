import React, { useState, useRef, useEffect } from 'react';
import { InputArea, BtnArea } from './styled/users.styled';
import { BtnFill } from '../Btn.styled/Btn.style';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../../firebase';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import InspectionCaption from './styled/InspectionCaption';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../redux/modules/userData';
import { signInSetting } from '../../redux/modules/Alluser';

const UserSettingForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {});
  }, []);

  const [nickName, setNickName] = useState('');
  const [profileimg, setProfileImg] = useState(null);
  const [profileimgData, setprofileimgData] = useState(null);
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
        profileimg:
          'https://firebasestorage.googleapis.com/v0/b/react-week2-5375f.appspot.com/o/276f46d26122f515a4362993e0bfd141.jpg?alt=media&token=e856f6e2-f25a-4548-a41d-e57da36b8c0e'
      },
      userLike: { follow: [], following: [] }
    };

    const editUser = {
      uid: user.uid,
      userPiece: {
        id: user.email,
        nickname: nickName,
        profileimg:
          'https://firebasestorage.googleapis.com/v0/b/react-week2-5375f.appspot.com/o/276f46d26122f515a4362993e0bfd141.jpg?alt=media&token=e856f6e2-f25a-4548-a41d-e57da36b8c0e'
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
      dispatch(LoginUser(newUser));
      dispatch(signInSetting(editUser));
    } else {
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, newUser);
      dispatch(LoginUser(newUser));
      dispatch(signInSetting(editUser));
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
        {profileimg ? <PreviewImg src={profileimg} color="red" alt="priview-img" /> : `클릭!`}
        <InputArea
          type="file"
          name="email"
          style={{ display: 'none' }}
          placeholder="프로필 사진을 선택하세요."
          onChange={(event) => {
            encodeFileTobase64(event.target.files[0]);
            setprofileimgData(event.target.files[0]);
          }}
          ref={imageRef}
        />
      </ImgArea>
      <div>
        <InputArea
          type="email"
          name="email"
          placeholder="3자 이상 입력하세요"
          value={nickName}
          onChange={(event) => {
            setNickName(event.target.value);
          }}
        />
      </div>
      <InspectionCaption nickNamestate={nickNamestate} />
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
  text-align: center;
  background-color: #9bcdfb;
  width: 110px;
  height: 110px;
  border-radius: 100px;
  margin: 10px 0;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  color: white;
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
