import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-gradient-to-r from-[#0b1120] to-[#020617] text-gray-300 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Newsletter */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/src/assets/logo.jpg"
              alt="Neutrino Logo"
              className="h-8 w-8 object-contain"
            />
            <h2 className="text-xl font-semibold text-white">NEUTRINO</h2>
          </div>

          <h3 className="text-lg font-semibold text-white mb-2">
            Join our newsletter
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Sign up to our mailing list and be the first to know about updates.
            We hate spam too.
          </p>

          <div className="flex items-center bg-[#1a2234] rounded-md overflow-hidden max-w-sm">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder-gray-500"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 transition-all">
              Sign Up
            </button>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Cloud Engineering</li>
            <li>DevOps</li>
            <li>Data Engineering</li>
            <li>Salesforce</li>
            <li>Quality Engineering</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Blog</li>
            <li>Services</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Blogs</li>
            <li>Customer Service Stories</li>
            <li>Ebooks</li>
            <li>Tech Newsletter</li>
            <li>Podcast</li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Neutrino AI Studio. All rights reserved.
      </div>
    </footer>
  );
}
