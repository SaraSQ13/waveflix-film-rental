import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
//import searchReducer from "../features/searh/searchSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    //search: searchReducer,
  },
});

export default store;
