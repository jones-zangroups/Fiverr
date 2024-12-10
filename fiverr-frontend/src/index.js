//fiverr-frontend/ src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App'; // Ensure this path is correct
import './styles.css'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);