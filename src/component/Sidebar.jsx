import { FaHome, FaBriefcase, FaLayerGroup, FaInfoCircle, FaEnvelope, FaLock } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-gray-900 text-gray-200 flex flex-col py-6 border-r border-gray-700">
      <ul className="space-y-4 px-4">
        <li className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer">
          <FaHome /> <span>Home</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer">
          <FaBriefcase /> <span>Use Cases</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer">
          <FaLayerGroup /> <span>Workspace</span>
        </li>
        <div className="border-t border-gray-700 my-3"></div>
        <li className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer">
          <FaInfoCircle /> <span>About</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer">
          <FaEnvelope /> <span>Contact</span>
        </li>
        <li
          className="flex items-center space-x-3 hover:text-orange-500 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          <FaLock /> <span>Login</span>
        </li>
      </ul>
    </aside>
  );
}
