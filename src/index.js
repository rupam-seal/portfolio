import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PAGES
import Home from './pages/HomePage';
import Posts from './pages/PostsPage';
import WorksPage from './pages/WorksPage';

// COMPONENTS
import Footer from './components/common/Footer';
import Topbar from './components/common/Topbar';
import Navigation from './components/common/Navigation';
import LiquidObject from './components/common/LiquidObject';

// CSS
import './assets/css/Index.css';
import './assets/css/common/Section.css';
import './assets/css/home/Hero.css';
import './assets/css/home/Skills.css';
import './assets/css//home/Works.css';
import './assets/css//home/Card.css';
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
    <BrowserRouter>
      <Topbar />
      <div className="body__container">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} exact />
          <Route path="/posts/:id" element={<Posts />} exact />
          <Route path="/works/:id" element={<WorksPage />} exact />
        </Routes>
        {/* Liquid Object */}
        <LiquidObject />
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
