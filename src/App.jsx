
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import HomeContent from "./component/Home";
import UseCases from "./component/useCases";
import AboutUs from "./pages/About";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import ForgetPassword from"./pages/ForgetPassword";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      {/* Main wrapper with full black background */}
      <div className="min-h-screen flex flex-col bg-[#0e0e11] text-white">
        {/* Navbar - fixed on top */}
        <div className="fixed top-0 left-0 right-0 z-20">
          <Navbar
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
            setSearchTerm={setSearchTerm}
          />
        </div>

        {/* Main content section */}
        <div className="flex flex-1 pt-20 pb-20 relative bg-[#0e0e11]">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          {/* Scrollable main content */}
          <main
            className={`flex-1 p-10 overflow-y-auto bg-[#0e0e11] transition-all duration-300 ${isSidebarOpen ? "filter blur-sm" : ""
              }`}
          >
            <Routes>
              <Route path="/" element={<HomeContent />} />
              <Route
                path="/use-cases"
                element={<UseCases searchTerm={searchTerm} />}
              />
              <Route
                path="/about"
                element={<AboutUs />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route 
              path="/forgot-password" 
              element={<ForgetPassword />}
             />
              <Route path="/contact"
               element={<Contact />}
                />

            </Routes>
          </main>
        </div>

        {/* Footer - fixed color */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
