import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./user-service";

export const loginThunk = createAsyncThunk(
   "user/login", async (credentials) => {
      const user = await authService.loginUser(credentials);
      return user;
   }
)