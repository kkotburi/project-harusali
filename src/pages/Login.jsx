import React from "react";
import { styled } from "styled-components";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginPageBg>
      <Container>
        <Title>Login</Title>
        <TitleCaption>로그인하고 어쩌구저쩌구 하세요.</TitleCaption>
        <InputArea placeholder="이메일입력해"></InputArea>
        <InputArea placeholder="비번입력해"></InputArea>
        <BtnArea>
          <Btn>로그인</Btn>
          <Btn
            onClick={() => {
              navigate("/signin");
            }}
          >
            회원가입
          </Btn>
        </BtnArea>
      </Container>
    </LoginPageBg>
  );
};

export default Login;

export const LoginPageBg = styled.div`
  background-color: #9bcdfb;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  color: #5763d4;
  margin: 20px;
`;

export const InputArea = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  margin: 5px;
  width: 200px;
`;

export const TitleCaption = styled.p`
  margin: 10px;
`;

export const BtnArea = styled.div`
  margin: 10px;
`;
export const Btn = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
