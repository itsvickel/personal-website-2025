import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import './main.css'
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<App page={'about'}/>} />
            <Route path="/work-experience" element={<App page={'workExperience'} />} />
            <Route path="/hobby" element={<App page={'hobby'} />} />
            <Route path="/contact" element={<App page={'contact'} />} />
          </Routes>
      </BrowserRouter> 
  </StrictMode>,
)
