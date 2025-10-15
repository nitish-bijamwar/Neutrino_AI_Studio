import { FaMoon, FaUserCircle, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-3 border-b border-gray-700">
      <div className="flex items-center space-x-2">
        <div className="text-orange-500 font-extrabold text-2xl">N</div>
        <span className="font-bold text-xl">
          <span className="text-orange-500">Neutrino</span>Vation
        </span>
      </div>

      <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-md">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search use cases"
          className="bg-transparent outline-none text-sm text-gray-300 w-48"
        />
        <button className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-white text-sm">
          Search
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <FaMoon className="text-lg cursor-pointer" />
        <FaUserCircle className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
}
