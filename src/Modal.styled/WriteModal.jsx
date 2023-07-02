import React, { useEffect, useState, useRef } from 'react';
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
  const imageRef = useRef('');

  const user = useSelector((state) => state.loginUserReducer);
  const { uid, userPiece } = user;
  const { nickname, id, profileimg } = userPiece;
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [postImg, setPostImg] = useState('');
  const [imgPreview, setImgPreview] = useState('');
  const [newPostId, setNewPostId] = useState(uuid());
  const [nowDate, setNowDate] = useState('');
  const [basicImg, setBasicImg] = useState(
    'https://firebasestorage.googleapis.com/v0/b/react-week2-5375f.appspot.com/o/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8-%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7-2.jpg?alt=media&token=06715b97-7fa7-4d3d-b1ff-7daa9e08299a'
  );

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

  const getNowTime = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);
    let hours = ('0' + today.getHours()).slice(-2);
    let minutes = ('0' + today.getMinutes()).slice(-2);
    let seconds = ('0' + today.getSeconds()).slice(-2);

    return year + month + day + hours + minutes + seconds;
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

  const addPost = async () => {
    let url;
    if (postImg !== '') {
      const imageRef = ref(storage, `${uid}/${newPostId}/postimg/${postImg.name}`);
      await uploadBytes(imageRef, postImg);
      url = await getDownloadURL(imageRef);
    } else {
      url = basicImg;
    }

    const newPost = {
      postId: newPostId,
      postInfo: {
        title: `${nickname}님의 ${nowDate}`,
        postImg: url,
        text,
        postDate: nowDate,
        postTime: getNowTime()
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
    alert('포스팅이 완료되었습니다!');

    ModalCloseHandler();
  };

  return (
    <>
      <ModalBg>
        <ContentBox>
          <Title>
            {nickname}님의 {nowDate} TIL
          </Title>
          <ImgPreviewBox
            onClick={() => {
              imageRef.current?.click();
            }}
          >
            {imgPreview ? (
              <PreviewImg src={imgPreview} color="red" alt="priview-img"></PreviewImg>
            ) : (
              '  클릭해서 사진을 올려주세요!'
            )}
          </ImgPreviewBox>

          <TextArea
            value={text}
            style={{
              wrap: 'hard'
            }}
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
            ref={imageRef}
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
