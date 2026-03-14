import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import TechStack from './pages/TechStack';

const pages = ['About', 'Resume', 'Tech Stack', 'Portfolio', 'Blog', 'Contact', 'Gallery'];

export default function App() {
  const [activePage, setActivePage] = useState(() => 
    window.innerWidth <= 768 ? 'Profile' : 'About'
  );

  useEffect(() => {
    const handleResize = () => {
      // Sync state when crossing the mobile/desktop boundary
      if (window.innerWidth > 768 && activePage === 'Profile') {
        setActivePage('About');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activePage]);


  const renderPage = () => {
    switch (activePage) {
      case 'Profile': return <div className="mobile-profile-view"><Sidebar /></div>;
      case 'About': return <About />;
      case 'Resume': return <Resume />;
      case 'Portfolio': return <Portfolio />;
      case 'Blog': return <Blog />;
      case 'Contact': return <Contact />;
      case 'Gallery': return <Gallery />;
      case 'Tech Stack': return <TechStack />;
      default: return <About />;
    }
  };

  return (
    <div className={`app-layout ${activePage === 'Profile' ? 'profile-active' : ''}`}>
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="main-content">
        <nav className="nav">
          {pages.map((page) => (
            <button
              key={page}
              className={`nav-link${activePage === page ? ' active' : ''}`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </button>
          ))}
        </nav>
        <div className="page-wrapper">
          {renderPage()}
        </div>
        <footer className="footer">
          © 2026 Nafiz Haider Chowdhury | All Rights Reserved
        </footer>
      </div>
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

