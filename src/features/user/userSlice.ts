import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  email: string;
  name: string;
  // Add other user properties as needed
}

export interface UserState {
  currentUser: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.loading = false;
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    // Add other actions as needed
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
