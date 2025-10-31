import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import HomeContent from "./component/Home";
import UseCases from "./component/useCases";
import AboutUs from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import ForgetPassword from "./pages/ForgetPassword";
import UseCaseDetails from "./component/UseCaseDetails";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // 👈 open by default
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div className="min-h-screen flex bg-white text-gray-900 transition-all duration-300">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Main content adjusts based on sidebar */}
        <main
          className={`flex-1 transition-all duration-300 p-6 ${
            isSidebarOpen ? "ml-64" : "ml-16"
          }`}
        >

           {/* ✅ Navbar at the top of main area */}
          <div className="mb-6">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<UseCases />} />
            <Route
              path="/use-cases"
              element={<UseCases searchTerm={searchTerm} />}
            />
             <Route path="/HomeContent" element={<HomeContent />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/usecase/details/:id" element={<UseCaseDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
