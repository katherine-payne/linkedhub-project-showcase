import React, { useRef } from "react";
import { useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaHome,
  FaPencilRuler,
  FaDoorOpen,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function NavigationBar() {
  let [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

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
        <Link to="/">
          <button className="group transition-all flex items-center justify-center text-sm text-secondary hover:text-secondary-hover border border-border-neutral hover:shadow hover:bg-gray-100 rounded-lg mr-4 p-2">
            <span className=" transition-all text-secondary group-hover:text-secondary-hover p-2">
              <FaHome />
            </span>
          </button>
        </Link>

        <label
          htmlFor="search"
          className="transition-all group flex items-center justify-center text-sm text-secondary hover:text-secondary-hover border border-border-neutral rounded-lg mr-2 xs:mr-4 sm:mr-8 p-2 cursor-text hover:bg-gray-100 hover:shadow"
        >
          <button
            className={`p-2 ${
              searchQuery === "" ? "cursor-text" : "cursor-pointer"
            }`}
            onClick={() => {
              if (searchQuery === "") {
                // focus on search label
                if (inputRef.current !== null) {
                  inputRef.current.focus();
                }
              } else {
                handleSearch();
              }
            }}
          >
            <FaSearch />
          </button>
          <input
            type="search"
            id="search"
            ref={inputRef}
            className="transition-all block w-full p-2 text-sm text-gray-900 bg-opacity-0 border rounded-lg outline-none border-none group-hover:bg-gray-100"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            required
          />
        </label>
      </li>

      <li className="flex items-center justify-center">
        <Link to="/add">
          <div className="group transition-all flex items-center justify-center text-sm text-secondary hover:text-secondary-hover border border-border-neutral hover:shadow hover:bg-gray-100 rounded-lg mr-2 xs:mr-4 sm:mr-8 p-2">
            <span className=" transition-all text-secondary group-hover:text-secondary-hover p-2">
              <FaPlus />
            </span>
            <span className="hidden sm:block">Add Project</span>
          </div>
        </Link>
        <div className="group">
          <div className="absolute w-auto min-w-max right-4 scale-0 group-hover:scale-100 transition-all duration-100 bg-slate-100 rounded-lg mt-10 mr-10 shadow flex flex-col p-2 gap-2">
            <button className="group transition-all flex items-center pr-6 text-sm text-secondary hover:text-secondary-hover border border-border-neutral hover:shadow hover:bg-gray-100 rounded-lg p-2 bg-white">
              <span className=" transition-all text-secondary group-hover:text-secondary-hover p-2">
                <FaPencilRuler />
              </span>
              Edit Profile
            </button>
            <button className="group transition-all flex items-center pr-6 text-sm text-secondary hover:text-secondary-hover border border-border-neutral hover:shadow hover:bg-gray-100 rounded-lg p-2 bg-white">
              <span className=" transition-all text-secondary group-hover:text-secondary-hover p-2">
                <FaDoorOpen />
              </span>
              Log Out
            </button>
          </div>

          <Link to="/profile">
            <img
              className="relative group-hover:drop-shadow-md w-16 h-16 rounded-full transition-all lh-profile-image object-cover"
              src="https://picsum.photos/400"
              alt="Rounded avatar"
            />
          </Link>
        </div>
      </li>
    </ul>
  );
}