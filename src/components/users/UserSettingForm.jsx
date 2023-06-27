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
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const UserSettingForm = () => {
  const [nickName, setNickName] = useState("");
  const [profileImg, setProfileImg] = useState(null);

  const navigate = useNavigate();

  const nickNameInspection = async () => {
    let currentNickname = [];
    const userRef = collection(db, "users");
    const querySnapshot = await getDocs(userRef);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      currentNickname.push(doc.data().userPiece.nickname);
    });
    if (currentNickname.indexOf(nickName) >= 0) {
      alert("이미 있는 닉네임입니다. 다시 작성하세요.");
      setNickName("");
      return;
    }
  };

  const userSetting = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;

    const newUser = {
      uid: user.uid,
      userPiece: {
        id: user.email,
        nickname: nickName,
        profileImg: "",
      },
      userLike: { follow: [], following: [] },
    };

    if (profileImg !== null) {
      const imageRef = ref(
        storage,
        `${user.uid}/profileImg/${profileImg.name}`
      );
      await uploadBytes(imageRef, profileImg);
      const downloadUrl = await getDownloadURL(imageRef);
      newUser.userPiece.profileImg = downloadUrl;

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, newUser);
    } else {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, newUser);
    }
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
        <BtnFillInline onClick={nickNameInspection}>중복확인</BtnFillInline>
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
