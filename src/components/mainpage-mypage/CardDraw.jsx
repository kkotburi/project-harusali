import React, { useEffect } from 'react';
import { ContentImg, Contents, TextArea, Title, Text } from '../mainpage-mypage/main-mypage.styled';
import { useSelector } from 'react-redux';

const CardDraw = ({ postdata, setModalDetailOpen, setClickPost }) => {
  return (
    <Contents
      onClick={() => {
        setClickPost(postdata);
        setModalDetailOpen(true);
      }}
    >
      <ContentImg>
        <img src={postdata.postInfo.postImg} />
      </ContentImg>
      <TextArea>
        <Title>
          {postdata.writerInfo.nickname} 님의 {postdata.postInfo.postDate} TIL
        </Title>
        <Text>{postdata.postInfo.text}</Text>
        {/* <LikeCommentArea></LikeCommentArea> */}
      </TextArea>
    </Contents>
  );
};

export default CardDraw;
