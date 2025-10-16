// src/component/useCasesData.jsx
import chatbotimage from "../assets/vicebot.webp";
import salesforcastingimage from "../assets/AI-for-sales-forecasting.webp";
import imgRecognation from "../assets/image-recognation.jpg"
import sentimentimg from "../assets/sentiment.jpg"

export const useCasesData = [
  {
    id: 1,
    title: "AI Chatbot",
    description: "Build intelligent chatbots for customer support.",
    imageUrl: chatbotimage, // ✅ use the variable directly, no quotes
  },
  {
    id: 2,
    title: "Sales Forecasting",
    description: "Predict future sales using AI-powered models.",
    imageUrl: salesforcastingimage,
  },
  {
    id: 3,
    title: "Image Recognition",
    description: "Detect objects and patterns in images using AI.",
    imageUrl: imgRecognation,
  },
  {
    id: 4,
    title: "Sentiment Analysis",
    description: "Analyze customer feedback and social media posts.",
    imageUrl: sentimentimg,
  },
];
