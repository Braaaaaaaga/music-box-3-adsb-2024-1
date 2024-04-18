import App from './App';
import React from 'react';
import "./utils/globals.css";
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
); 