const All_USER_SETTING = 'All_USER_SETTING';
const MY_DATA_SETTING = 'MY_DATA_SETTING';
const SIGN_IN_SETTING = 'SIGN_IN_SETTING';

export const allUserSetting = (AllUser) => {
  return {
    type: All_USER_SETTING,
    payload: AllUser
  };
};

export const myDataSetting = (editUser) => {
  return {
    type: MY_DATA_SETTING,
    payload: editUser
  };
};

export const signInSetting = (newUser) => {
  return {
    type: SIGN_IN_SETTING,
    payload: newUser
  };
};

const initialState = [
  {
    uid: '',
    userPiece: { id: '', nickname: '', profileimg: '' },
    userLike: { follow: [], following: [] }
  }
];

const AllUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case All_USER_SETTING:
      return [...action.payload];
    case MY_DATA_SETTING:
      return state.map((user) => {
        return user.uid === action.payload.uid ? { ...user, ...action.payload } : user;
      });
    case SIGN_IN_SETTING:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default AllUserReducer;
