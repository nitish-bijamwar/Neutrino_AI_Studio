// src/component/Navbar.jsx
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar({ isSidebarOpen }) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10 transition-all duration-300 ${
        isSidebarOpen ? "w-[calc(100%-16rem)] ml-64" : "w-[calc(100%-4rem)] ml-16"
      }`}
    >
      {/* 🖤 Minimal Black & White Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/bw-logo.png" // 🖤 replace with your actual black & white logo file (place in public/)
          alt="Company Logo"
          className="w-9 h-9 object-contain"
        />
      </div>

      {/* 👤 Profile Icon */}
      <button className="text-gray-700 hover:text-gray-900 transition">
        <FaUserCircle size={26} />
      </button>
    </motion.nav>
  );
}
