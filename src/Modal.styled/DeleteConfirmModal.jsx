import React from 'react';
import { db, storage } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { ModalBg, ContentBox } from './Modal.styled';
import { styled } from 'styled-components';
import { BtnFill } from '../components/Btn.styled/Btn.style';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/modules/posts';

const DeleteConfirmModal = ({ modalClose, postId, postImg, OuterModalClose }) => {
  const dispatch = useDispatch();

  //삭제하는... 것....
  const handleDeletePost = async () => {
    //db에서 글 없에는거
    const postRef = doc(db, 'posts', postId);
    await deleteDoc(postRef);
    // 스토리지 에서 이미지없에는거
    const desertRef = ref(storage, postImg);
    await deleteObject(desertRef);
    dispatch(deletePost(postId));
    modalClose(false);
    OuterModalClose(false);
  };
  return (
    <>
      <DeleteModalBg>
        <DeleteBox>
          <ConfirmText>진짜삭제할껴?</ConfirmText>
          <div>
            <BtnFill
              onClick={() => {
                modalClose(false);
              }}
            >
              취소할랭
            </BtnFill>
            <BtnFill onClick={handleDeletePost}>삭제할랭</BtnFill>
          </div>
        </DeleteBox>
      </DeleteModalBg>
    </>
  );
};

export default DeleteConfirmModal;

const DeleteModalBg = styled(ModalBg)`
  z-index: 99999;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
`;

const DeleteBox = styled(ContentBox)`
  position: absolute;
  left: calc(100vw * 0.235);
  top: calc(100vh * 0.38);
  width: 200px;
  height: 120px;
  /* background-color: royalblue; */
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
`;

const ConfirmText = styled.p`
  font-size: 24px;
  color: royalblue;
  font-weight: 700;
  margin-bottom: 13px;
`;
