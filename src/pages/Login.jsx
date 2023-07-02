import React, { useEffect } from 'react';
import { LoginPageBg, Container, Title, TitleCaption } from '../components/users/styled/users.styled';
import LoginForm from '../components/users/LoginForm';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  return (
    <LoginPageBg>
      <Container>
        <Title>Login</Title>
        <TitleCaption>로그인 후 이용할 수 있습니다.</TitleCaption>
        <LoginForm />
      </Container>
    </LoginPageBg>
  );
};

export default Login;
