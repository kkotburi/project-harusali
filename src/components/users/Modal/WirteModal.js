import React, { useState } from 'react'
import { styled } from 'styled-components';

const WirteModal = () => {
  const [postopen , setPostOpen] = useState(false);
  

  const wirteOpenModal = () => {
    setPostOpen(true)
  }

  const closeModal = () => {
    setPostOpen(false)
  }
  return (
    <div>
      <StModalButton onClick={wirteOpenModal}>글 작성하기</StModalButton>
      {postopen && (
        <StModalBox>
          <StModalContnets>
            <p>
             글을 작성해봅시다
            </p>
            <button onClick={closeModal}>닫기</button>
            <button>확인</button>
          </StModalContnets>
        </StModalBox>
      )}
    </div>
    
  )
}

export default WirteModal;

const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalContnets = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 70%;
  height: 50%;
  border-radius: 12px;
`;

const StModalButton = styled.div`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  text-align : center;
  background-color: gray;
  height: 30px;
  width: 100px;
`;