import React, { useState } from 'react'
import { styled } from 'styled-components';

const DeleteModal = () => {
  const [postopen , setPostOpen] = useState(false);
  const [deleteopen , setDeleteOpen] = useState(false);

  const deleteOpenModal = () => {
    setDeleteOpen(true)
  }

  const closeModal = () => {
    setDeleteOpen(false)
  }
  return (
    <div>
      <StModalButton onClick={deleteOpenModal}>삭제</StModalButton>
      {deleteopen && (
        <StModalBox>
          <StModalContnets>
            <p>
             삭제를 하시렵니까?
            </p>
            <button onClick={closeModal}>닫기</button>
            <button>확인</button>
          </StModalContnets>
        </StModalBox>
      )}
    </div>
    
  )
}

export default DeleteModal

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