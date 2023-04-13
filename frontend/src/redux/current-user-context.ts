import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { profileThunk } from "../services/user-thunks";
import { AppDispatch } from "./store";

function CurrentUserContext({ children }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const getProfile = async () => {
    dispatch(profileThunk());
  };
  useEffect(() => {
    getProfile();
  }, []);

  return children;
}

export default CurrentUserContext;
