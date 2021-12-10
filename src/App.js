import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Like from './pages/Like';
import Panier from './pages/Panier';
import Produits from './pages/Produits';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/like" element={<Like />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/produits" element={<Produits />} />
      </Routes>
    </div>
  );
};

export default App;