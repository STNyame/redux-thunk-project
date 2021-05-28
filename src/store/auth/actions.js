// src/store/auth/actions.js

import axios from "axios";

export const logOut = () => (dispatch, getState) => {
  dispatch({ type: "auth/logOut", payload: null });
  localStorage.removeItem("1");
};

export const userLoggedIn = (token, profile) => ({
  type: "auth/userLoggedIn",
  payload: { token, profile },
});

export const login = (email, password) => async (dispatch, getState) => {
  const loginData = await axios.post(
    `https://codaisseur-coders-network.herokuapp.com/login`,
    {
      email: email,
      password: password,
    }
  );

  const token = loginData.data.jwt;
  const user = await axios.get(
    `https://codaisseur-coders-network.herokuapp.com/me`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  console.log("this is:", token);
  localStorage.setItem("1", token);
  console.log(localStorage["1"]);
  console.log("this is the user:", user);
  dispatch(userLoggedIn(token, user.data));
  console.log("TODO: make login request, get an access token", email, password);
};

export const bootstrapLoginState = () => async (dispatch, getState) => {
  if (localStorage["1"]) {
    const user = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/me`,
      {
        headers: { Authorization: `Bearer ${localStorage["1"]}` },
      }
    );
    user.data && dispatch(userLoggedIn(localStorage["1"], user.data));
  } else {
    console.log("expired");
  }
};
