import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// this will render all the react stuff in the index.html file through <div id="root"></div>
