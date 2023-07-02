import React from 'react';
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import UserSetting from '../pages/UserSetting';
import SignUp from '../pages/SignUp';
import Mypage from '../pages/Mypage';
import ProfileEdit from '../pages/ProfileEdit';

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
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