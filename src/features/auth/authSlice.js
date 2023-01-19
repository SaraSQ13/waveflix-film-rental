import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "login",

  initialState: {
    isLoggedIn: false,
    user: {},
    movies: [],
  },

  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    updateMovies: (state,action) =>{
      state.movies= action.payload;
    }
  },
});

// Action creators are generated for each case reducer function

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
