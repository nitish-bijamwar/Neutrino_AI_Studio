import { useState } from "react";
// import { auth, db } from "../services/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), { email, role });

      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const redirectToLogin = () => navigate("/login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0b1120] via-[#0f1020] to-[#020617] px-4">
      <div className="w-full max-w-md bg-gray-900/80 text-gray-200 rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-700 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-6 drop-shadow-lg">
          AI Studio Signup
        </h2>

        <form onSubmit={handleSignup} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-200 placeholder-gray-500 transition"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-200 placeholder-gray-500 transition"
            />
          </div>

          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-200 transition"
            >
              <option value="user">User</option>
              <option value="lawyer">Lawyer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500 text-gray-900 font-semibold text-lg shadow-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <button
            type="button"
            onClick={redirectToLogin}
            className="text-orange-500 font-medium hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
