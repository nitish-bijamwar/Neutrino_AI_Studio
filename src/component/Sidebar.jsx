
import {
  FaHome,
  FaBriefcase,
  FaLayerGroup,
  FaInfoCircle,
  FaEnvelope,
  FaLock,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  // Helper to navigate and close sidebar (for mobile)
  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-60 bg-gray-900 text-gray-200 flex flex-col py-6 border-r border-gray-700 transform transition-transform duration-300 z-30 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close button for mobile */}
      <div className="flex justify-end px-4">
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <FaTimes />
        </button>
      </div>

      <ul className="space-y-4 px-6 mt-4">
        <li
          className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <FaHome /> <span>Home</span>
        </li>

        <li
          className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer"
          onClick={() => handleNavigation("/use-cases")}
        >
          <FaBriefcase /> <span>Use Cases</span>
        </li>

        <li className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer">
          <FaLayerGroup /> <span>Workspace</span>
        </li>

        <div className="border-t border-gray-700 my-3"></div>

        <li className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer"
        onClick={() => handleNavigation("/about")}
        >
          <FaInfoCircle /> <span>About</span>
        </li>

        <li className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer">
          <FaEnvelope /> <span>Contact</span>
        </li>

        <li
          className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer"
          onClick={() => handleNavigation("/login")}
        >
          <FaLock /> <span>Login</span>
        </li>
      </ul>
    </aside>
  );
}
