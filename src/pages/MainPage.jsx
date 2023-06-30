import React, { useEffect } from 'react';
import CardScrollArea from '../components/MainPage/CardScrollArea';
import MainPageHeader from '../components/MainPage/MainPage.Header';
import { styled } from 'styled-components';
import { Inner } from '../components/mainpage-mypage/main-mypage.styled';
import { SectionContainer } from '../components/mainpage-mypage/main-mypage.styled';
import { BtnFill } from '../components/Btn.styled/Btn.style';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const MainPage = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user);
    });
  }, []);
  // 사용자 정보 확인용

  return (
    <Inner>
      <MainPageHeader></MainPageHeader>
      <SectionContainer>
        <CardScrollArea></CardScrollArea>
      </SectionContainer>
      <WriteBtn size="L">글 작성하기</WriteBtn>
    </Inner>
  );
};

export default MainPage;

const WriteBtn = styled(BtnFill)`
  position: fixed;
  z-index: 999;
  bottom: 50px;
  left: 50%;
  margin: 0 auto;
  left: calc((100vw - 150px) / 2);
  right: calc((100vw - 150px) / 2);
`;
