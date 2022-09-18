import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { userSession } from "../models/userModel";

/* eslint-disable no-param-reassign */
const initialState: userSession = {
  user: undefined,
  isAuthenticated: false,
  sessionId: "",

};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem("session_id") || "";
      localStorage.setItem("accountId", action.payload.id);
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

export const userSelector = (state: RootState) => state.user;
