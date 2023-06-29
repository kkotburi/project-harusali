import {
  HeaderContainer,
  LogoImg,
  Profile,
  HelloTitle,
  EncouragementText,
  ProfileCircle
} from '../mainpage-mypage/main-mypage.styled';

const MyPageHeader = () => {
  return (
    <HeaderContainer>
      <LogoImg>로고이미지</LogoImg>
      <ProfileCircle>
        <Profile src="https://th.bing.com/th/id/R.8c23b7f0f9950ec55052dd4d9fb155d3?rik=IA6g1y3itWeEyg&riu=http%3a%2f%2ffile3.instiz.net%2fdata%2fcached_img%2fupload%2f2023%2f01%2f01%2f12%2f2f77c8ce337e12c0aef5c5278d22f207.jpg&ehk=zk2rLH3BzvLCKYMi23peE3HZuVGt8C34dAUDS7pWlfQ%3d&risl=&pid=ImgRaw&r=0"></Profile>
      </ProfileCircle>
      <HelloTitle>하루살이님 반가워요!</HelloTitle>
      <EncouragementText>오늘도 작성하셨네요 굿👍</EncouragementText>
    </HeaderContainer>
  );
};
export default MyPageHeader;
