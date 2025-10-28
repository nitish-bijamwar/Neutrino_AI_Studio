import React, { useState } from "react";
import { auth, db } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

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
      // ✅ Sign in user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Fetch role from Firestore
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1120] via-[#111827] to-[#020617] px-4">
      <div className="w-full max-w-md bg-gray-900 text-gray-200 rounded-3xl shadow-2xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Login to Neutrino
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500 text-gray-900 font-semibold text-lg shadow-lg transition duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* ✅ Message Section */}
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
            className="text-orange-500 font-medium hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
