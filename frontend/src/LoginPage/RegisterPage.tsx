import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { FaUserPlus } from "react-icons/fa";
import InputField from "src/Components/Inputs/InputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import { registerThunk } from "src/services/user-thunks";
import { AppDispatch, RootState } from "src/redux/store";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState<"poster" | "recruiter" | "admin">("poster");

  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser
  );

  useEffect(() => {
    if (currentUser?._id) {
      nav("/profile/edit");
    }
  }, [currentUser, nav]);

  const handleRegister = async () => {
    if (
      name === "" ||
      image === "" ||
      pass === "" ||
      email === ""
    ) {
    } else {
      const newUser = {
        name: name,
        profile_image_url: image,
        password: pass,
        role: role,
        email: email,
      };
      try {
        dispatch(registerThunk(newUser));
        nav("/profile/edit");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const labelClass = (value: string) =>
    `p-2 rounded-lg flex flex-row justify-center w-full gap-1 ${
      role === value ? "bg-sky-100 outline outline-sky-300" : ""
    }`;

  return (
    <div className="flex flex-col w-full items-center gap-4 mx-auto">
      <div className="w-4/12">
        <p className="font-serif text-3xl font-bold mb-4">Register</p>

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
      <div className="flex w-4/12 flex-row justify-between">
        <div className="flex flex-col flex-1 mr-6">
          <label className="font-medium" htmlFor="name">
            Profile Picture:{" "}
          </label>
          <InputField
            id="profile-pic"
            placeholder="URL"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex flex-0 w-24 h-24">
          <img
            className="w-24 h-24 aspect-square rounded-full object-cover shadow-md"
            alt="Rounded avatar"
            src={image}
          />
        </div>
      </div>
      <div className="w-4/12">
        <label className="font-medium">Role: </label>
        <div className="text-sm flex flex-row justify-around bg-white rounded-lg shadow cursor-pointer">
          <button
            className={labelClass("poster")}
            onClick={() => {
              setRole("poster");
            }}
          >
            <span>Poster</span>
          </button>
          <div
            className={`${
              role === "poster" ? "opacity-0" : ""
            } w-1 bg-gray-200 my-2`}
          />
          <button
            className={labelClass("recruiter")}
            onClick={() => {
              setRole("recruiter");
            }}
          >
            <span>Recruiter</span>
          </button>
          <div
            className={`${
              role === "recruiter" ? "opacity-0" : ""
            } w-1 bg-gray-200 my-2`}
          />
          <button
            className={labelClass("admin")}
            onClick={() => {
              setRole("admin");
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleRegister();
            }
          }}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <PrimaryButton
        icon={<FaUserPlus />}
        text="Register"
        disabled={email === "" || pass === "" || name === "" || image === ""}
        onClick={handleRegister}
      />
    </div>
  );
}
