import { styled } from "styled-components";

export const LoginPageBg = styled.div`
  background-color: #9bcdfb;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  color: #5763d4;
  margin: 20px;
`;

export const InputArea = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  margin: 5px;
  width: 200px;
`;

export const TitleCaption = styled.p`
  margin: 10px;
`;

export const BtnArea = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
