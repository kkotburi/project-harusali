import React from 'react';
import { ContentImg, Contents, TextArea, Title, Text } from '../mainpage-mypage/main-mypage.styled';

const CardDraw = () => {
  return (
    <Contents>
      <ContentImg></ContentImg>
      <TextArea>
        <Title>닉네임 님의 작성날짜 TIL</Title>
        <Text>김혜민님 css 도 공부하시고, git 도 공부하세요 다하세요도 공부하시고, git 도 공부하세요 다하세요</Text>
        {/* <LikeCommentArea></LikeCommentArea> */}
      </TextArea>
    </Contents>
  );
};

export default CardDraw;
