import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Navbar from './Components/Header/Navbar';
import CopyRight from './Components/Footer/CopyRight';
import MainFooter from './Components/Footer/MainFooter';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using correct API

root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Navbar/>
      <App />
      <MainFooter/>
      <CopyRight/>
    </BrowserRouter>
  </React.StrictMode>
);
