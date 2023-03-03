import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./actions/userSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
