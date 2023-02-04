import { FaSearch, FaPlus, FaHome } from "react-icons/fa";

export default function Toolbar() {
  return (
    <>
      <ul className="flex items-center justify-between mx-2 mt-2 mb-4 p-4 border-b-2">
        <li className="flex justify-between items-center">
          <button className="flex items-center justify-center text-sm text-gray-500 hover:text-gray-700 border border-gray-30 hover:shadow hover:bg-gray-100 rounded-lg mr-4 p-2">
            <span className="text-gray-500 hover:text-gray-700 p-2">
              <FaHome />
            </span>
          </button>

          <label for="search" className="group flex items-center justify-center text-sm text-gray-500 hover:text-gray-700 border border-gray-30 rounded-lg mr-8 p-2 cursor-text hover:bg-gray-100 hover:shadow">
            <label for="search" className="p-2 cursor-text ">
              <FaSearch />
            </label>
            <input
              type="search"
              id="search"
              className="block w-full p-2 text-sm text-gray-900 bg-opacity-0 border rounded-lg outline-none border-none group-hover:bg-gray-100"
              placeholder="Search"
              required
            />
          </label>
        </li>

        <li className="flex items-center justify-center">
          <button className="flex items-center justify-center text-sm text-gray-500 hover:text-gray-700 border border-gray-30 hover:shadow hover:bg-gray-100 rounded-lg mr-8 p-2">
            <span className="text-gray-500 hover:text-gray-700 p-2">
              <FaPlus />
            </span>
            Add Project
          </button>
          <button>
            <img
              className="hover:drop-shadow-md w-16 h-16 rounded-full"
              src="https://picsum.photos/400"
              alt="Rounded avatar"
            />
          </button>
        </li>
      </ul>
    </>
  );
}
