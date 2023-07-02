import React, { useEffect, useState, useRef } from 'react';
import { ModalBg, ContentBox, Title, ImgPreviewBox, PreviewImg, TextArea, ImgInput } from './Modal.styled';
import { BtnFill } from '../components/Btn.styled/Btn.style';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage, db } from '../firebase';
import { useDispatch } from 'react-redux';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { editPostInfo } from '../redux/modules/posts';

const EditModal = ({ post, setModalEditOpen }) => {
  const imageRef = useRef('');

  const dispatch = useDispatch();

  const { postId, postInfo, writerInfo } = post;
  const { title, text, postImg, postDate, postTime } = postInfo;
  const { uid } = writerInfo;

  const [editText, setEditText] = useState('');
  const [editPostImg, setEditPostImg] = useState('');
  const [newPostImg, setNewPostImg] = useState('');

  useEffect(() => {
    setEditText(text);
    setEditPostImg(postImg);
  }, []);

  const EditPost = async () => {
    if (newPostImg === '') {
      const editPost = {
        postId,
        postInfo: {
          title,
          postImg: editPostImg,
          text: editText,
          postDate,
          postTime
        }
      };

      const PostDocRef = doc(db, 'posts', postId);
      await updateDoc(PostDocRef, editPost);

      dispatch(editPostInfo(editPost));

      setModalEditOpen(false);
    } else {
      const desertRef = ref(storage, postImg);
      await deleteObject(desertRef);

      const imageRef = ref(storage, `${uid}/${postId}/postimg/${newPostImg.name}`);
      await uploadBytes(imageRef, newPostImg);
      const url = await getDownloadURL(imageRef);

      const editPost = {
        postId,
        postInfo: {
          title,
          postImg: url,
          text: editText,
          postDate,
          postTime
        }
      };

      const PostDocRef = doc(db, 'posts', postId);
      await updateDoc(PostDocRef, editPost);
      dispatch(editPostInfo(editPost));
      setModalEditOpen(false);
    }
  };

  const encodeFileTobase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setEditPostImg(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <ModalBg>
        <ContentBox>
          <Title>{title}</Title>
          <ImgPreviewBox
            onClick={() => {
              imageRef.current?.click();
            }}
          >
            <PreviewImg src={editPostImg} color="red" alt="priview-img"></PreviewImg>
          </ImgPreviewBox>

          <TextArea
            value={editText}
            onChange={(event) => {
              setEditText(event.target.value);
            }}
          ></TextArea>
          <ImgInput
            type="file"
            onChange={(event) => {
              setNewPostImg(event.target.files[0]);
              encodeFileTobase64(event.target.files[0]);
            }}
            ref={imageRef}
          ></ImgInput>
          <div>
            <BtnFill
              state="negative"
              size="M"
              width="100"
              onClick={() => {
                setModalEditOpen(false);
              }}
            >
              취소
            </BtnFill>
            <BtnFill size="M" width="100" onClick={EditPost}>
              수정하기
            </BtnFill>
          </div>
        </ContentBox>
      </ModalBg>
    </>
  );
};

export default EditModal;
