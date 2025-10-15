import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar"; // 🆕 Import Sidebar
import "./App.css";

function App() {
  return (
    <Router>
      {/* Full-page layout container */}
      <div className="flex flex-col h-screen bg-[#0e0e11] text-white">
        
        {/* Top Navbar */}
        <Navbar />

        {/* Middle section with sidebar + main content */}
        <div className="flex flex-1">
          {/* Left Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <main className="flex-1 p-10 overflow-y-auto">
            <h1 className="text-5xl font-extrabold text-center mb-6">
              <span className="text-orange-500">Neutrino</span>Vation
            </h1>
            <p className="text-center text-xl mb-8">
              Discover AI-powered solutions for your business needs
            </p>

            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search use cases"
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md w-72 focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md">
                Search
              </button>
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold">
                Explore Use Cases
              </button>
            </div>
          </main>
        </div>

        {/* Footer at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
