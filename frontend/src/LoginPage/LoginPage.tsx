import React, { useState } from "react";
import { BsSignal } from "react-icons/bs";
import { FaExclamation, FaSign, FaUserCheck, FaXing } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import InputField from "src/Components/Inputs/InputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import { AppDispatch, RootState } from "src/redux/store";
import { loginThunk } from "src/services/user-thunks";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginState, setLoginState] = useState("waiting");

  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector((state: RootState) => state.users);
  const handleLogin = async () => {
    try {
      await dispatch(loginThunk({ contact_info: { email }, password: pass }));
      if (currentUser == null) {
        // FIXME + TODO: == null isn't blocking as intended
        setLoginState("failed");
      } else {
        nav("/profile");
      }
    } catch (e) {
      console.log(e);
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
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleLogin();
            }
          }}
        />
      </div>
      <PrimaryButton
        icon={<FaUserCheck />}
        text="Login"
        onClick={handleLogin}
      />
    </div>
  );
}
