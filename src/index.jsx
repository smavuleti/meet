import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

atatus.config('3ddf482769aa4c478fbcea82502a68a4').install();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
//atatus.notify(new Error('Test Atatus Setup'));

serviceWorkerRegistration.register();