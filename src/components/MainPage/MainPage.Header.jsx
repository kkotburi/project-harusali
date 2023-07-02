import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import {
  HeaderContainer,
  LogoImg,
  Profile,
  HelloTitle,
  EncouragementText,
  ProfileCircle
} from '../mainpage-mypage/main-mypage.styled';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MainPageHeader = () => {
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.loginUserReducer);
  const postData = useSelector((state) => state.Posts);

  const [postNum, setPostNum] = useState(0);

  useEffect(() => {
    const todayPost = postData.filter((post) => {
      return post.postInfo.postDate === getCurrentDate();
    });

    setPostNum(todayPost.length);
  }, [postData]);

  const getCurrentDate = () => {
    var today = new Date();
    var year = today.getFullYear().toString().substr(-2);
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var day = today.getDate().toString().padStart(2, '0');
    return year + month + day;
  };

  const profileImgLink = loginUser.userPiece.profileimg;
  const nickname = loginUser.userPiece.nickname;
  return (
    <Container>
      <NumContents>
        {getCurrentDate()}
        {postNum}
        {nickname}
      </NumContents>
      <LogoContent>
        <LogoImg>로고이미지</LogoImg>
      </LogoContent>
      <ProfileContent>
        <ProfileCircle
          onClick={() => {
            navigate('/mypage');
          }}
        >
          <Profile src={profileImgLink}></Profile>
        </ProfileCircle>
        <HelloTitle>{nickname}님 반가워요!</HelloTitle>
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

const NumContents = styled(Contents)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  text-align: right;
`;
