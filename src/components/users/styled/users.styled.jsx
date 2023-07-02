import { styled } from 'styled-components';

export const LoginPageBg = styled.div`
  background-image: url(https://firebasestorage.googleapis.com/v0/b/react-week2-5375f.appspot.com/o/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8-%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7-1.jpg?alt=media&token=06bacf48-9c9e-4dec-9597-f638d7b58653);
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
