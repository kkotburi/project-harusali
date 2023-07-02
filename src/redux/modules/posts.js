const POST_FROM_DB = 'POST_FROM_DB';
const ADD_NEW_POST = 'ADD_NEW_POST';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST_INFO = 'EDIT_POST_INFO';

const initialState = [
  {
    postId: '',
    postInfo: { postDate: '', postImg: '', text: '', title: '' },
    writerInfo: { id: '', nickname: '', profileImg: '', uid: '' }
  }
];

export const postFromDB = (posts) => {
  return {
    type: POST_FROM_DB,
    payload: posts
  };
};

export const addNewPost = (newPost) => {
  return {
    type: ADD_NEW_POST,
    payload: newPost
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId
  };
};

export const editPostInfo = (editPost) => {
  return {
    type: EDIT_POST_INFO,
    payload: editPost
  };
};

const Posts = (state = initialState, action) => {
  switch (action.type) {
    case POST_FROM_DB:
      return [...action.payload];
    case ADD_NEW_POST:
      return [...state, action.payload].sort((a, b) => b.postInfo.postTime - a.postInfo.postTime);
    case DELETE_POST:
      return state.filter((post) => {
        return post.postId !== action.payload;
      });
    case EDIT_POST_INFO:
      return state.map((post) => {
        return post.postId === action.payload.postId ? { ...post, ...action.payload } : post;
      });
    default:
      return state;
  }
};

export default Posts;
