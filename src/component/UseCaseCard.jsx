import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-orange-500/30 transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const UseCaseCard = ({ title, description, id, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-5 shadow-md border border-gray-700 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-2 transition-all duration-300 w-[360px] flex flex-col"
    >
      {/* Gradient glow ring */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-yellow-400/10 opacity-0 hover:opacity-100 blur-xl transition-all"></div>

      {imageUrl && (
        <div className="relative w-full mb-5 overflow-hidden rounded-xl">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      )}

      <div className="flex flex-col gap-3 text-left z-10">
        <h3 className="text-2xl font-bold text-white tracking-wide">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>

        <div className="flex gap-3 mt-4">
          <Button onClick={() => navigate(`/usecase/details/${id}`)}>
            Learn More
          </Button>
          <Button onClick={() => navigate(`/usecase/chatbot/${id}`)} className="bg-gray-700 hover:bg-gray-600">
            Use Chatbot
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default UseCaseCard;
