import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "./user-service";
import User from "src/Types/User";

export const loginThunk = createAsyncThunk(
  "users/login",
  async (user: any, thunkAPI) => await userService.loginUser(user)
);

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (user, thunkAPI) => await userService.logoutUser()
);

export const registerThunk = createAsyncThunk(
  "users/register",
  async (user, thunkAPI) => await userService.registerUser(user)
);

export const profileThunk = createAsyncThunk(
  "users/profile",
  async (user: User, thunkAPI) => {
    return await userService.getUser(user._id);
  }
);
