import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaSearch,
  FaHome,
  FaDoorOpen,
  FaUser,
  FaPencilAlt,
  FaUserFriends,
  FaBuilding,
  FaDraftingCompass,
  FaPencilRuler,
  FaUserSecret,
  FaUserAstronaut,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputField from "src/Components/Inputs/InputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import { logoutThunk } from "src/services/user-thunks";
import { AppDispatch, RootState } from "src/redux/store";
import Role from "src/Types/Role";

export default function NavigationBar() {
  let [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser
  );

  const handleSearch = () => {
    navigate(`/search/${searchQuery}`);

    // remove focus from search bar
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <ul className="flex items-center justify-between px-4 pt-4 mb-4 sticky z-50 top-0 bg-white w-full p-4 shadow-md">
      <li className="flex justify-between items-center">
        <PrimaryButton
          bgClass="mr-4"
          icon={<FaHome />}
          onClick={() => navigate("/")}
        />

        <label
          htmlFor="search"
          className="transition-all group flex items-center justify-center text-sm text-secondary hover:text-secondary-hover border border-border-neutral rounded-lg mr-2 xs:mr-4 sm:mr-4 p-2 cursor-text hover:bg-gray-100 hover:shadow"
        >
          <PrimaryButton
            hoverShadow=""
            buttonBorderColor={""}
            buttonBgColor={""}
            bgClass={`${searchQuery === "" ? "cursor-text" : "cursor-pointer"}`}
            onClick={() => {
              if (searchQuery !== "") {
                handleSearch();
              }
            }}
            icon={<FaSearch />}
          />

          <InputField
            type="search"
            id="search"
            border="none"
            placeholder="Search"
            classAdditions="group-hover:bg-gray-100"
            background="bg-opacity-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            focus={false}
            required={true}
          />
        </label>

        {currentUser?.role === Role.Admin && (
          <PrimaryButton
            bgClass="mr-4"
            icon={<FaUserFriends />}
            text={"Recruiters"}
            textClass={"hidden md:block"}
            onClick={() => navigate("/recruiters")}
          />
        )}

        {(currentUser?.role === Role.Admin || currentUser?.role === Role.Recruiter) && (
          <PrimaryButton
            bgClass="mr-4"
            icon={<FaBuilding />}
            text={"Companies"}
            textClass={"hidden md:block"}
            onClick={() => navigate("/companies")}
          />
        )}
      </li>

      <li className="flex items-center justify-center">
        {currentUser?.role === Role.Admin && (
          <PrimaryButton
            bgClass="mr-4"
            text={"Add Company"}
            textClass={"hidden lg:block"}
            icon={<FaDraftingCompass />}
            onClick={() => {
              navigate("/add/company");
            }}
          />
        )}

        {currentUser?.role === Role.Poster && (
          <PrimaryButton
            bgClass="mr-4"
            text={"Add Project"}
            textClass={"hidden lg:block"}
            icon={<FaPencilRuler />}
            onClick={() => {
              navigate("/add/project");
            }}
          />
        )}

        <div className="group">
          <div className="absolute w-auto min-w-max right-4 scale-0 group-hover:scale-100 transition-all duration-100 bg-slate-100 rounded-lg mt-10 mr-10 shadow flex flex-col p-2">
            {currentUser?.email ? (
              <div className="flex w-full flex-col gap-2">
                <Link to="/profile">
                  <PrimaryButton
                    bgClass="w-full"
                    text={"My Profile"}
                    icon={<FaUser />}
                    onClick={() => {
                      navigate("/profile");
                    }}
                  />
                </Link>
                <Link to="/profile/edit">
                  <PrimaryButton
                    bgClass="w-full"
                    text={"Edit Profile"}
                    icon={<FaPencilAlt />}
                    onClick={() => {}}
                  />
                </Link>
                <PrimaryButton
                  bgClass="w-full"
                  text={"Log Out"}
                  icon={<FaDoorOpen />}
                  onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/");
                  }}
                />
              </div>
            ) : (
              <div className="flex flex-col w-full gap-2">
                <Link to="/login">
                  <PrimaryButton
                    bgClass="w-full"
                    text={"Log In"}
                    icon={<FaUser />}
                    onClick={() => {}}
                  />
                </Link>
                <Link to="/register">
                  <PrimaryButton
                    bgClass="w-full"
                    text={"Register"}
                    icon={<FaUser />}
                    onClick={() => {}}
                  />
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center items-center border border-border relative group-hover:drop-shadow-md w-16 h-16 rounded-full transition-all bg-white">
            {currentUser?.profile_image_url ? (
              <img className="rounded-full aspect-square  object-cover" src={currentUser.profile_image_url} alt="Rounded avatar" />
            ) : currentUser?.email ? (
              <div className="text-2xl text-secondary-hover">
                <FaUserAstronaut />
              </div>
            ) : (
              <div className="text-2xl text-secondary">
                <FaUserSecret />
              </div>
            )}
          </div>
        </div>
      </li>
    </ul>
  );
}
