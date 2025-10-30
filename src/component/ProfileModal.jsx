import { useEffect } from "react";

export default function ProfileModal({ isOpen, onClose, profile }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* Modal box */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white text-gray-800 rounded-2xl shadow-2xl w-96 p-6 relative border border-gray-100">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-purple-600 text-lg"
          >
            ✕
          </button>

          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <img
              src={profile.photo}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-gradient-to-r from-purple-500 to-blue-500"
            />
          </div>

          {/* Profile Info */}
          <div className="text-center mb-6 space-y-1">
            <h2 className="text-xl font-bold text-purple-700">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
            <p className="text-blue-600">{profile.position}</p>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-all px-4 py-2 rounded-md font-semibold text-white shadow-md">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
