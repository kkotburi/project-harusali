import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import {
  HeaderContainer,
  LogoImg,
  Profile,
  HelloTitle,
  EncouragementText,
  ProfileCircle,
  NickNameTitle
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
        <DateAreaBox>
          <TextArea>오늘의 날짜</TextArea>
          <DateArea>{getCurrentDate()}</DateArea>
        </DateAreaBox>

        <TextArea2>오늘 올라온 TIL {postNum}</TextArea2>
      </NumContents>
      <LogoContent>
        <LogoImg></LogoImg>
      </LogoContent>
      <ProfileContent>
        <ProfileCircle
          onClick={() => {
            navigate('/mypage');
          }}
        >
          <Profile src={profileImgLink}></Profile>
        </ProfileCircle>
        <DateAreaBox>
          <HelloTitle>{nickname}</HelloTitle>
          <NickNameTitle>님 반가워요!</NickNameTitle>
        </DateAreaBox>
        <EncouragementText>오늘도 달려볼까요🔥</EncouragementText>
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

const DateAreaBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateArea = styled.div`
  font-size: 32px;
  color: white;
  font-weight: 700;
`;

const TextArea = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: white;
  margin-right: 10px;
`;

const TextArea2 = styled.div`
  font-size: 20px;
  color: yellow;
  font-weight: 500;
  margin-top: 15px;
`;
