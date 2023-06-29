import React from 'react';
import CardScrollArea from '../components/MainPage/CardScrollArea';
import MainPageHeader from '../components/MainPage/MainPage.Header';
import { styled } from 'styled-components';
import { Inner } from '../components/mainpage-mypage/main-mypage.styled';
import { SectionContainer } from '../components/mainpage-mypage/main-mypage.styled';
import { BtnFill } from '../components/Btn.style';

const MainPage = () => {
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
