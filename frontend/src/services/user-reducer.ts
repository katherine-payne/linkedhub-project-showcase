import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  profileThunk,
  registerThunk,
  logoutThunk,
} from "./user-thunks";
import User from "src/Types/User";

type State = {
  currentUser: User | null;
};

const initialState: State = {
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loginThunk.fulfilled,
      (state: State, action: PayloadAction<any>) => {
        state.currentUser = action.payload.currentUser;
      }
    );
    builder.addCase(
      logoutThunk.fulfilled,
      (state: State, action: PayloadAction<User>) => {
        state.currentUser = null;
      }
    );
    builder.addCase(
      registerThunk.fulfilled,
      (state: State, action: PayloadAction<any>) => {
        state.currentUser = action.payload.currentUser;
      }
    );
    builder.addCase(
      profileThunk.fulfilled,
      (state: State, action: PayloadAction<User>) => {
        if (action.payload) {
          state.currentUser = action.payload;
        }
        return;
      }
    );
  },
});

export default usersSlice.reducer;
