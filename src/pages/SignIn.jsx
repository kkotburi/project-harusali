import React from "react";
import {
  LoginPageBg,
  Container,
  Title,
  TitleCaption,
} from "../components/users/styled/users.styled";
import SigninForm from "../components/users/SigninForm";

const SignIn = () => {
  return (
    <LoginPageBg>
      <Container>
        <Title>SignIn</Title>
        <TitleCaption>회원가입 후 서비스를 이용하세요.</TitleCaption>
        <SigninForm />
      </Container>
    </LoginPageBg>
  );
};

export default SignIn;
