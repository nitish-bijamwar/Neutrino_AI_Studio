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
    // Add a small delay for fade-in animation
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
    <div className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <form
        onSubmit={handleLogin}
        className={`bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center tracking-wide">
          Welcome Back
        </h2>

        {userMessage && (
          <p className="text-green-400 text-center mb-4">{userMessage}</p>
        )}

        <div className="flex flex-col mb-4">
          <label className="text-gray-300 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
            required
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-gray-300 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg w-full transition-transform duration-200 hover:scale-105 shadow-md"
        >
          Login
        </button>

        <p className="text-gray-400 text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-orange-400 hover:underline hover:text-orange-500 transition-colors"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
