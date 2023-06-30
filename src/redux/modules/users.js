import React from 'react';

const initialState = [
  // {
  //   uid: user.uid,
  //   userPiece: {
  //     id: user.email,
  //     nickname: nickName,
  //     profileimg: ''
  //   },
  //   userLike: { follow: [], following: [] }
  // },
  {
    uid: '7m9oJnT0rtURDvLxypCOjs4IFig2',
    userPiece: {
      id: '123@123.com',
      nickname: '123',
      profileimg:
        'https://firebasestorage.googleapis.com/v0/b/project-newsfeed-cf73e.appspot.com/o/7m9oJnT0rtURDvLxypCOjs4IFig2%2Fprofileimg%2Fimage%20(1).png?alt=media&token=f8c7fb90-337b-4dc7-b5c0-1e87e82ea22d'
    },
    userLike: { follow: [], following: [] }
  },
  {
    uid: 'AJSp7nJNewSO5xs9xA4Lc5OYxzT2',
    userPiece: {
      id: '234@234.com',
      nickname: '234',
      profileimg:
        'https://firebasestorage.googleapis.com/v0/b/project-newsfeed-cf73e.appspot.com/o/AJSp7nJNewSO5xs9xA4Lc5OYxzT2%2Fprofileimg%2Fimage%20(3).jpg?alt=media&token=bf9fdcd8-d6b4-490f-87c5-8b35e1016889'
    },
    userLike: { follow: [], following: [] }
  }
];

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PROFILEIMG':
      return state.forEach((user) => {
        if (user.uid === action.payload) {
          return { ...user, userPiece: { profileimg: '' } };
        } else {
          return user;
        }
      });
    default:
      return state;
  }
};

export default users;
