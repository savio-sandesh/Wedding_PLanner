import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InspirationGallery from './pages/InspirationGallery';
import VendorSearch from './pages/VendorSearch';
import WeddingTools from './pages/WeddingTools';
import Blog from './pages/Blog';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inspiration" element={<InspirationGallery />} />
            <Route path="/vendors" element={<VendorSearch />} />
            <Route path="/tools" element={<WeddingTools />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
