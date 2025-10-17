
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

     <h2 className="text-2xl text-center text-orange-300 font-bold mb-4 tracking-wide drop-shadow-sm">
  Explore AI Solutions for Your Business
</h2>
        <h1 className="text-5xl font-extrabold text-center mb-10 
  bg-gradient-to-r from-orange-300 via-orange-400 to-orange-700
  bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,140,0,0.5)]
  tracking-wide">
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

