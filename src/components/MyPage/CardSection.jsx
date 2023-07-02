import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardDraw from '../mainpage-mypage/CardDraw';
import { useSelector } from 'react-redux';
import DetailModal from '../../Modal.styled/DetailModal';
import EditModal from '../../Modal.styled/EditModal';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase';

const CardSection = () => {
  const postData = useSelector((state) => state.Posts);
  const loginUser = useSelector((state) => state.loginUserReducer);

  console.log(postData);
  console.log(loginUser);

  const [myPost, setMyPost] = useState([]);
  useEffect(() => {
    const todayPost = postData.filter((post) => {
      return post.writerInfo.uid === loginUser.uid;
    });

    setMyPost(todayPost);
  }, [postData]);

  const [clickPost, setClickPost] = useState('');
  const [modalDetailOpen, setModalDetailOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);

  return (
    <>
      {modalDetailOpen && (
        <DetailModal
          post={clickPost}
          setModalDetailOpen={setModalDetailOpen}
          setModalEditOpen={setModalEditOpen}
        ></DetailModal>
      )}
      {modalEditOpen && <EditModal post={clickPost} setModalEditOpen={setModalEditOpen}></EditModal>}
      <Container>
        <InnerWrapper>
          {myPost.map((post, index) => {
            return (
              <CardDraw
                key={post.postId}
                postdata={post}
                setModalDetailOpen={setModalDetailOpen}
                setClickPost={setClickPost}
              ></CardDraw>
            );
          })}
        </InnerWrapper>
      </Container>
    </>
  );
};
export default CardSection;

const InnerWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const Container = styled.div`
  height: calc(100vh - 260px);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  flex-basis: 600px;
  flex-grow: 2;
`;
