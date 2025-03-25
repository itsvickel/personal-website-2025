import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import './main.css'
import { BrowserRouter, Routes, Route } from "react-router";

import { Analytics } from '@vercel/analytics/next';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<App page={''}/>} />
            <Route path="/about" element={<App page={'about'}/>} />
            <Route path="/resume" element={<App page={'resume'} />} />
            <Route path="/portfolio" element={<App page={'portfolio'} />} />
            <Route path="/contact" element={<App page={'contact'} />} />
          </Routes>            
            <Analytics />
      </BrowserRouter> 
  </StrictMode>,
)
