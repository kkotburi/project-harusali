import React, { useState } from 'react';
import { InputArea, BtnArea } from './styled/users.styled';
import { BtnFill } from '../Btn.style';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChanger = (event) => {
    setEmail(event.target.value);
  };
  const passwordChanger = (event) => {
    setPassword(event.target.value);
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <InputArea type="text" placeholder="이메일입력해" value={email} onChange={emailChanger}></InputArea>
      <InputArea type="password" placeholder="비번입력해" value={password} onChange={passwordChanger}></InputArea>

      <BtnArea>
        <BtnFill size="M" width="140" onClick={signIn}>
          로그인
        </BtnFill>
        <BtnFill
          size="M"
          width="140"
          state="disable"
          style={{ color: '#5763d4' }}
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </BtnFill>
      </BtnArea>
    </>
  );
};

export default LoginForm;
