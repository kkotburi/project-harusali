import React, { useEffect, useState } from 'react';
import { ContentImg, Contents, TextArea, Title, Text } from '../mainpage-mypage/main-mypage.styled';
import { useSelector } from 'react-redux';

const CardDraw = ({ postdata, setModalDetailOpen, setClickPost }) => {
  const allUserData = useSelector((state) => state.AllUserReducer);

  const [nickname, setNickname] = useState('');

  const userProfile = allUserData.filter((user) => {
    return user.uid === postdata.writerInfo.uid;
  });

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
          {userProfile[0]?.userPiece.nickname} 님의 {postdata.postInfo.postDate} TIL
        </Title>
        <Text>{postdata.postInfo.text}</Text>
        {/* <LikeCommentArea></LikeCommentArea> */}
      </TextArea>
    </Contents>
  );
};

export default CardDraw;
