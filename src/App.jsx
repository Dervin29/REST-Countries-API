import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsSection from './components/CardsSection';
import CountryDetail from './components/CountryDetail ';
import Navbar from './components/Navbar';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div className='min-h-screen'>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<CardsSection />} />
            <Route path="/country/:name" element={<CountryDetail />} />
          </Routes>
        </Router>
      </div>
    </DarkModeProvider>
  );
}

export default App;
