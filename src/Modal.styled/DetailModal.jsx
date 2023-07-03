import React, { useState } from 'react';
import { BtnFill } from '../components/Btn.styled/Btn.style';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { ModalBg, ContentBox, Title, ImgPreviewBox, PreviewImg, TextArea } from './Modal.styled';
import DeleteConfirmModal from './DeleteConfirmModal';

const DetailModal = ({ post, setModalDetailOpen, setModalEditOpen }) => {
  const allUserData = useSelector((state) => state.AllUserReducer);

  const [nickname, setNickname] = useState('');

  const userProfile = allUserData.filter((user) => {
    return user.uid === post.writerInfo.uid;
  });

  const user = useSelector((state) => state.loginUserReducer);
  const [deleteConfirmModalOpen, setDeleteConfirmModalOpen] = useState(false);

  const { postId, postInfo, writerInfo } = post;
  const { title, text, postImg } = postInfo;
  const { uid } = writerInfo;

  return (
    <>
      {deleteConfirmModalOpen && (
        <DeleteConfirmModal
          OuterModalClose={setModalDetailOpen}
          postId={postId}
          postImg={postImg}
          modalClose={setDeleteConfirmModalOpen}
        ></DeleteConfirmModal>
      )}

      <ModalBg>
        <ContentBox>
          <Title>
            {userProfile[0]?.userPiece.nickname}님의 {post.postInfo.postDate}TIL
          </Title>
          <ImgPreviewBox>
            <PreviewImg src={postImg} color="red" alt="priview-img"></PreviewImg>
          </ImgPreviewBox>

          <TextView as="div">
            <TextScroll>{text}</TextScroll>
          </TextView>

          <div>
            <BtnFill
              size="M"
              state="negative"
              width="100"
              onClick={() => {
                setModalDetailOpen(false);
              }}
            >
              닫기
            </BtnFill>
            {uid === user.uid ? (
              <>
                <BtnFill
                  size="M"
                  width="100"
                  onClick={() => {
                    setModalDetailOpen(false);
                    setModalEditOpen(true);
                  }}
                >
                  수정하기
                </BtnFill>
                <BtnFill
                  size="M"
                  state="disable"
                  width="100"
                  onClick={() => {
                    setDeleteConfirmModalOpen(true);
                  }}
                >
                  삭제하기
                </BtnFill>
              </>
            ) : null}
          </div>
        </ContentBox>
      </ModalBg>
    </>
  );
};

export default DetailModal;

const TextView = styled(TextArea)`
  white-space: pre;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 20px;
  overflow-y: scroll;
`;
const TextScroll = styled.p`
  line-height: 1.3;
`;
