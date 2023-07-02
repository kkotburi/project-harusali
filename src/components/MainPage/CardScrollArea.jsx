import React, { useState, useRef, useEffect } from 'react';
import CardDraw from '../mainpage-mypage/CardDraw';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import DetailModal from '../../Modal.styled/DetailModal';
import EditModal from '../../Modal.styled/EditModal';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase';

const CardScrollArea = () => {
  const postData = useSelector((state) => state.Posts);

  const [clickPost, setClickPost] = useState('');
  const [modalDetailOpen, setModalDetailOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);

  useEffect(() => {}, [postData]);

  const modalOpenHandler = (index) => {
    setClickPost(postData[index]);
    setModalDetailOpen(true);
  };

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
          {postData.map((post, index) => {
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
