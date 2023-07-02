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

  const handleDeletePost = async () => {
    const postRef = doc(db, 'posts', postId);
    await deleteDoc(postRef);

    if (
      postImg !==
      'https://firebasestorage.googleapis.com/v0/b/react-week2-5375f.appspot.com/o/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8-%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7-2.jpg?alt=media&token=06715b97-7fa7-4d3d-b1ff-7daa9e08299a'
    ) {
      const desertRef = ref(storage, postImg);
      await deleteObject(desertRef);
      dispatch(deletePost(postId));
      modalClose(false);
      OuterModalClose(false);
    } else {
      dispatch(deletePost(postId));
      modalClose(false);
      OuterModalClose(false);
    }
  };
  return (
    <>
      <DeleteModalBg>
        <DeleteBox>
          <ConfirmText>삭제하시겠습니까?</ConfirmText>
          <div>
            <BtnFill
              width="60"
              onClick={() => {
                modalClose(false);
              }}
              state="negative"
            >
              취소
            </BtnFill>
            <BtnFill onClick={handleDeletePost} state="disable" width="60">
              삭제
            </BtnFill>
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
  font-size: 20px;
  color: royalblue;
  font-weight: 700;
  margin-bottom: 13px;
`;
