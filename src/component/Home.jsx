// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCasesData } from "./UseCasesData";
// import { motion } from "framer-motion";
// import { FaSearch } from "react-icons/fa";

// export default function HomeContent() {
//   const navigate = useNavigate();
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (!value.trim()) {
//       setSuggestions([]);
//       return;
//     }

//     const filtered = useCasesData.filter((useCase) =>
//       useCase.title.toLowerCase().includes(value.toLowerCase().replace(/\s/g, ""))
//     );
//     setSuggestions(filtered);
//   };

//   const handleSuggestionClick = (title) => {
//     setQuery(title);
//     setSuggestions([]);
//   };

//   const handleSearch = () => {
//     navigate("/use-cases", { state: { searchTerm: query } });
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-10 text-gray-900">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-6xl font-extrabold text-center mb-4"
//       >
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600">
//           Neutrino
//         </span>
//         <span className="text-gray-900">Vation</span>
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//         className="text-center text-lg mb-10 text-gray-600 max-w-lg"
//       >
//         Explore cutting-edge AI-powered use cases tailored for your business innovation.
//       </motion.p>

//       {/* Search Section */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//         className="relative w-full max-w-lg"
//       >
//         <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-400 transition-all">
//           <FaSearch className="text-gray-400 ml-4" />
//           <input
//             type="text"
//             placeholder="Search AI use cases..."
//             value={query}
//             onChange={handleInputChange}
//             className="bg-transparent text-gray-700 px-4 py-3 w-full focus:outline-none"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-r-full font-semibold text-white hover:from-purple-600 hover:to-blue-600 transition-all"
//           >
//             Search
//           </button>
//         </div>

//         {/* Suggestions */}
//         {suggestions.length > 0 && (
//           <ul className="absolute top-full left-0 right-0 bg-white border border-gray-200 mt-2 rounded-xl shadow-lg z-10 max-h-60 overflow-auto">
//             {suggestions.map((s) => (
//               <li
//                 key={s.id}
//                 onClick={() => handleSuggestionClick(s.title)}
//                 className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all text-gray-700"
//               >
//                 {s.title}
//               </li>
//             ))}
//           </ul>
//         )}
//       </motion.div>

//       {/* Explore Button */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="mt-10"
//       >
//         <button
//           onClick={handleSearch}
//           className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg text-white hover:from-purple-600 hover:to-blue-600 shadow-md transition-all"
//         >
//           Explore Use Cases 🚀
//         </button>
//       </motion.div>
//     </div>
//   );
// }


// src/components/HomeContent.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCasesData } from "./useCasesData";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function HomeContent() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = useCasesData.filter((useCase) =>
      useCase.title.toLowerCase().includes(value.toLowerCase().trim())
    );
    setSuggestions(filtered);
  };

  const handleSuggestionClick = (title) => {
    setQuery(title);
    setSuggestions([]);
  };

  const handleSearch = () => {
    if (query.trim()) {
      navigate("/use-cases", { state: { searchTerm: query } });
    } else {
      navigate("/use-cases");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-10 text-gray-900">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold text-center mb-4"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600">
          Neutrino
        </span>
        <span className="text-gray-900">Vation</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center text-lg mb-10 text-gray-600 max-w-lg"
      >
        Explore cutting-edge AI-powered use cases tailored for your business innovation.
      </motion.p>

      {/* Search Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative w-full max-w-lg"
      >
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-400 transition-all">
          <FaSearch className="text-gray-400 ml-4" />
          <input
            type="text"
            placeholder="Search AI use cases..."
            value={query}
            onChange={handleInputChange}
            className="bg-transparent text-gray-700 px-4 py-3 w-full focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-r-full font-semibold text-white hover:from-purple-600 hover:to-blue-600 transition-all"
          >
            Search
          </button>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white border border-gray-200 mt-2 rounded-xl shadow-lg z-10 max-h-60 overflow-auto">
            {suggestions.map((s) => (
              <li
                key={s.id}
                onClick={() => handleSuggestionClick(s.title)}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all text-gray-700"
              >
                {s.title}
              </li>
            ))}
          </ul>
        )}
      </motion.div>

      {/* Explore Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10"
      >
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg text-white hover:from-purple-600 hover:to-blue-600 shadow-md transition-all"
        >
          Explore Use Cases 🚀
        </button>
      </motion.div>
    </div>
  );
}
