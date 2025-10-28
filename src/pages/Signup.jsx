import React, { useState } from "react";
import { auth, db } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email,
        role,
        createdAt: new Date(),
      });

      setMessage("✅ Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMessage("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0b1120] to-[#111827] relative overflow-hidden px-4">

      {/* ✨ Animated Background Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ff8800_0%,_transparent_40%),_radial-gradient(circle_at_bottom_right,_#ffcc00_0%,_transparent_40%)] opacity-30 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-900/70 backdrop-blur-xl text-gray-200 rounded-3xl shadow-2xl p-8 border border-gray-700/50 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-2 tracking-wide">
          Join Neutrino 🚀
        </h2>
        <p className="text-center text-gray-400 mb-6 text-sm">
          Create your account to explore AI-powered experiences
        </p>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Email Field */}
          <div className="relative group">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400 group-hover:text-orange-400 transition" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/70 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-200 placeholder-gray-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative group">
            <FaLock className="absolute top-3 left-3 text-gray-400 group-hover:text-orange-400 transition" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/70 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-200 placeholder-gray-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Role Dropdown */}
          <div className="relative group">
            <FaUserShield className="absolute top-3 left-3 text-gray-400 group-hover:text-orange-400 transition" />
            <select
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/70 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500 text-gray-900 font-semibold text-lg shadow-lg transition duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Creating..." : "Sign Up"}
          </motion.button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("successfully") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        {/* Redirect to Login */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-orange-400 font-medium hover:underline"
          >
            Login
          </button>
        </p>
      </motion.div>
    </div>
  );
}
