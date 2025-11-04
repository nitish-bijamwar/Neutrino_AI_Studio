import { motion } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import observabilityPDF from "../assets/Observability.pdf";

export default function UseCaseDetails({ useCase, onClose }) {
  const [showVideo, setShowVideo] = useState(false);

  if (!useCase) return null;

  const {
    title,
    imageUrl,
    description,
    keyFeatures,
    howItWorks,
    demoLink,
    videoLink,
  } = useCase;

  // 🚀 Try Demo handler
  const handleTryDemo = () => {
    if (demoLink && demoLink.startsWith("http")) {
      window.open(demoLink, "_blank", "noopener,noreferrer");
    } else {
      alert("Demo link not available for this use case.");
    }
  };

  // 🎥 Show video inside modal
  const handleWatchVideo = () => {
    if (!videoLink) {
      alert("Video not available for this use case.");
      return;
    }
    setShowVideo(true);
  };

  // ⬅️ Back to details view
  const handleBack = () => {
    setShowVideo(false);
  };

  // 📘 Documentation handler
  const handleOpenDocumentation = () => {
    window.open(observabilityPDF, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-[650px] rounded-2xl p-6 shadow-2xl relative"
      >
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* 🎥 Video Mode */}
        {showVideo ? (
          <div className="relative w-full h-[360px] flex flex-col">
            <button
              onClick={handleBack}
              className="absolute top-2 left-2 bg-gray-800/70 text-white px-3 py-1 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition z-10"
            >
              <ArrowLeft size={18} /> Back
            </button>

            <video
              src={videoLink}
              controls
              autoPlay
              className="rounded-xl w-full h-full object-contain bg-black"
            />
          </div>
        ) : (
          <>
            {/* 🧠 Header */}
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

            {/* 📄 Content */}
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

            {/* 🚀 Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={handleTryDemo}
                className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
              >
                🚀 Try Demo
              </button>

              <button
                onClick={handleWatchVideo}
                className="flex-1 bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-700 transition"
              >
                🎥 Watch Video
              </button>

              <button
                onClick={handleOpenDocumentation}
                className="flex-1 bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition"
              >
                📘 Documentation
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
