import React, { useEffect, useState } from 'react';
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes, useNavigate, useNavigationType } from 'react-router-dom';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import UserSetting from '../pages/UserSetting';
import SignUp from '../pages/SignUp';
import Mypage from '../pages/Mypage';
import { allUserSetting } from '../redux/modules/Alluser';
import { styled } from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { getDocs, collection, doc, getDoc, query } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { LoginUser } from '../redux/modules/userData';
import { useDispatch } from 'react-redux';
import { postFromDB } from '../redux/modules/posts';

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  const dispatch = useDispatch();
  const [renderStart, setRenderStart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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
            const sortPosts = initialPosts.sort((a, b) => b.postInfo.postTime - a.postInfo.postTime);

            dispatch(postFromDB(sortPosts));

            let allUser = [];
            const AlluserRef = collection(db, 'users');
            const querySnapshot = await getDocs(AlluserRef);
            querySnapshot.forEach((doc) => {
              allUser.push(doc.data());
            });
            dispatch(allUserSetting(allUser));
          };
          userData();
        } else {
        }
      });
      setRenderStart(true);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      {renderStart && (
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/usersetting" element={<UserSetting />}></Route>
          <Route path="/home" element={<MainPage />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;

export const BgImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/react-week2-5375f.appspot.com/o/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8-%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7-1.jpg?alt=media&token=5df1790d-da88-4d95-a0ad-7e246b29b341');
`;
