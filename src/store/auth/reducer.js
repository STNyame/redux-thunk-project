const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "auth/userLoggedIn":
      return {
        ...state,
        me: action.payload.profile,
        accessToken: action.payload.token,
      };
    case "auth/logOut":
      return {
        ...state,
        me: action.payload,
        accessToken: action.payload,
      };
    default: {
      return state;
    }
  }
}
