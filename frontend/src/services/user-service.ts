import axios from "axios";
import User from "src/Types/User";
import BASE_URL from "./service-helper";

const USERS_API = BASE_URL + "users";

const api = axios.create({ withCredentials: true });

export const getUser = async (uid: string) => {
  const response = await axios.get(USERS_API + "/" + uid);
  return response.data;
};

export const updateUser = async (user: User) => {
  const response = await axios.put(USERS_API + "/" + user._id, user);
  return response.data;
};

export const deleteUser = async (uid: string) => {
  const response = await axios.delete(USERS_API + "/" + uid);
  return response.data;
};

export const registerUser = async (user: any) => {
  const response = await api.post(USERS_API + "/register", user);
  return response.data;
};

export const loginUser = async (user: User) => {
  const response = await api.post(USERS_API + "/login", user);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post(USERS_API + "/logout");
  return response.data;
};
