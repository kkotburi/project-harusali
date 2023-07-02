import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  HeaderContainer,
  LogoImg,
  Profile,
  HelloTitle,
  EncouragementText,
  ProfileCircle
} from '../mainpage-mypage/main-mypage.styled';
import { useNavigate } from 'react-router-dom';

const MyPageHeader = () => {
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.loginUserReducer);
  const postData = useSelector((state) => state.Posts);

  const [postNum, setPostNum] = useState(0);

  useEffect(() => {
    const myPost = postData.filter((post) => {
      return post.writerInfo.uid === loginUser.uid;
    });

    setPostNum(myPost.length);
  }, []);

  const profileImgLink = loginUser.userPiece.profileimg;
  const nickname = loginUser.userPiece.nickname;

  return (
    <HeaderContainer>
      <LogoImg
        onClick={() => {
          navigate('/home');
        }}
      ></LogoImg>
      <ProfileCircle>
        <Profile src={profileImgLink} />
      </ProfileCircle>
      <HelloTitle>
        {nickname}님이 작성한 TIL은 {postNum}개 입니다!
      </HelloTitle>
      <EncouragementText>오늘도 달려볼까요🔥</EncouragementText>
    </HeaderContainer>
  );
};
export default MyPageHeader;
