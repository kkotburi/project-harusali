import React, { useState } from 'react';
import { InputArea, BtnArea } from './styled/users.styled';
import { BtnFill } from '../Btn.styled/Btn.style';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

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
      navigate('/mypage');
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found' || 'auth/wrong-password':
          return alert('이메일 혹은 비밀번호가 일치하지 않습니다.');
        case 'auth/email-already-in-use':
          return alert('이미 사용 중인 이메일입니다.');
        case 'auth/weak-password':
          return alert('비밀번호는 6글자 이상이어야 합니다.');
        case 'auth/network-request-failed':
          return alert('네트워크 연결에 실패 하였습니다.');
        case 'auth/invalid-email':
          return alert('잘못된 이메일 형식입니다.');
        case 'auth/internal-error':
          return alert('잘못된 요청입니다.');
        default:
          return alert('로그인에 실패 하였습니다.');
      }
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
