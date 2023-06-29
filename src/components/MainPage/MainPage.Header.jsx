import React from 'react';
import { styled } from 'styled-components';
import {
  HeaderContainer,
  LogoImg,
  Profile,
  HelloTitle,
  EncouragementText,
  ProfileCircle
} from '../mainpage-mypage/main-mypage.styled';

const MainPageHeader = () => {
  return (
    <Container>
      <Contents>여기에 글 숫자 써서 질수없겠죠? 어쩌구 써야합니다.</Contents>
      <LogoContent>
        <LogoImg>로고이미지</LogoImg>
      </LogoContent>
      <ProfileContent>
        <ProfileCircle>
          <Profile src="https://th.bing.com/th/id/R.8c23b7f0f9950ec55052dd4d9fb155d3?rik=IA6g1y3itWeEyg&riu=http%3a%2f%2ffile3.instiz.net%2fdata%2fcached_img%2fupload%2f2023%2f01%2f01%2f12%2f2f77c8ce337e12c0aef5c5278d22f207.jpg&ehk=zk2rLH3BzvLCKYMi23peE3HZuVGt8C34dAUDS7pWlfQ%3d&risl=&pid=ImgRaw&r=0"></Profile>
        </ProfileCircle>
        <HelloTitle>하루살이님 반가워요!</HelloTitle>
        <EncouragementText>오늘도 작성하셨네요 굿👍</EncouragementText>
      </ProfileContent>
    </Container>
  );
};

export default MainPageHeader;

const Container = styled(HeaderContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Contents = styled.div`
  background-color: beige;
  height: 230px;
  flex-basis: 300px;
  flex-grow: 1;
`;
const ProfileContent = styled(Contents)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: right;
`;
const LogoContent = styled(Contents)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
