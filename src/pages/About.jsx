import React from "react";
import { motion } from "framer-motion";
import vicebot from "../assets/vicebot.webp";
import genai from "../assets/genAi.jpg";

export default function AboutUs() {
  const handleVisitOfficial = () => {
    window.open("https://neutrinotechsystems.com/#", "_blank");
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-100 rounded-b-3xl shadow-md"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
          About <span className="text-purple-600">Neutrino AI Studio</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          At <span className="text-blue-700 font-semibold">Neutrino AI Studio</span>, 
          we merge innovation with purpose — building intelligent systems that redefine 
          automation, healthcare, and enterprise analytics with impactful AI.
        </p>
      </motion.header>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-16 grid md:grid-cols-2 gap-12">
        {[
          {
            title: "Our Mission",
            color: "from-purple-100 to-blue-50",
            text: "We drive transformative solutions by combining advanced AI, cloud-native infrastructure, and domain expertise — empowering people with AI that augments human potential.",
          },
          {
            title: "Our Vision",
            color: "from-blue-100 to-purple-50",
            text: "To be globally recognized as a leader in next-generation AI — creating intelligent systems that enable innovation, sustainability, and human-centered progress.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl shadow-lg border border-gray-200`}
          >
            <h2 className="text-3xl font-semibold mb-4 text-purple-700">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-purple-700"
        >
          Core Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation First",
              desc: "We constantly explore and adopt new frameworks and models to stay ahead in the AI landscape.",
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
              className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-purple-400 transition-all shadow-md"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
          What We’ve Delivered
        </h2>

        <div className="space-y-16">
          {[
            {
              title: "AI Voice Bot for Healthcare",
              img: vicebot,
              desc: "Using NLP and ML, we built an intelligent AI voice bot that handles healthcare support queries with 90% accuracy and empathy.",
              link: "https://neutrinotechsystems.com/ai-voice-bot-for-us-healthcare-customer-support/",
              reverse: false,
            },
            {
              title: "Generative AI Services",
              img: genai,
              desc: "Our AI systems generate insights, predictions, and creative content that help enterprises evolve into data-driven powerhouses.",
              link: "https://neutrinotechsystems.com/generative-ai-in-technology-services-the-next-big-disruption/",
              reverse: true,
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row ${
                project.reverse ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="md:w-1/2 rounded-2xl shadow-xl border border-gray-200"
              />
              <div className="md:w-1/2">
                <h3 className="text-3xl font-semibold mb-3 text-blue-700">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-3">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline font-medium"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-12 mb-20 text-center bg-gradient-to-r from-purple-600 to-blue-500 py-16 px-8 rounded-3xl shadow-2xl text-white"
      >
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to Explore More?
        </h2>
        <p className="mb-8 text-lg">
          Discover how we’re redefining AI innovation across industries.
        </p>
        <button
          onClick={handleVisitOfficial}
          className="bg-white hover:bg-gray-100 text-purple-700 font-bold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-300"
        >
          Visit Our Official Site
        </button>
      </motion.section>
    </div>
  );
}
