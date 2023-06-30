const POST_FROM_DB = 'POST_FROM_DB';
const ADD_NEW_POST = 'ADD_NEW_POST';
const DELETE_POST = 'DELETE_POST';

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

const Posts = (state = initialState, action) => {
  switch (action.type) {
    case POST_FROM_DB:
      return [...action.payload];
    case ADD_NEW_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((post) => {
        return post.postId !== action.payload;
      });
    default:
      return state;
  }
};

export default Posts;
