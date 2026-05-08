import React from 'react';

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <div className="logo" onClick={() => setActivePage('home')}>
          Lumina<span>Blog</span>
        </div>
        <ul className="nav-links">
          <li className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>Home</li>
          <li className={activePage === 'about' ? 'active' : ''} onClick={() => setActivePage('about')}>About</li>
          <li className={activePage === 'contact' ? 'active' : ''} onClick={() => setActivePage('contact')}>Contact</li>
        </ul>
        <button className="cta-button">Subscribe</button>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1100px;
          z-index: 1000;
          padding: 1rem 2rem;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          cursor: pointer;
          color: var(--text-primary);
        }
        .logo span {
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .nav-links li {
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition);
          position: relative;
        }
        .nav-links li:hover, .nav-links li.active {
          color: var(--text-primary);
        }
        .nav-links li.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--gradient-1);
        }
        .cta-button {
          background: var(--gradient-1);
          color: white;
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
          transition: var(--transition);
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.5);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
