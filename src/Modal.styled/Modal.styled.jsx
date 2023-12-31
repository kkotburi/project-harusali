import { styled } from 'styled-components';

export const ModalBg = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* width: 100vw;
  height: 100vh; */
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  width: 600px;
  height: 800px;
  border-radius: 20px;
  color: black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: royalblue;
  margin-bottom: 30px;
`;

export const ImgPreviewBox = styled.div`
  background-color: royalblue;
  overflow: hidden;
  width: 500px;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: inset 0px 3px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export const TextArea = styled.textarea`
  /* white-space: pre; */
  border-radius: 10px;
  width: 500px;
  height: 300px;
  resize: none;
  padding: 20px;
  border: none;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 20px;
  line-height: 1.3;
  font-size: 16px;
  box-shadow: inset 0px 3px 5px rgba(0, 0, 0, 0.3);
`;

export const ImgInput = styled.input`
  width: 500px;
  height: 50px;
  visibility: hidden;
  margin-bottom: 30px;
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
