const LOGIN_USER = 'LOGIN_USER';

const initialState = {
  uid: '',
  userPiece: { id: '', nickname: '', profileimg: '' },
  userLike: { follow: [], following: [] }
};

export const LoginUser = (userData) => {
  return {
    type: LOGIN_USER,
    payload: userData
  };
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.payload };
    default:
      return state;
  }
};

export default loginUserReducer;
