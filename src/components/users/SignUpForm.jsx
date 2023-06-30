import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { auth, db } from '../../firebase';
import { InputArea, BtnArea } from './styled/users.styled';
import { collection, getDocs } from 'firebase/firestore';
import { BtnFill } from '../Btn.styled/Btn.style';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user);
    });
  }, []);
  // 사용자 정보 확인용

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [currentId, setCurrentID] = useState([]);
  const [signUpState, setSignUpState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let currentId = [];
      const userRef = collection(db, 'users');
      const querySnapshot = await getDocs(userRef);
      querySnapshot.forEach((doc) => {
        currentId.push(doc.data().userPiece.id);
      });
      setCurrentID([...currentId]);
    };
    fetchData();
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value }
    } = event;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'pw') {
      setPw(value);
    }
    if (name === 'pwConfirm') {
      setPwConfirm(value);
    }
  };

  const signDup = async (event) => {
    event.preventDefault();
    const emailConfrim = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!emailConfrim.test(email)) {
      alert('이메일을 확인해 주세요!');
      return;
    } else if (currentId.indexOf(email) < 0) {
      alert('사용할 수 있는 이메일입니다.');
      setSignUpState(true);
    } else {
      alert('이미 사용중인 이메일입니다.');
      setEmail('');
      setSignUpState(false);
    }
  };

  const signUp = async (event) => {
    event.preventDefault();
    if (email === '') {
      alert('이메일을 입력하고 중복 확인을 주세요!');
    } else if (pw === '' || pwConfirm === '') {
      alert('비밀번호를 모두 입력해 주세요! ');
    } else if (pw.length < 6 || pwConfirm.length < 6) {
      alert('비밀번호는 6자 이상이어야 합니다. ');
    } else if (pw !== pwConfirm) {
      alert('비밀번호가 같지 않습니다.');
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pw);
        alert('회원가입 되었습니다:)');
        navigate('/usersetting');
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }
    }
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <InputArea
          type="email"
          name="email"
          value={email}
          placeholder="가입할 이메일을 입력하세요."
          onChange={(event) => {
            setEmail(event.target.value);
            setSignUpState(false);
          }}
        ></InputArea>
        <BtnFillInline
          onClick={(event) => {
            signDup(event);
          }}
        >
          중복확인
        </BtnFillInline>
      </div>
      <InputArea type="password" name="pw" value={pw} onChange={onChange} placeholder="비밀번호를 입력하세요." />
      <InputArea
        placeholder="비밀번호를 확인해 주세요."
        type="password"
        name="pwConfirm"
        value={pwConfirm}
        onChange={onChange}
      />
      <BtnArea>
        <BtnFill
          size="M"
          type="submit"
          onClick={(event) => {
            if (signUpState === true) {
              signUp(event);
            } else {
              alert('이메일 중복확인을 먼저 해주세요!');
            }
          }}
        >
          회원가입
        </BtnFill>
      </BtnArea>
    </>
  );
}

export default SignUpForm;

const BtnFillInline = styled(BtnFill)`
  /* position: absolute; */
  right: 1px;
  padding: 5px;
  bottom: 5px;
`;
