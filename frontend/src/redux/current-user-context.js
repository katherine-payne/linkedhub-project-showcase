import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { profileThunk } from "../services/users-thunks";

function CurrentUserContext({ children }) {
  const dispatch = useDispatch();
  const getProfile = async () => {
    await dispatch(profileThunk());
  };
  useEffect(() => {
    getProfile();
  }, []);

  return children;
}

export default CurrentUserContext;
