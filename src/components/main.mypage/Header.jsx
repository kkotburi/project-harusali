import React from 'react';
import { styled } from 'styled-components';
import { Title } from '../users/styled/users.styled';

const Header = () => {
  return (
    <HeaderContainer>
      {/* 몇명썻고 너도 질수없지?> */}
      <HeaderContents>1</HeaderContents>
      {/* 로고 */}
      <HeaderContents>
        <Title>하루살이</Title>
      </HeaderContents>
      <HeaderContents>
        <ImgArea>
          <PreviewImg></PreviewImg>
        </ImgArea>
      </HeaderContents>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  background-color: royalblue;
  justify-content: center;
  align-items: center;
`;
const HeaderContents = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
`;

const ImgArea = styled.div`
  background-color: #9bcdfb;
  width: 110px;
  height: 110px;
  border-radius: 100px;
  margin: 10px 0;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: #5763d4;
  }
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
