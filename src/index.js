import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PAGES
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';

// COMPONENTS
import Footer from './components/common/Footer';
import Topbar from './components/common/Topbar';

// CSS
import './assets/css/Index.css';
import './assets/css/common/Section.css';
import './assets/css/HomeHero.css';
import './assets/css/HomeSkills.css';
import './assets/css//HomeWorks.css';
import './assets/css/WorkProject.css';
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
          <Route path="/" element={<HomePage />} exact />
          <Route path="/works/:id" element={<WorksPage />} exact />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
