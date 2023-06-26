import React from "react";
import { Container, LoginPageBg, Title } from "./Login";
import SigninForm from "../components/users/SigninForm";

const SignIn = () => {
  return (
    <LoginPageBg>
      <Container>
        <SigninForm />
      </Container>
    </LoginPageBg>
  );
};

export default SignIn;
