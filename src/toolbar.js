import {
  FaSearch,
  FaPlus,
  FaHome,
  FaPencilRuler,
  FaDoorOpen,
} from "react-icons/fa";

export default function Toolbar() {
  return (
    <>
      <ul className="flex items-center justify-between mx-2 mt-2 mb-4 p-4 border-b-2">
        <li className="flex justify-between items-center">
          <button className="group transition-all flex items-center justify-center text-sm text-gray-500 hover:text-gray-700 border border-gray-30 hover:shadow hover:bg-gray-100 rounded-lg mr-4 p-2">
            <span className=" transition-all text-gray-500 group-hover:text-gray-700 p-2">
              <FaHome />
            </span>
          </button>

          <label
            for="search"
            className="transition-all group flex items-center justify-center text-sm text-gray-500 hover:text-gray-700 border border-gray-30 rounded-lg mr-8 p-2 cursor-text hover:bg-gray-100 hover:shadow"
          >
            <label for="search" className="p-2 cursor-text ">
              <FaSearch />
            </label>
            <input
              type="search"
              id="search"
              className=" transition-all block w-full p-2 text-sm text-gray-900 bg-opacity-0 border rounded-lg outline-none border-none group-hover:bg-gray-100"
              placeholder="Search"
              required
            />
          </label>
        </li>

        <li className="flex items-center justify-center">
          <button className="group transition-all flex items-center justify-center text-sm text-gray-500 hover:text-gray-700 border border-gray-30 hover:shadow hover:bg-gray-100 rounded-lg mr-8 p-2">
            <span className=" transition-all text-gray-500 group-hover:text-gray-700 p-2">
              <FaPlus />
            </span>
            Add Project
          </button>
          <div className="group">
            <div className="absolute w-auto min-w-max right-4 scale-0 group-hover:scale-100 transition-all duration-100 bg-slate-100 rounded-lg mt-10 mr-10 shadow flex flex-col p-2 gap-2">
              <button className="group transition-all flex items-center pr-6 text-sm text-gray-500 hover:text-gray-700 border border-gray-30 hover:shadow hover:bg-gray-100 rounded-lg p-2 bg-white">
                <span className=" transition-all text-gray-500 group-hover:text-gray-700 p-2">
                  <FaPencilRuler />
                </span>
                Edit Profile
              </button>
              <button className="group transition-all flex items-center pr-6 text-sm text-gray-500 hover:text-gray-700 border border-gray-30 hover:shadow hover:bg-gray-100 rounded-lg p-2 bg-white">
                <span className=" transition-all text-gray-500 group-hover:text-gray-700 p-2">
                  <FaDoorOpen />
                </span>
                Log Out
              </button>
            </div>

            <img
              className="relative group-hover:drop-shadow-md w-16 h-16 rounded-full transition-all"
              src="https://picsum.photos/400"
              alt="Rounded avatar"
            />
          </div>
        </li>
      </ul>
    </>
  );
}
