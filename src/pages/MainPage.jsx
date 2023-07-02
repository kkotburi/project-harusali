import React, { useEffect, useState } from 'react';
import CardScrollArea from '../components/MainPage/CardScrollArea';
import MainPageHeader from '../components/MainPage/MainPage.Header';
import { styled } from 'styled-components';
import { Inner } from '../components/mainpage-mypage/main-mypage.styled';
import { SectionContainer } from '../components/mainpage-mypage/main-mypage.styled';
import { BtnFill } from '../components/Btn.styled/Btn.style';
import { getDocs, collection, doc, getDoc, query } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../redux/modules/userData';
import { useDispatch } from 'react-redux';
import { postFromDB } from '../redux/modules/posts';
import WriteModal from '../Modal.styled/WriteModal';

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const WriteBtnHandler = (event) => {
    setModalOpen(true);
  };

  return (
    <>
      {modalOpen && <WriteModal setModalOpen={setModalOpen}></WriteModal>}
      <Inner>
        <MainPageHeader></MainPageHeader>
        <SectionContainer>
          <CardScrollArea></CardScrollArea>
        </SectionContainer>
        <WriteBtn size="L" onClick={WriteBtnHandler}>
          글 작성하기
        </WriteBtn>
      </Inner>
    </>
  );
};

export default MainPage;

const WriteBtn = styled(BtnFill)`
  position: fixed;
  z-index: 999;
  bottom: 50px;
  left: 50%;
  margin: 0 auto;
  left: calc((100vw - 150px) / 2);
  right: calc((100vw - 150px) / 2);
`;
