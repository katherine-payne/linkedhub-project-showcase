import React from "react";
import { useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaHome,
  FaDoorOpen,
  FaUser,
  FaPencilAlt,
  FaUserFriends,
  FaBuilding,
  FaUserPlus,
  FaCartPlus,
  FaDraftingCompass,
  FaRProject,
  FaPencilRuler,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputField from "src/Components/Inputs/InputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";

export default function NavigationBar() {
  let [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

        <PrimaryButton
          bgClass="mr-4"
          icon={<FaUserFriends />}
          text={"Recruiters"}
          textClass={"hidden md:block"}
          onClick={() => navigate("/recruiters")}
        />

        <PrimaryButton
          bgClass="mr-4"
          icon={<FaBuilding />}
          text={"Companies"}
          textClass={"hidden md:block"}
          onClick={() => navigate("/companies")}
        />
      </li>

      <li className="flex items-center justify-center">
        <PrimaryButton
          bgClass="mr-4"
          text={"Add Company"}
          textClass={"hidden lg:block"}
          icon={<FaDraftingCompass />}
          onClick={() => {
            navigate("/add/company");
          }}
        />

        <PrimaryButton
          bgClass="mr-4"
          text={"Add Project"}
          textClass={"hidden lg:block"}
          icon={<FaPencilRuler />}
          onClick={() => {
            navigate("/add/project");
          }}
        />

        <div className="group">
          <div className="absolute w-auto min-w-max right-4 scale-0 group-hover:scale-100 transition-all duration-100 bg-slate-100 rounded-lg mt-10 mr-10 shadow flex flex-col p-2 gap-2">
            <Link to="/profile">
              <PrimaryButton
                text={"My Profile"}
                icon={<FaUser />}
                onClick={() => {}}
              />
            </Link>
            <Link to="/profile/edit">
              <PrimaryButton
                text={"Edit Profile"}
                icon={<FaPencilAlt />}
                onClick={() => {}}
              />
            </Link>
            <PrimaryButton
              text={"Log Out"}
              icon={<FaDoorOpen />}
              onClick={() => {}}
            />
          </div>

          <Link to="/profile">
            <img
              className="relative group-hover:drop-shadow-md w-16 h-16 rounded-full transition-all lh-profile-image object-cover aspect-square"
              src="https://picsum.photos/400"
              alt="Rounded avatar"
            />
          </Link>
        </div>
      </li>
    </ul>
  );
}
