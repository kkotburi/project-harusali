import React from 'react';
import { LoginPageBg, Container, Title, TitleCaption } from '../components/Users/styled/users.styled';
import UserSettingForm from '../components/Users/UserSettingForm';

const UserSetting = () => {
  return (
    <LoginPageBg>
      <Container>
        <Title>UserSetting</Title>
        <TitleCaption>사용할 닉네임과 프로필 사진을 지정하세요.</TitleCaption>
        <UserSettingForm />
      </Container>
    </LoginPageBg>
  );
};

export default UserSetting;
