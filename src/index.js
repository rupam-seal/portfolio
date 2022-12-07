import React from 'react';
import ReactDOM from 'react-dom/client';
// PAGES
import Home from './pages/Home';
import Topbar from './components/common/Topbar';
// CSS
import './assets/css/Index.css';
import './assets/css/Hero.css';
import './assets/css/Skills.css';
import './assets/css/Projects.css';
import './assets/css/Contact.css';
import './assets/css/Topbar.css';
import './assets/css/Navigation.css';
import './assets/css/Menu.css';
import './assets/css/LiquidObject.css';
// Colors
import './assets/css/Colors.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topbar />
    {/* HERO SECTION */}
    <Home />
  </React.StrictMode>
);
