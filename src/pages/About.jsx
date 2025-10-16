import React from "react";
import { useNavigate } from "react-router-dom";
import vicebot from "../assets/vicebot.jpg";
import genai from "../assets/genAi.jpg";
import Navbar from "../component/Navbar";

export default function AboutUs() {
  const navigate = useNavigate();

  const handleVisitOfficial = () => {
    window.open("https://neutrinotechsystems.com/#", "_blank");
  };

  return (

    
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
       {/* Navbar */}
      <Navbar />
      {/* Hero / Header */}
      <header className="bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-900 py-16 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4">About Neutrino AI Studio</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          At Neutrino AI Studio (Neutrino Tech Systems), we believe in blending innovation with purpose. Our mission is to harness AI, automation, and data-driven intelligence to empower businesses — especially in healthcare, analytics, and enterprise automation.
        </p>
      </header>

      {/* Mission & Vision */}
      <section className="py-12 px-8 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            We drive transformative solutions by combining advanced AI, cloud-native infrastructure, and domain expertise — especially in health-tech and automation. We envision a world where intelligent agents and systems enhance human capabilities instead of replacing them.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To be recognized globally as a partner for next-generation AI solutions — enabling clients to leapfrog legacy systems, innovate faster, and deliver better outcomes for end users and stakeholders.
          </p>
        </div>
      </section>

      {/* Core Values / Pillars */}
      <section className="bg-gray-800 py-16 px-8 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Innovation First</h3>
            <p className="text-gray-300">We constantly explore and adopt new methodologies, models, and thinking to stay ahead.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Ethical AI</h3>
            <p className="text-gray-300">We build systems with fairness, transparency, accountability, and user privacy in mind.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Partnership & Growth</h3>
            <p className="text-gray-300">We view clients as long-term partners, and growth as a shared journey rather than a transaction.</p>
          </div>
        </div>
      </section>

      {/* Experience / Achievements */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-10">What We’ve Delivered</h2>
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <img
                src={vicebot}
                alt="AI Voice Bot"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3">AI Voice Bot for Healthcare</h3>
              <p className="text-gray-300 leading-relaxed">
                Using natural language processing and machine learning, we built an AI Voice Bot that manages high call volumes in U.S. healthcare, achieving over 90% query resolution.  
                <br />
                <a
                  href="https://neutrinotechsystems.com/ai-voice-bot-for-us-healthcare-customer-support/"
                  className="text-orange-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="md:w-1/2">
              <img
                src={genai}
                alt="Generative AI"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3">Generative AI Services</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team designs AI systems that generate content, images, predictions, and insights that scale with your business goals.  
                <br />
                <a
                  href="https://neutrinotechsystems.com/generative-ai-in-technology-services-the-next-big-disruption/"
                  className="text-orange-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the Article
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Redirect to Official */}
      <section className="py-16 px-8 md:px-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Explore More?</h2>
        <button
          onClick={handleVisitOfficial}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Visit Our Official Site
        </button>
      </section>
    </div>
  );
}
