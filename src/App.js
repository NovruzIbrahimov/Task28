import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatsOn from './pages/WhatsOn';
import News from './pages/News';
import ShortCodes from './pages/ShortCodes';
import Contact from './pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatsOn" element={<WhatsOn />} />
        <Route path="/news" element={<News />} />
        <Route path="/shortCodes" element={<ShortCodes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
