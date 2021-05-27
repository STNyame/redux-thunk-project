const initialState = {
  loading: true,
  posts: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading":
      return {
        ...state,
        loading: action.payload,
      };

    case "feed/fetchPosts":
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };

    default: {
      return state;
    }
  }
}
