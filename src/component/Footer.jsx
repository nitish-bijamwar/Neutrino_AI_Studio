import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-white text-gray-700 py-16 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Newsletter */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/src/assets/logo.jpg"
              alt="Neutrino Logo"
              className="h-8 w-8 object-contain"
            />
            <h2 className="text-xl font-bold bg-gradient-to-r from-[#6c63ff] to-[#00b4ff] text-transparent bg-clip-text">
              NEUTRINO
            </h2>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Join our newsletter
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Sign up to our mailing list and be the first to know about updates.
            We hate spam too.
          </p>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden max-w-sm">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-[#6c63ff] to-[#00b4ff] text-white text-sm font-medium px-4 py-2 transition-all hover:opacity-90">
              Sign Up
            </button>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Cloud Engineering</li>
            <li>DevOps</li>
            <li>Data Engineering</li>
            <li>Salesforce</li>
            <li>Quality Engineering</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About</li>
            <li>Blog</li>
            <li>Services</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Blogs</li>
            <li>Customer Stories</li>
            <li>Ebooks</li>
            <li>Tech Newsletter</li>
            <li>Podcast</li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
        © {new Date().getFullYear()}{" "}
        <span className="bg-gradient-to-r from-[#6c63ff] to-[#00b4ff] text-transparent bg-clip-text font-medium">
          Neutrino AI Studio
        </span>{" "}
        . All rights reserved.
      </div>
    </footer>
  );
}
