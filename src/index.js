import React from 'react';
import ReactDOM from 'react-dom/client';
// PAGES
import Home from './pages/Home';
// CSS
import './assets/css/Main.css';
import './assets/css/Font.css';
import './assets/css/Hero.css';
import './assets/css/Skills.css';
import './assets/css/Projects.css';
import './assets/css/About.css';
import './assets/css/Topbar.css';
import './assets/css/Navigation.css';
import './assets/css/Menu.css';
// Colors
import './assets/css/Colors.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
