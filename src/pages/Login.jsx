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
      // Step 1: Authenticate the user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Step 2: Fetch user details from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) {
        setMessage("❌ No user data found. Please contact support.");
        return;
      }

      const userData = userDoc.data();

      // ✅ Step 3: Save user info to sessionStorage
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          uid: user.uid,
          email: user.email,
          role: userData.role,
        })
      );

      // Step 4: Role-based navigation
      if (userData.role === "admin") {
        setMessage("✅ Login successful! Redirecting to Admin Dashboard...");
        setTimeout(() => navigate("/admin-dashboard"), 2000);
      } else {
        setMessage("✅ Login successful!");
        setTimeout(() => navigate("/use-cases"), 2000);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Login to continue exploring Neutrino AI Studio
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold text-lg shadow-md transition duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
}
