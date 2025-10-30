import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function UseCaseDetails({ useCase, onClose }) {
  if (!useCase) return null;

  const { title, imageUrl, description, keyFeatures, howItWorks, demoLink } =
    useCase;

  const handleTryDemo = () => {
    if (demoLink && demoLink.startsWith("http")) {
      window.open(demoLink, "_blank", "noopener,noreferrer");
    } else {
      alert("Demo link not available for this use case.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-[650px] rounded-2xl p-6 shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="flex gap-4 items-center mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-20 h-20 rounded-xl object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-purple-700">Description</h3>
            <p>{description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-700">Key Features</h3>
            <ul className="list-disc ml-6">
              {keyFeatures?.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-purple-700">How It Works</h3>
            <p>{howItWorks}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleTryDemo}
            className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            🚀 Try Demo
          </button>

          <button
            className="flex-1 bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition"
          >
            📘 Documentation
          </button>
        </div>
      </motion.div>
    </div>
  );
}
