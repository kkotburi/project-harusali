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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //db에서 지금 로그인 한 유저의 정보들을 가져와서 loginUser라는 변수에 할당하겠읍니다.
        const userData = async () => {
          const userRef = doc(db, 'users', user.uid);
          const userSnapshot = await getDoc(userRef);
          const loginUser = userSnapshot.data();
          dispatch(LoginUser(loginUser));

          const postRef = query(collection(db, 'posts'));
          const postSnapshot = await getDocs(postRef);
          const initialPosts = [];
          postSnapshot.forEach((doc) => {
            initialPosts.push(doc.data());
          });
          dispatch(postFromDB(initialPosts));
        };
        userData();
        console.log('메인컴포넌트 렌더링되면서 데이터 잘 보냈음');
      } else {
        console.log('로그아웃한거아님..?');
      }
    });
  }, []);

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
