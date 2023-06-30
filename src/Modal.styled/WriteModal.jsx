import React, { useEffect, useState } from 'react';
import { ModalBg, ContentBox } from './Modal.styled';
import { BtnFill } from '../components/Btn.styled/Btn.style';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { storage, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { addNewPost } from '../redux/modules/posts';
import { Title, ImgPreviewBox, PreviewImg, TextArea, ImgInput } from './Modal.styled';

import uuid from 'react-uuid';

const WriteModal = ({ setModalOpen }) => {
  const user = useSelector((state) => state.loginUserReducer);
  const { uid, userPiece } = user;
  const { nickname, id, profileimg } = userPiece;
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [postImg, setPostImg] = useState('');
  const [imgPreview, setImgPreview] = useState('');
  const [newPostId, setNewPostId] = useState(uuid());
  const [nowDate, setNowDate] = useState('');

  useEffect(() => {
    setNowDate(getCurrentDate());
  });

  const getCurrentDate = () => {
    var today = new Date();
    var year = today.getFullYear().toString().substr(-2);
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var day = today.getDate().toString().padStart(2, '0');
    return year + month + day;
  };

  const ModalCloseHandler = () => {
    setModalOpen(false);
  };

  const encodeFileTobase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgPreview(reader.result);
        resolve();
      };
    });
  };

  const DEFAULT_IMAGE = '';

  const addPost = async () => {
    if (postImg === '') {
      const url = '';
    }
    const imageRef = ref(storage, `${uid}/${newPostId}/postimg/${postImg.name}`);
    await uploadBytes(imageRef, postImg);
    const url = await getDownloadURL(imageRef);

    const newPost = {
      postId: newPostId,
      postInfo: {
        title: `${nickname}님의 ${nowDate}`,
        postImg: url,
        text,
        postDate: nowDate
      },
      writerInfo: {
        uid,
        id,
        nickname,
        profileimg
      }
    };

    const PostDocRef = doc(db, 'posts', newPostId);
    await setDoc(PostDocRef, newPost);
    await dispatch(addNewPost(newPost));
    alert('정상적으로 잘 포스팅 되었읍니다^^');
    //리듀서한테 보낼꺼임!

    ModalCloseHandler();
  };

  return (
    <>
      <ModalBg>
        <ContentBox>
          <Title>
            {nickname}님의 {nowDate} TIL
          </Title>
          <ImgPreviewBox>
            {imgPreview && <PreviewImg src={imgPreview} color="red" alt="priview-img"></PreviewImg>}
          </ImgPreviewBox>

          <TextArea
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          ></TextArea>
          <ImgInput
            type="file"
            onChange={(event) => {
              encodeFileTobase64(event.target.files[0]);
              setPostImg(event.target.files[0]);
            }}
          ></ImgInput>
          <div>
            <BtnFill
              state="negative"
              size="M"
              width="100"
              onClick={() => {
                ModalCloseHandler();
              }}
            >
              취소
            </BtnFill>
            <BtnFill size="M" width="100" onClick={addPost}>
              작성하기
            </BtnFill>
          </div>
        </ContentBox>
      </ModalBg>
    </>
  );
};

export default WriteModal;
