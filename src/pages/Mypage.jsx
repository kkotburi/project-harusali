import styled from 'styled-components';
import BtnSection from '../components/MyPage/BtnSection';
import CardSection from '../components/MyPage/CardSection';
import { Inner, SectionContainer } from '../components/mainpage-mypage/main-mypage.styled';
import MyPageHeader from '../components/MyPage/MyPage.Header';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Mypage = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log('user', user);
    });
  }, []);
  // 사용자 정보 확인용

  return (
    <Inner>
      <MyPageHeader />
      <Container>
        <CardSection />
        <BtnSection />
      </Container>
    </Inner>
  );
};

export default Mypage;

const Container = styled(SectionContainer)`
  background-color: gray;
  display: flex;
`;
