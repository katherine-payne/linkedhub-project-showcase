import React, { useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import InputField from "src/Components/Inputs/InputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="flex flex-col w-full items-center gap-4 mx-auto">
      <div className="w-4/12">
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
      <div className="w-4/12">
        <label className="font-medium" htmlFor="password">
          Password:{" "}
        </label>
        <InputField
          id="password"
          placeholder="Password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <PrimaryButton
        icon={<FaUserCheck />}
        text="Login"
        onClick={() => {
          // TODO: login action
        }}
      />
    </div>
  );
}
