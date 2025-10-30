import chatbotimage from "../assets/vicebot.webp";
import salesforcastingimage from "../assets/AI-for-sales-forecasting.webp";
import imgRecognation from "../assets/image-recognation.jpg";
import sentimentimg from "../assets/sentiment.jpg";
import voicerecognationimg from "../assets/Voice-Recognition-1.jpg";
import medicalimg from "../assets/medical.jpg";

export const useCasesData = [
  {
    id: 1,
    title: "AI Chatbot",
    description: "Build intelligent chatbots for customer support.",
    imageUrl: chatbotimage,
    keyFeatures: [
      "24/7 automated customer service",
      "Multilingual support",
      "Context-aware conversations",
      "Integration with CRM tools",
    ],
    howItWorks:
      "The chatbot uses NLP models to understand user queries, fetch responses from a knowledge base, and continuously learn from interactions to improve response accuracy.",
    demoLink: "https://crimetracke.netlify.app/",
  },
  {
    id: 2,
    title: "Sales Forecasting",
    description: "Predict future sales using AI-powered models.",
    imageUrl: salesforcastingimage,
    keyFeatures: [
      "Predictive analytics using historical data",
      "Real-time sales tracking",
      "Demand forecasting",
      "Dashboard for insights",
    ],
    howItWorks:
      "The model collects past sales and market data, trains regression models, and forecasts demand trends, helping businesses plan inventory and marketing.",
    demoLink: "https://crimetracke.netlify.app/",
  },
  {
    id: 3,
    title: "Image Recognition",
    description: "Detect objects and patterns in images using AI.",
    imageUrl: imgRecognation,
    keyFeatures: [
      "Smart object detection",
      "Real-time image analysis",
      "Context awareness",
      "Secure cloud storage integration",
    ],
    howItWorks:
      "An AI model trained on large datasets analyzes uploaded images, classifies objects, and returns confidence scores for detected categories.",
    demoLink: "https://crimetracke.netlify.app/",
  },
  {
    id: 4,
    title: "Sentiment Analysis",
    description: "Analyze customer feedback and social media posts.",
    imageUrl: sentimentimg,
    keyFeatures: [
      "Emotion detection",
      "Multi-language support",
      "Real-time feedback tracking",
      "Social media integration",
    ],
    howItWorks:
      "The system extracts text data from reviews or posts, runs it through NLP sentiment models, and classifies emotions such as positive, negative, or neutral.",
    demoLink: "https://crimetracke.netlify.app/",
  },
  {
    id: 5,
    title: "Voice Recognition",
    description: "Convert speech to text and enable voice commands.",
    imageUrl: voicerecognationimg,
    keyFeatures: [
      "Accurate speech-to-text",
      "Noise cancellation",
      "Voice authentication",
      "Multi-speaker recognition",
    ],
    howItWorks:
      "Using deep learning audio models, the system processes and transcribes speech in real-time, while identifying different speakers and accents.",
    demoLink: "https://crimetracke.netlify.app/",
  },
  {
    id: 6,
    title: "Medical Diagnosis",
    description: "Assist doctors by detecting diseases from scans.",
    imageUrl: medicalimg,
    keyFeatures: [
      "AI-powered image diagnostics",
      "Disease probability scoring",
      "HIPAA-compliant data handling",
      "Integration with hospital systems",
    ],
    howItWorks:
      "AI models trained on X-rays and MRIs detect early signs of diseases and assist doctors with diagnostic recommendations.",
    demoLink: "https://crimetracke.netlify.app/",
  },
];
