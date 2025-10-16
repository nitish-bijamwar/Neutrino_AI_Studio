
import { useState } from "react";
import { FaMoon, FaUserCircle, FaSearch, FaEllipsisV, FaHome, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import { useCasesData } from "./UseCasesData"; // ✅ Import data

export default function Navbar({ onMenuClick }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const profile = {
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    position: "Software Engineer",
  };

  // Update suggestions as user types
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = useCasesData.filter((useCase) =>
      useCase.title.toLowerCase().includes(value.toLowerCase().replace(/\s/g, ""))
    );

    setSuggestions(filtered);
  };

  // On suggestion click or search button click
  const handleSearch = (title) => {
    const selected = title || searchInput;
    const matched = useCasesData.find(
      (u) => u.title.toLowerCase().replace(/\s/g, "") === selected.toLowerCase().replace(/\s/g, "")
    );

    if (matched) {
      navigate(`/use-cases?search=${matched.id}`);
    } else {
      alert("No use case found!");
    }
    setSearchInput("");
    setSuggestions([]);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-3 border-b border-gray-700">
        {/* LEFT SECTION — Three dots + Logo */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onMenuClick}
            className="text-white text-xl hover:text-orange-500 focus:outline-none"
          >
            <FaEllipsisV />
          </button>

          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="text-orange-500 font-extrabold text-2xl">N</div>
            <span className="font-bold text-xl">
              <span className="text-orange-500">Neutrino</span>Vation
            </span>
          </div>
        </div>

        {/* MIDDLE SECTION — Search box + Nav Links */}
        <div className="flex items-center space-x-6 relative">
          {/* Search input */}
          <div className="flex flex-col relative">
            <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-md">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search use cases"
                className="bg-transparent outline-none text-sm text-gray-300 w-48"
                value={searchInput}
                onChange={handleChange}
              />
              <button
                className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-white text-sm"
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </div>

            {/* Suggestions dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-gray-800 border border-gray-700 rounded-md mt-1 max-h-48 overflow-auto z-50">
                {suggestions.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 py-2 cursor-pointer hover:bg-orange-500"
                    onClick={() => handleSearch(item.title)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center gap-1 hover:text-orange-500"
              onClick={() => navigate("/")}
            >
              <FaHome /> Home
            </button>
            <button
              className="flex items-center gap-1 hover:text-orange-500"
              onClick={() => navigate("/use-cases")}
            >
              <FaBriefcase /> Use Cases
            </button>
          </div>
        </div>

        {/* RIGHT SECTION — Icons */}
        <div className="flex items-center space-x-4">
          <FaMoon className="text-lg cursor-pointer" />
          <FaUserCircle
            className="text-2xl cursor-pointer"
            onClick={() => setIsProfileOpen(true)}
          />
        </div>
      </nav>

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={profile}
      />
    </>
  );
}
