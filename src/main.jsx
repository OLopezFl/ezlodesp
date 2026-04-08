import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

const baseUrl = import.meta.env.BASE_URL;
document.documentElement.style.setProperty('--img-lobby', `url("${baseUrl}images/lobby-main.jpg")`);
document.documentElement.style.setProperty('--img-cubes', `url("${baseUrl}images/cubes-bg.jpg")`);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
