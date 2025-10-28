
import { useNavigate } from "react-router-dom";

const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold ${className}`}
    {...props}
  >
    {children}
  </button>
);

const UseCaseCard = ({ title, description, id, imageUrl }) => {
  const navigate = useNavigate();
  return (
    <div className="usecase-card w-[360px] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col bg-gray-800">
      {imageUrl && (
        <div className="w-full mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-3xl"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 text-left">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <div className="flex gap-2 mt-2">
          <Button onClick={() => navigate(`/usecase/details/${id}`)}>Learn More</Button>
          <Button onClick={() => navigate(`/usecase/chatbot/${id}`)}>Use Chatbot</Button>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
