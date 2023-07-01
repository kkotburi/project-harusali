import React from 'react';
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
import { Link, useNavigate } from 'react-router-dom';

const MainPageHeader = () => {
  const navigate = useNavigate();

  const loginUser = useSelector((state) => state.loginUserReducer);

  const profileImgLink = loginUser.userPiece.profileimg;
  const nickname = loginUser.userPiece.nickname;

  // 임시 프로필 수정
  const users = useSelector((state) => state.users);
  // 임시 프로필 수정

  return (
    <Container>
      <Contents>여기에 글 숫자 써서 질수없겠죠? 어쩌구 써야합니다.</Contents>
      <LogoContent>
        <LogoImg>로고이미지</LogoImg>
      </LogoContent>
      <ProfileContent>
        <ProfileCircle>
          <Profile
            src={profileImgLink}
            onClick={() => {
              navigate('/mypage');
            }}
          />
        </ProfileCircle>
        <HelloTitle>{nickname}님 반가워요!</HelloTitle>
        <EncouragementText>오늘도 작성하셨네요 굿👍</EncouragementText>
      </ProfileContent>
      {/* 임시 프로필 수정 */}
      <div>
        {users.map((user) => {
          return (
            <p key={user.uid}>
              <Link to={`/${user.uid}`}>{user.uid}</Link>
            </p>
          );
        })}
      </div>
      {/* 임시 프로필 수정 */}
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
