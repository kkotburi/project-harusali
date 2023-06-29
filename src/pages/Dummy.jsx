import React from 'react';
import FeedSction from './FeedSction';
import WirteModal from '../components/users/Modal/WirteModal';
import UserSettingForm from '../components/users/UserSettingForm';
import ImgPreview from '../components/users/styled/ImgPreview';
import CardList from '../components/main.mypage/CardList';
import Header from '../components/main.mypage/Header';
import { ref } from 'firebase/storage';
import { styled } from 'styled-components';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Title } from '../components/users/styled/users.styled';

const Dummy = () => {
  // const navigate = useNavigate();
  // const [userUid, setUserUid] = useState('');
  // const [imgUrl, setImgUrl] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let imgData = [];

  //     console.log(auth.currentUser.uid);
  //     if (auth.currentUser.uid === null) {
  //       navigate('/');
  //       return;
  //     }
  //     const docRef = doc(db, 'users', auth.currentUser.uid);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       console.log('Document data:', docSnap.data().userPiece.profileimg);
  //       setImgUrl(docSnap.data().userPiece.profileimg);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <Inner>
      <Header></Header>
      <ContentsContainer>
        <ContentsGrid>
          <CardList></CardList>
        </ContentsGrid>
      </ContentsContainer>
    </Inner>
  );
};

export default Dummy;

const Inner = styled.div`
  margin: 0px auto;
  width: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContentsContainer = styled.div`
  margin: 0px auto;
  width: 900px;
`;

const ContentsGrid = styled.div`
  // width: 80%;
  margin: 0px auto 0px auto;
  display: grid;
  background-color: gray;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
