import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar({ isSidebarOpen }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const email = parsedUser?.email;

        if (email) {
          const namePart = email.split("@")[0];
          const formattedName =
            namePart.charAt(0).toUpperCase() + namePart.slice(1);
          setUserName(formattedName);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10 transition-all duration-300 ${
        isSidebarOpen
          ? "w-[calc(100%-16rem)] ml-64"
          : "w-[calc(100%-4rem)] ml-16"
      }`}
    >
      {/* 🖤 Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/bw-logo.png" alt="Company Logo" className="w-9 h-9 object-contain" />
      </div>

      {/* 👤 User Info Section */}
      <div className="flex items-center gap-3 text-gray-700">
        <FaUserCircle size={26} className="text-gray-700" />
        {userName ? (
          <span className="font-medium text-sm text-gray-800">{userName}</span>
        ) : (
          <span className="text-sm text-gray-400">Guest</span>
        )}
      </div>
    </motion.nav>
  );
}
