import React, { useState } from "react";
import { auth, db } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      if (userData?.role === "admin") {
        setMessage("✅ Login successful! Redirecting to Admin Dashboard...");
        setTimeout(() => navigate("/admin-dashboard"), 2000);
      } else {
        setMessage("✅ Login successful! Redirecting to User Dashboard...");
        setTimeout(() => navigate("/user-dashboard"), 2000);
      }
    } catch (error) {
      setMessage("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0b1120] to-[#111827] relative overflow-hidden">
      
      {/* ✨ Animated Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ff8800_0%,_transparent_40%),_radial-gradient(circle_at_bottom_right,_#ffcc00_0%,_transparent_40%)] opacity-30 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-900/70 backdrop-blur-xl text-gray-200 rounded-3xl shadow-2xl p-8 border border-gray-700/50 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-2 tracking-wide">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-400 mb-6 text-sm">
          Login to continue exploring Neutrino AI Studio
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-orange-400 hover:underline"
            >
              Forgot Password?
            </button>
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
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {/* Message Section */}
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("successful")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        {/* Signup Redirect */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-orange-400 font-medium hover:underline"
          >
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
}
