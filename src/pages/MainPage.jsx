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
import { useDispatch, useSelector } from 'react-redux';
import { postFromDB } from '../redux/modules/posts';
import WriteModal from '../Modal.styled/WriteModal';
import { BgImage } from '../shared/Router';

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        navigate('/');
      }
    });
  }, []);

  const WriteBtnHandler = (event) => {
    setModalOpen(true);
  };

  return (
    <>
      {modalOpen && <WriteModal setModalOpen={setModalOpen}></WriteModal>}
      <PageBg>
        <Inner>
          <MainPageHeader></MainPageHeader>
          <SectionContainer>
            <CardScrollArea></CardScrollArea>
          </SectionContainer>
          <WriteBtn size="L" onClick={WriteBtnHandler}>
            글 작성하기
          </WriteBtn>
        </Inner>
      </PageBg>
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

export const PageBg = styled.div`
  background-image: url(https://firebasestorage.googleapis.com/v0/b/react-week2-5375f.appspot.com/o/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8-%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7-1.jpg?alt=media&token=06bacf48-9c9e-4dec-9597-f638d7b58653);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
