import React from 'react';
import { ContentImg, Contents, TextArea, Title, Text } from '../mainpage-mypage/main-mypage.styled';
import CardDraw from '../mainpage-mypage/CardDraw';
import { styled } from 'styled-components';

const CardScrollArea = () => {
  return (
    <Container>
      <InnerWrapper>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
      </InnerWrapper>
    </Container>
  );
};

export default CardScrollArea;

const InnerWrapper = styled.div`
  margin: 0 auto;
  width: 900px;
  display: grid;
  background-color: gray;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Container = styled.div`
  height: calc(100vh - 230px);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  flex-basis: 600px;
  flex-grow: 2;
`;
