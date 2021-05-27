import axios from "axios";

export const startLoading = (newFeed) => ({
  type: "feed/startLoading",
  payload: newFeed,
});

export const fetchPosts = (newPosts) => ({
  type: "feed/fetchPosts",
  payload: newPosts,
});

export const fetchNext5Posts = () => async (dispatch, getState) => {
  const state = getState();
  const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;
  console.log("state:", state);
  dispatch(startLoading(true));
  console.log("can you see me?");
  const fetchedPosts = await axios.get(
    `${API_URL}?offset=${state.feed.posts.length}&limit=5`
  );
  console.log("this is fetched posts", fetchedPosts);
  const morePosts = fetchedPosts.data.rows;
  console.log(morePosts);
  dispatch(startLoading(false));
  dispatch(fetchPosts(morePosts));
};
