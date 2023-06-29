import styled from 'styled-components';
import BtnSection from '../components/MyPage/BtnSection';
import CardSection from '../components/MyPage/CardSection';
import { Inner, SectionContainer } from '../components/mainpage-mypage/main-mypage.styled';
import MyPageHeader from '../components/MyPage/MyPage.Header';

const Mypage = () => {
  return (
    <Inner>
      <MyPageHeader></MyPageHeader>
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
