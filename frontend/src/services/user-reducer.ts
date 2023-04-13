import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  profileThunk,
  registerThunk,
  logoutThunk,
} from "./user-thunks";
import User from "src/Types/User";

type State = {
  currentUser: User | null
}

const initialState = {
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state: State, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    })
    builder.addCase(loginThunk.fulfilled, (state: State, action: PayloadAction<User>) => {
      state.currentUser = null;
    })
    builder.addCase(registerThunk.fulfilled, (state: State, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    });
    builder.addCase(profileThunk.fulfilled, (state: State, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    });
  },
});

export default usersSlice.reducer;