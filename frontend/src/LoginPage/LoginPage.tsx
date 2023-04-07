import axios from "axios";
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import InputField from "src/Components/Inputs/InputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import BASE_URL from "src/services/service-helper";

export default function LoginPage() {
  const api = axios.create({ withCredentials: true });

  const [type, setType] = useState("poster");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const labelClass = (value: string) =>
    `p-2 rounded-lg flex flex-row justify-center w-full gap-1 ${
      type === value ? "bg-sky-100 outline outline-sky-300" : ""
    }`;

  return (
    <div className="flex flex-col w-full items-center gap-4 mx-auto">
      <div className="w-4/12">
        <label className="font-medium" htmlFor="name">
          Name:{" "}
        </label>
        <InputField
          id="name"
          placeholder="First Last"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="w-4/12">
        <label className="font-medium">Role: </label>
        <div className="text-sm flex flex-row justify-around bg-white rounded-lg shadow cursor-pointer">
          <button
            className={labelClass("poster")}
            onClick={() => {
              setType("poster");
            }}
          >
            <span>Poster</span>
          </button>
          <button
            className={labelClass("recruiter")}
            onClick={() => {
              setType("recruiter");
            }}
          >
            <span>Recruiter</span>
          </button>
          <button
            className={labelClass("admin")}
            onClick={() => {
              setType("admin");
            }}
          >
            <span>Admin</span>
          </button>
        </div>
      </div>
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
        icon={<FaUserPlus />}
        text="Register"
        onClick={() => {
          const newUser = {
            name: name,
            password: pass,
            contact_info: {
              email: email,
            },
          };
          api.post(BASE_URL + "/register", newUser);
        }}
      />
    </div>
  );
}
