import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { auth } from "../../firebase";
import { InputArea, BtnArea } from "./styled/users.styled";
import { BtnFill } from "../Btn.style";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwTest, setPwTest] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "pwTest") {
      setPwTest(value);
    }
  };

  const signUp = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <InputArea
          type="email"
          name="email"
          value={email}
          placeholder="가입할 이메일을 입력하세요."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></InputArea>
        <BtnFillInline>중복확인</BtnFillInline>
      </div>
      <InputArea
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="비밀번호를 입력하세요."
      />
      <InputArea
        placeholder="비밀번호를 확인해 주세요."
        type="password"
        name="pwTest"
        value={pwTest}
        onChange={onChange}
      />
      <BtnArea>
        <BtnFill
          size="M"
          type="submit"
          onClick={(event) => {
            signUp(event);
          }}
        >
          회원가입
        </BtnFill>
      </BtnArea>
    </>
  );
}

export default SigninForm;

const BtnFillInline = styled(BtnFill)`
  /* position: absolute; */
  right: 1px;
  padding: 5px;
  bottom: 5px;
`;
