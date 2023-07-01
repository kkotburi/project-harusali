import { useSelector } from 'react-redux';
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
        <Profile src={''} />
      </ProfileCircle>
      <HelloTitle>하루살이님 반가워요!</HelloTitle>
      <EncouragementText>오늘도 작성하셨네요 굿👍</EncouragementText>
    </HeaderContainer>
  );
};
export default MyPageHeader;
