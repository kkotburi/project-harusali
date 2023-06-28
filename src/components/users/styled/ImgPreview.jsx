import React from 'react';
import { styled } from 'styled-components';

const ImgPreview = () => {
  return <ImgArea></ImgArea>;
};

export default ImgPreview;

const ImgArea = styled.div`
  background-color: rosybrown;
  width: 110px;
  height: 110px;
  border-radius: 100px;
  margin: 10px 0;
  &:hover {
  }
`;
