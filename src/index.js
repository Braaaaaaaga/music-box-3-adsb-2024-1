import App from './App';
import React from 'react';
import "./utils/globals.css";
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home';
import Musicas from "./pages/musicas/Musicas";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Musicas />
  </React.StrictMode>
); 