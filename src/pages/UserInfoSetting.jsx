import React, { useState } from "react";
import {
  Title,
  TitleCaption,
  InputArea,
  Container,
  LoginPageBg,
  Btn,
  BtnArea,
} from "./Login";
const UserInfoSetting = () => {
  const [nickName, setNickName] = useState("");

  return (
    <LoginPageBg>
      <Container>
        <Title>당신은 누구인가요?</Title>
        <TitleCaption>사람들에게 보여질 모습을 선택하세요.</TitleCaption>
        <InputArea
          type="text"
          placeholder="닉네임을 입력해주세요."
          accept="image/*"
          value={nickName}
          onChange={(event) => {
            console.log("잘들어오니?");
            setNickName(event.target.value);
          }}
        ></InputArea>

        <InputArea
          type="file"
          placeholder="프로필사진을 업로드 하세요."
        ></InputArea>
        <BtnArea>
          <Btn>시작하기</Btn>
        </BtnArea>
      </Container>
    </LoginPageBg>
  );
};

export default UserInfoSetting;
