
// import { useState } from "react";
// import UseCaseCard from "./UseCaseCard";
// import { useCasesData } from "./useCasesData";
// import UseCaseDetails from "./UseCaseDetails";

// export default function UseCases() {
//   const [selectedUseCase, setSelectedUseCase] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState(useCasesData);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const handleSearch = () => {
//     const filtered = useCasesData.filter((useCase) =>
//       useCase.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//     setShowSuggestions(false);
//   };

//   const handleClear = () => {
//     setSearchTerm("");
//     setFilteredData(useCasesData);
//     setShowSuggestions(false);
//   };

//   const handleSuggestionClick = (title) => {
//     setSearchTerm(title);
//     setShowSuggestions(false);
//   };

//   const suggestions = useCasesData.filter((useCase) =>
//     useCase.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="relative w-full max-w-6xl mx-auto py-10 bg-white">
//       {/* 🔍 Search Section */}
//       <div className="flex flex-col items-center mb-10 relative">
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setShowSuggestions(true);
//             }}
//             placeholder="Search use case..."
//             className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Search
//           </button>
//           <button
//             onClick={handleClear}
//             className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
//           >
//             Clear
//           </button>
//         </div>

//         {/* 🧠 Dropdown Suggestions */}
//         {showSuggestions && searchTerm && (
//           <ul className="absolute mt-12 w-80 bg-white border border-gray-300 rounded-lg shadow-md max-h-40 overflow-y-auto z-10">
//             {suggestions.length > 0 ? (
//               suggestions.map((useCase) => (
//                 <li
//                   key={useCase.id}
//                   onClick={() => handleSuggestionClick(useCase.title)}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
//                 >
//                   {useCase.title}
//                 </li>
//               ))
//             ) : (
//               <li className="px-4 py-2 text-gray-500">No results found</li>
//             )}
//           </ul>
//         )}
//       </div>

//       {/* 💡 Use Case Cards */}
//       <div
//         className={`transition-all duration-300 ${
//           selectedUseCase ? "blur-sm brightness-75" : ""
//         }`}
//       >
//         <div className="flex flex-wrap gap-8 justify-center">
//           {filteredData.length > 0 ? (
//             filteredData.map((useCase) => (
//               <UseCaseCard
//                 key={useCase.id}
//                 {...useCase}
//                 onLearnMore={() => setSelectedUseCase(useCase)}
//               />
//             ))
//           ) : (
//             <p className="text-gray-500 text-lg mt-10">
//               No use cases match your search.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* 🪟 Popup Overlay */}
//       {selectedUseCase && (
//         <UseCaseDetails
//           useCase={selectedUseCase}
//           onClose={() => setSelectedUseCase(null)}
//         />
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UseCaseCard from "./UseCaseCard";
import { useCasesData } from "./UseCasesData";
import UseCaseDetails from "./UseCaseDetails";

export default function UseCases() {
  const location = useLocation();
  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(useCasesData);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // 🟣 Apply search term from HomeContent if available
  useEffect(() => {
    if (location.state?.searchTerm) {
      const term = location.state.searchTerm.toLowerCase();
      setSearchTerm(location.state.searchTerm);
      setFilteredData(
        useCasesData.filter((useCase) =>
          useCase.title.toLowerCase().includes(term)
        )
      );
    } else {
      setFilteredData(useCasesData);
    }
  }, [location.state]);

  // 🟢 Handle search
  const handleSearch = () => {
    const filtered = useCasesData.filter((useCase) =>
      useCase.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setShowSuggestions(false);
  };

  // 🧹 Clear search
  const handleClear = () => {
    setSearchTerm("");
    setFilteredData(useCasesData);
    setShowSuggestions(false);
  };

  // 🧠 Suggestions list (real-time)
  const suggestions = useCasesData.filter((useCase) =>
    useCase.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🖱️ Handle suggestion click
  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    setShowSuggestions(false);
    const filtered = useCasesData.filter((useCase) =>
      useCase.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 bg-white">
      {/* 🔍 Search box */}
      <div className="flex flex-col items-center mb-10 relative">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            placeholder="Search use case..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Clear
          </button>
        </div>

        {/* 🧠 Dropdown Suggestions */}
        {showSuggestions && searchTerm && (
          <ul className="absolute mt-12 w-80 bg-white border border-gray-300 rounded-lg shadow-md max-h-40 overflow-y-auto z-10">
            {suggestions.length > 0 ? (
              suggestions.map((useCase) => (
                <li
                  key={useCase.id}
                  onClick={() => handleSuggestionClick(useCase.title)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                >
                  {useCase.title}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>

      {/* 💡 Use Case Cards */}
      <div
        className={`transition-all duration-300 ${
          selectedUseCase ? "blur-sm brightness-75" : ""
        }`}
      >
        <div className="flex flex-wrap gap-8 justify-center">
          {filteredData.length > 0 ? (
            filteredData.map((useCase) => (
              <UseCaseCard
                key={useCase.id}
                {...useCase}
                onLearnMore={() => setSelectedUseCase(useCase)}
              />
            ))
          ) : (
            <p className="text-gray-500 text-lg mt-10">
              No use cases match your search.
            </p>
          )}
        </div>
      </div>

      {/* 🪟 Popup Overlay */}
      {selectedUseCase && (
        <UseCaseDetails
          useCase={selectedUseCase}
          onClose={() => setSelectedUseCase(null)}
        />
      )}
    </div>
  );
}
