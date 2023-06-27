import React, { useEffect, useState } from "react";
import { InputArea, BtnArea } from "./styled/users.styled";
import { BtnFill } from "../Btn.style";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const UserSettingForm = () => {
  const [nickName, setNickName] = useState("");
  const [profileImg, setProfileImg] = useState(null);

  const navigate = useNavigate();

  const userSetting = async (event) => {
    event.preventDefault();

    const user = auth.currentUser;
    const imageRef = ref(storage, `${user.uid}/profileImg/${profileImg.name}`);
    await uploadBytes(imageRef, profileImg);
    const downloadUrl = await getDownloadURL(imageRef);
    const newUser = {
      uid: user.uid,
      userPiece: {
        id: user.email,
        nickname: nickName,
        profileImg: downloadUrl,
      },
      userLike: { follow: [], following: [] },
    };
    // const allUserDataRef = collection(db, "user");
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, newUser);

    navigate("/home");
  };

  return (
    <>
      <div>
        <InputArea
          type="email"
          name="email"
          placeholder="닉네임을 입력하세요."
          value={nickName}
          onChange={(event) => {
            setNickName(event.target.value);
          }}
        ></InputArea>
        <BtnFillInline>중복확인</BtnFillInline>
      </div>
      <div>
        <InputArea
          type="file"
          name="email"
          placeholder="프로필 사진을 선택하세요."
          onChange={(event) => {
            setProfileImg(event.target.files[0]);
          }}
        ></InputArea>
      </div>
      <BtnArea>
        <BtnFill size="M" type="submit" onClick={userSetting}>
          시작하기!
        </BtnFill>
      </BtnArea>
    </>
  );
};

export default UserSettingForm;

const BtnFillInline = styled(BtnFill)`
  /* position: absolute; */
  right: 1px;
  padding: 5px;
  bottom: 5px;
`;
