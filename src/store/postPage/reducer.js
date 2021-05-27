const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "postPage/startLoadingPost":
      return {
        ...state,
        loading: action.payload,
      };
    case "postPage/postFullyFetched":
      return {
        ...state,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    default: {
      return state;
    }
  }
}
