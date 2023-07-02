import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { BtnFill } from '../Btn.styled/Btn.style';
import { auth, db, storage } from '../../firebase';
import { collection, doc, setDoc, getDocs, updateDoc } from 'firebase/firestore';
import { Title, TitleCaption, InputArea } from '../users/styled/users.styled';
import { ContentBox, ModalBg } from '../../Modal.styled/Modal.styled';
import { useSelector } from 'react-redux';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import InspectionCaption from '../users/styled/InspectionCaption';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../redux/modules/userData';
import { myDataSetting } from '../../redux/modules/Alluser';

const ProfileEditModal = ({ setProfileEditModalOpen }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.loginUserReducer);
  const postData = useSelector((state) => state.Posts);
  const [myPost, setMyPost] = useState([]);

  useEffect(() => {
    const todayPost = postData.filter((post) => {
      return post.writerInfo.uid === user.uid;
    });

    setMyPost(todayPost);
  }, [postData]);

  const { uid, userPiece } = user;
  // const modalRef = useRef();
  const [nickName, setNickName] = useState('');
  const [profileimg, setProfileImg] = useState(null);
  const [currentProfileImg, setCurrentProfileImg] = useState('');
  const [newProfileimgData, setNewProfileimgData] = useState(null);
  const [nickNamestate, setNickNameState] = useState('');
  const imageRef = useRef('');

  useEffect(() => {
    setProfileImg(userPiece.profileimg);
    setNickName(userPiece.nickname);
    setCurrentProfileImg(userPiece.profileimg);
  }, []);

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
    const editUser = {
      uid: user.uid,
      userPiece: {
        id: userPiece.id,
        nickname: nickName,
        profileimg: profileimg
      }
    };
    if (newProfileimgData !== null) {
      const desertRef = ref(storage, currentProfileImg);
      await deleteObject(desertRef);
      const imageRef = ref(storage, `${user.uid}/profileimg/${newProfileimgData.name}`);
      await uploadBytes(imageRef, newProfileimgData);
      const downloadUrl = await getDownloadURL(imageRef);
      editUser.userPiece.profileimg = downloadUrl;

      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, editUser);
      dispatch(LoginUser(editUser));
      dispatch(myDataSetting(editUser));
      setProfileEditModalOpen(false);
    } else {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, editUser);

      dispatch(LoginUser(editUser));
      dispatch(myDataSetting(editUser));
      setProfileEditModalOpen(false);
    }

    // navigate('/home');
  };

  return (
    <>
      <ModalBg>
        <EditModalContainer>
          <Title>UserSetting</Title>
          <TitleCaption>변경할 닉네임과 프로필 사진을 지정하세요.</TitleCaption>
          <ImgArea
            onClick={() => {
              imageRef.current?.click();
            }}
          >
            <PreviewImg src={profileimg} color="red" alt="priview-img" />
            <InputArea
              type="file"
              name="email"
              style={{ visibility: 'hidden' }}
              placeholder="프로필 사진을 선택하세요."
              onChange={(event) => {
                encodeFileTobase64(event.target.files[0]);
                setNewProfileimgData(event.target.files[0]);
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
          <div>
            <BtnFill
              state="negative"
              size="m"
              width="100"
              onClick={() => {
                setProfileEditModalOpen(false);
              }}
            >
              닫기
            </BtnFill>
            <BtnFill size="m" width="100" onClick={userSetting}>
              수정하기
            </BtnFill>
          </div>
        </EditModalContainer>
      </ModalBg>
    </>
  );
};

export default ProfileEditModal;

const EditModalContainer = styled(ContentBox)`
  height: 400px;
  width: 400px;
`;

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
