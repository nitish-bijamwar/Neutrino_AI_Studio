import React, { useState } from "react";

import { Link } from "react-router-dom"; // if using React Router
 
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
 
  return (
<nav className="bg-gray-800 text-white shadow-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

          {/* Logo */}
<div className="flex-shrink-0">
<Link to="/" className="text-2xl font-bold">

              MyWebsite
</Link>
</div>
 
          {/* Desktop Menu */}
<div className="hidden md:flex space-x-6">
<Link to="/" className="hover:text-gray-300">

              Home
</Link>
<Link to="/about" className="hover:text-gray-300">

              About
</Link>
<Link to="/services" className="hover:text-gray-300">

              Services
</Link>
<Link to="/contact" className="hover:text-gray-300">

              Contact
</Link>
</div>
 
          {/* Mobile Menu Button */}
<div className="md:hidden">
<button

              onClick={() => setIsOpen(!isOpen)}

              className="focus:outline-none"
>

              {isOpen ? (
<svg

                  className="w-6 h-6"

                  fill="none"

                  stroke="currentColor"

                  viewBox="0 0 24 24"

                  xmlns="http://www.w3.org/2000/svg"
>
<path

                    strokeLinecap="round"

                    strokeLinejoin="round"

                    strokeWidth="2"

                    d="M6 18L18 6M6 6l12 12"
></path>
</svg>

              ) : (
<svg

                  className="w-6 h-6"

                  fill="none"

                  stroke="currentColor"

                  viewBox="0 0 24 24"

                  xmlns="http://www.w3.org/2000/svg"
>
<path

                    strokeLinecap="round"

                    strokeLinejoin="round"

                    strokeWidth="2"

                    d="M4 6h16M4 12h16M4 18h16"
></path>
</svg>

              )}
</button>
</div>
</div>
</div>
 
      {/* Mobile Menu */}

      {isOpen && (
<div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-gray-700">
<Link to="/" className="block hover:text-gray-300">

            Home
</Link>
<Link to="/about" className="block hover:text-gray-300">

            About
</Link>
<Link to="/services" className="block hover:text-gray-300">

            Services
</Link>
<Link to="/contact" className="block hover:text-gray-300">

            Contact
</Link>
</div>

      )}
</nav>

  );

};
 
export default Navbar;

 