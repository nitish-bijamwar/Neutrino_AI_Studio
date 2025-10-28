import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import vicebot from "../assets/vicebot.webp";
import genai from "../assets/genAi.jpg";

export default function AboutUs() {
  const navigate = useNavigate();

  const handleVisitOfficial = () => {
    window.open("https://neutrinotechsystems.com/#", "_blank");
  };

  return (
    <div className="bg-gradient-to-br from-[#05010A] via-[#0C0F1A] to-[#000000] text-white min-h-screen flex flex-col">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-6 bg-gradient-to-r from-blue-900/40 via-indigo-900/50 to-purple-900/40 backdrop-blur-md rounded-b-3xl shadow-xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          About <span className="text-orange-500">Neutrino AI Studio</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          At <span className="text-orange-400 font-semibold">Neutrino AI Studio</span>, 
          we blend innovation with purpose — building intelligent systems that redefine 
          automation, healthcare, and enterprise analytics with ethical and impactful AI.
        </p>
      </motion.header>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-16 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700"
        >
          <h2 className="text-3xl font-semibold mb-4 text-orange-400">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We drive transformative solutions by combining advanced AI, 
            cloud-native infrastructure, and domain expertise — 
            especially in health-tech and automation. Our goal is to empower people 
            with AI that augments human potential.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700"
        >
          <h2 className="text-3xl font-semibold mb-4 text-orange-400">
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To be globally recognized as a leader in next-generation AI — 
            creating intelligent systems that enable innovation, 
            sustainability, and human-centered progress.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-gradient-to-r from-[#111827] via-[#0b1120] to-[#1f2937] py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-orange-400"
        >
          Core Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation First",
              desc: "We constantly explore and adopt new models, frameworks, and tools to stay ahead in the AI landscape.",
            },
            {
              title: "Ethical AI",
              desc: "We prioritize fairness, accountability, and transparency — ensuring technology serves humanity responsibly.",
            },
            {
              title: "Partnership & Growth",
              desc: "We collaborate deeply with clients, viewing growth as a shared journey rooted in trust and innovation.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-gray-900 border border-gray-700 hover:border-orange-500 transition-all shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-orange-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
          What We’ve Delivered
        </h2>

        <div className="space-y-16">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <img
              src={vicebot}
              alt="AI Voice Bot"
              className="md:w-1/2 rounded-2xl shadow-2xl border border-gray-700"
            />
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-3 text-orange-400">
                AI Voice Bot for Healthcare
              </h3>
              <p className="text-gray-300 mb-3">
                Using NLP and ML, we built an intelligent AI voice bot that handles
                healthcare support queries with 90% accuracy and empathy.
              </p>
              <a
                href="https://neutrinotechsystems.com/ai-voice-bot-for-us-healthcare-customer-support/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 underline font-medium"
              >
                Learn More →
              </a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row-reverse items-center gap-8"
          >
            <img
              src={genai}
              alt="Generative AI"
              className="md:w-1/2 rounded-2xl shadow-2xl border border-gray-700"
            />
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-3 text-orange-400">
                Generative AI Services
              </h3>
              <p className="text-gray-300 mb-3">
                Our AI systems generate insights, predictions, and creative content
                that help enterprises evolve into data-driven powerhouses.
              </p>
              <a
                href="https://neutrinotechsystems.com/generative-ai-in-technology-services-the-next-big-disruption/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 underline font-medium"
              >
                Read the Article →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-12 mb-20 text-center bg-gradient-to-r from-orange-600 to-yellow-500 py-16 px-8 rounded-3xl shadow-2xl"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-black">
          Ready to Explore More?
        </h2>
        <p className="text-black mb-8 text-lg">
          Discover how we’re redefining AI innovation across industries.
        </p>
        <button
          onClick={handleVisitOfficial}
          className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-300"
        >
          Visit Our Official Site
        </button>
      </motion.section>
    </div>
  );
}
