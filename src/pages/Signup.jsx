import React, { useState } from "react";
import { auth, db } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // ✅ Message for success/error
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // ✅ Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Store user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email,
        role,
        createdAt: new Date(),
      });

      // ✅ Display success message and redirect
      setMessage("✅ Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      // ❌ Handle errors gracefully
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1120] via-[#111827] to-[#020617] px-4">
      <div className="w-full max-w-md bg-gray-900 text-gray-200 rounded-3xl shadow-2xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Create Neutrino Account
        </h2>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Role Dropdown */}
          <div className="relative">
            <FaUserShield className="absolute top-3 left-3 text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500 text-gray-900 font-semibold text-lg shadow-lg transition duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        {/* ✅ Success/Error Message */}
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
            className="text-orange-500 font-medium hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
