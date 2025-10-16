



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCasesData } from "./UseCasesData"; // your useCasesData

export default function HomeContent() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Filter suggestions based on input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = useCasesData.filter((useCase) =>
      useCase.title.toLowerCase().includes(value.toLowerCase().replace(/\s/g, ""))
    );
    setSuggestions(filtered);
  };

  // On clicking a suggestion
  const handleSuggestionClick = (title) => {
    setQuery(title);
    setSuggestions([]);
  };

  // On search button click
  const handleSearch = () => {
    // Navigate to use-cases page and pass query as state
    navigate("/use-cases", { state: { searchTerm: query } });
  };

  return (
    <div className="relative">
      <h1 className="text-5xl font-extrabold text-center mb-6">
        <span className="text-orange-500">Neutrino</span>Vation
      </h1>
      <p className="text-center text-xl mb-8">
        Discover AI-powered solutions for your business needs
      </p>

      <div className="flex justify-center relative w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search use cases"
          value={query}
          onChange={handleInputChange}
          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md w-full focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md"
        >
          Search
        </button>

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-gray-800 text-white mt-1 rounded-md shadow-lg z-10 max-h-64 overflow-auto">
            {suggestions.map((s) => (
              <li
                key={s.id}
                onClick={() => handleSuggestionClick(s.title)}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                {s.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleSearch} 
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold"
        >
          Explore Use Cases
        </button>
      </div>
    </div>
  );
}
