import { motion } from "framer-motion";

const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-purple-400/40 transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const UseCaseCard = ({ title, description, id, imageUrl, onLearnMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-purple-300 transform hover:-translate-y-2 transition-all duration-300 w-[360px] flex flex-col"
    >
      {imageUrl && (
        <div className="relative w-full mb-4 overflow-hidden rounded-xl">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}

      <h3 className="text-2xl font-bold text-gray-800 tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      <div className="flex gap-3 mt-4">
        <Button onClick={onLearnMore}>Learn More</Button>
        <Button className="bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-sm">
          Use Chatbot
        </Button>
      </div>
    </motion.div>
  );
};

export default UseCaseCard;
