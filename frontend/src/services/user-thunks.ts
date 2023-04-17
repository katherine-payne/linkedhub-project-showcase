import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "./user-service";

export const loginThunk = createAsyncThunk(
  "users/login",
  async (user: any, thunkAPI) => await userService.loginUser(user)
);

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (_, thunkAPI) => await userService.logoutUser()
);

export const registerThunk = createAsyncThunk(
  "users/register",
  async (user: any, thunkAPI) => await userService.registerUser(user)
);

export const profileThunk = createAsyncThunk(
  "users/profile",
  async (_, thunkAPI) => {
    return await userService.getUser("");
  }
);
