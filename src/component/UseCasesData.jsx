import obserImage from "../assets/OIP.webp"
import chatbotimage from "../assets/vicebot.webp";
import salesforcastingimage from "../assets/AI-for-sales-forecasting.webp";
import dicom from "../assets/dicom.webp"
import imgRecognation from "../assets/image-recognation.jpg";
import testingimg from "../assets/testing.webp";
import sentimentimg from "../assets/sentiment.jpg";
import voicerecognationimg from "../assets/Voice-Recognition-1.jpg";
import medicalimg from "../assets/medical.jpg";
import demoVideo from "../assets/Observability Demo 1.mp4";

export const useCasesData = [
   {
    id: 1,
    title: "Observability",
    description: "An AI-driven observability platform that automates log analysis, RCA, and insight generation.",
    imageUrl: obserImage,
    keyFeatures: [
      "24/7 automated customer service",
      "Multilingual support",
      "Context-aware conversations",
      "Integration with CRM tools",
    ],
    howItWorks:
      "Use case — Automated RCA from Application Log Data System detects anomalies, filters logs, and generates AI-driven RCA with solutions.",
    demoLink: "https://observability.neutrino-ai.com/",
    videoLink: demoVideo,
  },
  {
    id: 7,
    title: "Private AI Chatbot",
    description: "A private AI chatbot is a secure, personalized assistant that protects data while delivering intelligent conversations.",
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
    videoUrl: demoVideo,
  },
  {
    id: 2,
    title: "LMS",
    description: "A Learning Management System (LMS) is a platform for creating, delivering, and tracking online learning and training.",
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
    title: "Interview chat Bot",
    description: "An AI tool that automates candidate screening and interview interactions.",
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
    title: "Prior Authorization",
    description: "A process that verifies insurance approval before medical services are provided.",
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
    id: 8,
    title: "Testing AI Automation",
    description: "The use of AI to streamline and enhance software testing processes.",
    imageUrl: testingimg,
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
   {
    id: 9,
    title: "DICOM",
    description: "DICOM is a standard for storing, transmitting, and sharing medical imaging data across healthcare systems.",
    imageUrl: dicom,
    keyFeatures: [
      "24/7 automated customer service",
      "Multilingual support",
      "Context-aware conversations",
      "Integration with CRM tools",
    ],
    howItWorks:
      "The chatbot uses NLP models to understand user queries, fetch responses from a knowledge base, and continuously learn from interactions to improve response accuracy.",
    demoLink: "https://crimetracke.netlify.app/",
    videoUrl: demoVideo,
  },
  {
    id: 5,
    title: "SDLC",
    description: "The structured process of planning, developing, testing, and deploying software.",
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
    title: "Pateint 360",
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
