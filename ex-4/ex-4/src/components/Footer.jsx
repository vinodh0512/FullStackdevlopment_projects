import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>Lumina<span>Blog</span></h3>
          <p>Sharing thoughts on technology, design, and future trends.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Social</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 LuminaBlog. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          margin-top: 5rem;
          padding: 4rem 0 2rem;
          background: rgba(0,0,0,0.3);
          border-top: 1px solid var(--glass-border);
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }
        .footer-info h3 {
          margin-bottom: 1rem;
        }
        .footer-info h3 span {
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .footer-info p {
          color: var(--text-secondary);
          max-width: 300px;
        }
        .footer-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .footer-links h4 {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .footer-links ul {
          list-style: none;
        }
        .footer-links li {
          color: var(--text-secondary);
          margin-bottom: 0.8rem;
          cursor: pointer;
          transition: var(--transition);
        }
        .footer-links li:hover {
          color: var(--text-primary);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-info p {
            margin: 0 auto;
          }
          .footer-links {
            justify-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
