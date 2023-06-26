import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
  };

  const signUp = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("user with signUp", userCredential);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error with signUp", errorCode, errorMessage);
    }
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("user with signIn", userCredential);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error with signIn", errorCode, errorMessage);
    }
  };

  return (
    <form>
      <div>SignIn</div>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button>중복확인</button>
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <input type="password" name="pwTest" value={pwTest} onChange={onChange} />
      <button type="submit" onClick={signUp}>
        회원가입
      </button>
      <button type="submit" onClick={signIn}>
        로그인
      </button>
    </form>
  );
}

export default SigninForm;
