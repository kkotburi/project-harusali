import React, { useState } from 'react'
import { styled } from 'styled-components';

const FixedModal = () => {
  const [postopen , setPostOpen] = useState(false);
  

  const openPostModal = () => {
    setPostOpen(true);
  };
  
  const closeModal = () => {
    setPostOpen(false)
  }
  return (
    <div>
      <StModalButton onClick={openPostModal}>수정</StModalButton>
      {postopen && (
        <StModalBox>
          <StModalContnets>
            <p>
             수정하는 모달
            </p>
            <button onClick={closeModal}>닫기</button>
            <button>확인</button>
          </StModalContnets>
        </StModalBox>
      )}
     
    </div>
    
  )
}

export default FixedModal

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
  color: red;
  text-align : center;
  height: 20px;
  width: 40px;
`;