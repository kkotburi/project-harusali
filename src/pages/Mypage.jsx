import styled from 'styled-components';
import BtnSection from '../components/MyPage/BtnSection';
import CardSection from '../components/MyPage/CardSection';
import { Inner, SectionContainer } from '../components/mainpage-mypage/main-mypage.styled';
import MyPageHeader from '../components/MyPage/MyPage.Header';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { PageBg } from './MainPage';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        navigate('/');
      }
    });
  }, []);
  return (
    <PageBg>
      <Inner>
        <MyPageHeader />

        <Container>
          <CardSection />
          <BtnSection />
        </Container>
      </Inner>
    </PageBg>
  );
};

export default Mypage;

const Container = styled(SectionContainer)`
  display: flex;
`;
