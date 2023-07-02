import React, { useEffect } from 'react';
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import UserSetting from '../pages/UserSetting';
import SignUp from '../pages/SignUp';
import Mypage from '../pages/Mypage';

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/usersetting" element={<UserSetting />}></Route>
        <Route path="/home" element={<MainPage />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        {/* 임시 프로필 수정 */}
        <Route path="/:id" element={<ProfileEdit />} />
        {/* 임시 프로필 수정 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
