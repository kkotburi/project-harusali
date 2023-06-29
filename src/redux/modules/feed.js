// //리듀서
// //액션 - type & payload
// const feeds = (state, action) => {
//   //액션을 지정해서 실행
//   switch (action.type) {
//     case "FIXED_FEED":
//       return [...state, action.payload];

//     case "DELETE_FEED":
//       return state.filter((feed) => feed.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export default feeds;