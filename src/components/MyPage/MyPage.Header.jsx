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
  const loginUser = useSelector((state) => state.loginUserReducer);
  const profileImgLink = loginUser.userPiece.profileimg;
  const nickname = loginUser.userPiece.nickname;

  return (
    <HeaderContainer>
      <LogoImg>로고이미지</LogoImg>
      <ProfileCircle>
        <Profile src={profileImgLink} />
      </ProfileCircle>
      <HelloTitle>{nickname}님 반가워요!</HelloTitle>
      <EncouragementText>오늘도 작성하셨네요 굿👍</EncouragementText>
    </HeaderContainer>
  );
};
export default MyPageHeader;
