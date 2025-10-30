import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    if (auth.currentUser) {
      setUserMessage(`You are already logged in as ${auth.currentUser.email}`);
    }
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        alert(`Login successful! Role: ${userData.role}`);
      } else {
        alert("No user data found!");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-white">
      <form
        onSubmit={handleLogin}
        className={`bg-white border border-gray-200 p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent tracking-wide">
          Welcome Back
        </h2>

        {/* Already logged in message */}
        {userMessage && (
          <p className="text-blue-600 text-center mb-4 font-medium">{userMessage}</p>
        )}

        {/* Email input */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            required
          />
        </div>

        {/* Password input */}
        <div className="flex flex-col mb-6">
          <label className="text-gray-700 mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            required
          />
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg w-full transition-transform duration-200 hover:scale-105 shadow-md"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-gray-600 text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 font-medium hover:underline hover:text-purple-600 transition-colors"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
