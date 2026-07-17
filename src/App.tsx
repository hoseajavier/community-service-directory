import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Directory } from "./pages/Directory";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] antialiased flex flex-col font-sans">
        <Navbar />

        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/directory/:id" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
