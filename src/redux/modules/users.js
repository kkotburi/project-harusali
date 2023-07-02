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
      nickname: '123',
      profileimg:
        'https://firebasestorage.googleapis.com/v0/b/project-newsfeed-cf73e.appspot.com/o/7m9oJnT0rtURDvLxypCOjs4IFig2%2Fprofileimg%2Fimage%20(1).png?alt=media&token=f8c7fb90-337b-4dc7-b5c0-1e87e82ea22d'
    }
  },
  {
    uid: 'AJSp7nJNewSO5xs9xA4Lc5OYxzT2',
    userPiece: {
      nickname: '234',
      profileimg:
        'https://firebasestorage.googleapis.com/v0/b/project-newsfeed-cf73e.appspot.com/o/AJSp7nJNewSO5xs9xA4Lc5OYxzT2%2Fprofileimg%2Fimage%20(3).jpg?alt=media&token=bf9fdcd8-d6b4-490f-87c5-8b35e1016889'
    }
  },
  {
    uid: 'ajAPoE3odtSQyUItUpXOvQ4CEVp2',
    userPiece: {
      nickname: 'qwe',
      profileimg:
        'https://firebasestorage.googleapis.com/v0/b/project-newsfeed-cf73e.appspot.com/o/ajAPoE3odtSQyUItUpXOvQ4CEVp2%2Fprofileimg%2Fjjanggu.jpeg?alt=media&token=aeeafd0f-9eaa-4a85-963d-56f6a36dec5b'
    }
  },
  {
    uid: 'orqINFVkALZweeuTs0tkIfkQWNF3',
    userPiece: {
      nickname: 'asd',
      profileimg:
        'https://firebasestorage.googleapis.com/v0/b/project-newsfeed-cf73e.appspot.com/o/orqINFVkALZweeuTs0tkIfkQWNF3%2Fprofileimg%2Fbear.jpg?alt=media&token=be4c4998-ecab-4f27-90fe-a73bcacbcb42'
    }
  }
];

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PROFILE':
      return state.map((user) => {
        if (user.uid === action.payload.uid) {
          return {
            ...user,
            userPiece: {
              nickname: action.payload.userPiece.nickname,
              profileimg: action.payload.userPiece.profileimg
            }
          };
        } else {
          return user;
        }
      });
    default:
      return state;
  }
};

export default users;
