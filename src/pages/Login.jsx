import React from "react";
import { styled } from "styled-components";
import { getAuth } from "firebase/auth";

const Login = () => {
  return (
    <LoginPageBg>
      <Container>
        <Title>타이틀</Title>
        <InputArea placeholder="이메일입력해"></InputArea>
        <InputArea placeholder="비번입력해"></InputArea>
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
`;

const InputArea = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  padding: 5px;
  text-align: center;
`;
