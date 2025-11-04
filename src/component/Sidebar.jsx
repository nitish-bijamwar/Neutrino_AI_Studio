import {
  FaHome,
  FaBriefcase,
  FaLayerGroup,
  FaInfoCircle,
  FaEnvelope,
  FaLock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-xl z-30 transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Toggle Arrow */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-4 top-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full p-2 shadow-lg transition-transform hover:scale-110"
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      <div className="flex flex-col h-full py-6">
        {/* Logo / Title */}
        <div className="text-center font-bold text-xl text-purple-700 mb-8">
          {isOpen ? "Neutrino AI" : "N"}
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-5 px-4 font-medium">
          <li
            onClick={() => handleNavigation("/HomeContent")}
            className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"
          >
            <FaHome className="text-blue-500" />
            {isOpen && <span>Home</span>}
          </li>
          <li
            onClick={() => handleNavigation("/use-cases")}
            className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"
          >
            <FaBriefcase className="text-purple-500" />
            {isOpen && <span>Our Products</span>}
          </li>
         

          <div className="border-t border-gray-200 my-3"></div>

          <li
            onClick={() => handleNavigation("/about")}
            className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"
          >
            <FaInfoCircle className="text-purple-500" />
            {isOpen && <span>About</span>}
          </li>
          <li
            onClick={() => handleNavigation("/contact")}
            className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"
          >
            <FaEnvelope className="text-blue-500" />
            {isOpen && <span>Contact</span>}
          </li>
          <li
            onClick={() => handleNavigation("/login")}
            className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"
          >
            <FaLock className="text-purple-600" />
            {isOpen && <span>Login</span>}
          </li>
        </ul>

        {/* Footer Gradient Strip */}
        <div className="mt-auto mx-4 my-4 h-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></div>
      </div>
    </aside>
  );
}
