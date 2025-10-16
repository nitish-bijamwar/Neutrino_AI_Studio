


// // src/component/UseCases.jsx
// import { useState, useEffect } from "react";
// import UseCaseCard from "./UseCaseCard";
// import { useCasesData } from "./UseCasesData"
// export default function UseCases({ searchTerm }) {
//   const [filteredCases, setFilteredCases] = useState(useCasesData);

//   useEffect(() => {
//     if (!searchTerm) {
//       setFilteredCases(useCasesData);
//     } else {
//       const query = searchTerm.toLowerCase().replace(/\s+/g, "");
//       const filtered = useCasesData.filter(uc =>
//         uc.title.toLowerCase().replace(/\s+/g, "").includes(query)
//       );
//       setFilteredCases(filtered);
//     }
//   }, [searchTerm]);

//   return (
//     <div className="w-full max-w-6xl mx-auto py-10">
//       <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-10">Our Use Cases</h1>
//       <div className="flex flex-wrap gap-8 justify-center">
//         {filteredCases.length > 0 ? (
//           filteredCases.map(uc => <UseCaseCard key={uc.id} {...uc} />)
//         ) : (
//           <p className="text-gray-400 text-xl">No use cases found.</p>
//         )}
//       </div>
//     </div>
//   );
// }




import { useLocation } from "react-router-dom";
import UseCaseCard from "./UseCaseCard";
import { useCasesData } from "./UseCasesData";

export default function UseCases() {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || "";

  const filteredUseCases = searchTerm
    ? useCasesData.filter((u) =>
        u.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : useCasesData;

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-10">
        Our Use Cases
      </h1>

      {filteredUseCases.length === 0 ? (
        <p className="text-center text-gray-400">No use case found.</p>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center">
          {filteredUseCases.map((useCase) => (
            <UseCaseCard key={useCase.id} {...useCase} />
          ))}
        </div>
      )}
    </div>
  );
}

