import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "login",

  initialState: {
    isLoggedIn: false,
    email: {},
  },

  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = {};
    },
  },
});

// Action creators are generated for each case reducer function

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
