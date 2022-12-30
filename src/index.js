import React from 'react';
import ReactDOM from 'react-dom/client';
// PAGES
import Home from './pages/Home';
import Footer from './components/common/Footer';
import Topbar from './components/common/Topbar';
// CSS
import './assets/css/Index.css';
import './assets/css/common/Section.css';
import './assets/css/home/Hero.css';
import './assets/css/home/Skills.css';
import './assets/css//home/Projects.css';
import './assets/css/common/Footer.css';
import './assets/css/common/Topbar.css';
import './assets/css/common/Navigation.css';
import './assets/css/common/Menu.css';
import './assets/css/common/LiquidObject.css';
// Colors
import './assets/css/common/Colors.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topbar />
    {/* Home */}
    <div className="body__container">
      <Home />
      <Footer />
    </div>
  </React.StrictMode>
);
