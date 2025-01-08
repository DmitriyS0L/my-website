import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './Pages/Home/Home';
import { Authentication } from './components/SignModal/Authentication';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Authentication />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet" element={<h1>Wallet</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
