import React, { useEffect } from 'react';
import { LoginPageBg, Container, Title, TitleCaption } from '../components/Users/styled/users.styled';
import LoginForm from '../components/Users/LoginForm';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  useEffect(() => {
    signOut(auth);
  }, []);

  return (
    <LoginPageBg>
      <Container>
        <Title>Login</Title>
        <TitleCaption>로그인 후 이용할 수 있습니다.</TitleCaption>
        <LoginForm></LoginForm>
      </Container>
    </LoginPageBg>
  );
};

export default Login;
