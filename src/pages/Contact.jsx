import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6"; // ✅ added location icon
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await addDoc(collection(db, "contactMessages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      setStatus("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding message:", error);
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05010A] via-[#0C0F1A] to-[#000000] text-white py-16 px-4 flex flex-col items-center justify-center">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center"
      >
        Get In <span className="text-orange-500">Touch</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl gap-10">
        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 backdrop-blur-lg"
        >
          <h3 className="text-2xl font-semibold text-orange-400 mb-6 text-center">
            Drop Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-gray-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500 text-gray-900 font-semibold text-lg shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p
              className={`mt-4 text-center font-medium ${
                status.includes("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-semibold text-orange-400 mb-6">
            Connect With Us
          </h3>

          <div className="space-y-6 text-lg text-gray-300">
            <div>
              <div className="flex items-center gap-3 font-semibold text-white">
                <FaEnvelope className="text-orange-500 text-xl" />
                For Business Enquiries
              </div>
              <p className="ml-8 text-gray-400">
                sales@neutrinotechsystems.com
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 font-semibold text-white">
                <FaPhone className="text-orange-500 text-xl" />
                Contact Us
              </div>
              <p className="ml-8 text-gray-400">+1-201-409-4343</p>
            </div>

            <div>
              <div className="flex items-center gap-3 font-semibold text-white">
                <FaEnvelope className="text-orange-500 text-xl" />
                For Careers
              </div>
              <p className="ml-8 text-gray-400">
                careers@neutrinotechsystems.com
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h4 className="font-semibold text-orange-400 mb-4 flex items-center gap-2">
              <FaArrowRight className="text-orange-500" /> Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/company/neutrinotechsystems/",
                },
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/neutrinotechsystems/",
                },
                {
                  icon: <FaXTwitter />,
                  link: "https://twitter.com/neutrinotechsys",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/neutrinotechsystems/",
                },
                {
                  icon: <FaYoutube />,
                  link: "https://www.youtube.com/@neutrinotechsystems",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full text-gray-900 text-lg hover:scale-110 transform transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* EXPLORE MORE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-r from-[#111827] via-[#0b1120] to-[#1f2937] rounded-3xl p-10 md:p-16 shadow-2xl text-center border border-gray-800"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-400">
          People. Planet. Purpose. Neutrino.
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Join our mission-driven innovation and explore how we’re shaping the
          future with technology and purpose.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button
            onClick={() =>
              window.open("https://neutrinotechsystems.com/about-us/", "_blank")
            }
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition shadow-lg"
          >
            Who We Are <FaArrowRight />
          </button>
          <button
            onClick={() =>
              window.open("https://neutrinotechsystems.com/careers/", "_blank")
            }
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition shadow-lg"
          >
            Join Today <FaArrowRight />
          </button>
        </div>
      </motion.div>

      {/* 🌍 OUR LOCATIONS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 w-full max-w-6xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-700"
      >
        <h2 className="text-4xl font-extrabold mb-10 text-orange-400 text-center">
          Our Locations
        </h2>

        <div className="space-y-10">
          {[
            {
              country: "USA",
              address:
                "434 Ridgetop Bend, Cedar Park, TX - 78613, United States.",
            },
            {
              country: "India",
              address:
                "A2, BramhaCorp Business Park, 27th Floor, Wadgaon Sheri, Pune - 14, India.",
            },
            {
              country: "Costa Rica",
              address:
                "San Jose, Montes De Oca, San Pedro, Sigma Business Center, Torre A, Costa Rica.",
            },
          ].map((loc, i) => (
            <div key={i} className="border-b border-orange-500 pb-4">
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-2">
                <FaLocationDot className="text-orange-500 text-2xl" />{" "}
                {loc.country}
              </h3>
              <p className="text-gray-300 text-lg ml-8">{loc.address}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
