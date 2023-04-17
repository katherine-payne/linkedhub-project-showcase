import React, { useEffect, useState } from "react";
import { FaExclamation, FaUserCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import InputField from "src/Components/Inputs/InputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import { AppDispatch, RootState } from "src/redux/store";
import { loginThunk } from "src/services/user-thunks";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState("waiting");

  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (currentUser?._id) {
      nav("/profile");
    }
  }, [currentUser, nav]);

  const handleLogin = async () => {
    if (!(email === "" && password === "")) {
      try {
        await dispatch(loginThunk({ email, password }));
        if (!currentUser?._id) {
          setLoginState("failed");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="flex flex-col w-full items-center gap-4 mx-auto">
      <div className="max-w-sm w-full">
        {loginState === "failed" && (
          <div className="flex flex-row justify-center items-center gap-2 text-rose-400 bg-white border border-border p-2 rounded-lg shadow mb-4">
            <span>
              <FaExclamation />
            </span>
            Incorrect login details. Please try again.
          </div>
        )}
        <label className="font-medium" htmlFor="email">
          Email:{" "}
        </label>
        <InputField
          id="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="max-w-sm w-full">
        <label className="font-medium" htmlFor="password">
          Password:{" "}
        </label>
        <InputField
          id="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />
      </div>
      <PrimaryButton
        icon={<FaUserCheck />}
        text="Login"
        disabled={email === "" || password === ""}
        onClick={handleLogin}
      />
    </div>
  );
}
