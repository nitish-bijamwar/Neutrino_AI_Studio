import { useEffect } from "react";

export default function ProfileModal({ isOpen, onClose, profile }) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Background overlay with blur */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
        onClick={onClose} // close if clicked outside modal
      ></div>

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg w-96 p-6 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          >
            ✕
          </button>

          {/* Profile Photo */}
          <div className="flex justify-center mb-4">
            <img
              src={profile.photo}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-orange-500"
            />
          </div>

          {/* Profile Info */}
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{profile.email}</p>
            <p className="text-gray-600 dark:text-gray-300">{profile.position}</p>
          </div>

          {/* Reset Password Button */}
          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-semibold text-white">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
