import React from 'react';
import { LoginPageBg, Container, Title, TitleCaption } from '../components/users/styled/users.styled';
import SignUpForm from '../components/users/SignUpForm';

const SignUp = () => {
  return (
    <LoginPageBg>
      <Container>
        <Title>SignUp</Title>
        <TitleCaption>회원가입 후 서비스를 이용하세요.</TitleCaption>
        <SignUpForm />
      </Container>
    </LoginPageBg>
  );
};

export default SignUp;
