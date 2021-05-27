// src/store/postPage/actions.js
import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export const startLoadingPost = (boolean) => ({
  type: "postPage/startLoadingPost",
  payload: boolean,
});

export const postFullyFetched = (newPosts) => ({
  type: "postPage/postFullyFetched",
  payload: newPosts,
});

// export function fetchPost(id) {
//   return async function thunk(dispatch, getState) {
//     dispatch(startLoadingPost(true));

//     const [postResponse, commentsResponse] = await Promise.all([
//       axios.get(`${API_URL}/posts/${id}`),
//       axios.get(`${API_URL}/posts/${id}/comments`),
//     ]);
//     console.log(postResponse);
//     dispatch(
//       postFullyFetched({
//         post: postResponse.data,
//         comments: commentsResponse.data,
//       })
//     );
//     dispatch(startLoadingPost(false));
//   };
// }
export const fetchPost = (id) => async (dispatch, getState) => {
  dispatch(startLoadingPost(true));

  const [postResponse, commentsResponse] = await Promise.all([
    axios.get(`${API_URL}/posts/${id}`),
    axios.get(`${API_URL}/posts/${id}/comments`),
  ]);
  console.log(postResponse);
  dispatch(
    postFullyFetched({
      post: postResponse.data,
      comments: commentsResponse.data,
    })
  );
  dispatch(startLoadingPost(false));
};
