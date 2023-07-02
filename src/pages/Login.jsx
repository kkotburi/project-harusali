import React, { useEffect } from 'react';
import { LoginPageBg, Container, Title, TitleCaption } from '../components/users/styled/users.styled';
import LoginForm from '../components/users/LoginForm';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log('user', user);
    });
  }, []);
  // 사용자 정보 확인용

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
