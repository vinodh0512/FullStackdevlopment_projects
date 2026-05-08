import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <header className="page-header">
        <h1>Get in <span>Touch</span></h1>
        <p>Have a question or want to contribute? We'd love to hear from you.</p>
      </header>

      <section className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card glass">
              <h3>Contact Information</h3>
              <div className="info-item">
                <span className="icon">📍</span>
                <p>123 Design Street, Silicon Valley, CA</p>
              </div>
              <div className="info-item">
                <span className="icon">📧</span>
                <p>hello@luminablog.com</p>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <p>+1 (555) 000-0000</p>
              </div>
            </div>
            
            <div className="social-links">
              <div className="social-icon glass">Tw</div>
              <div className="social-icon glass">Li</div>
              <div className="social-icon glass">Gh</div>
              <div className="social-icon glass">In</div>
            </div>
          </div>

          <form className="contact-form glass">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .page-header {
          padding: 12rem 0 4rem;
          text-align: center;
        }
        .page-header h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }
        .page-header h1 span {
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .page-header p {
          color: var(--text-secondary);
          font-size: 1.2rem;
        }

        .contact-container {
          padding: 4rem 0;
          max-width: 1000px;
          margin: 0 auto;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
        }
        .info-card {
          padding: 2.5rem;
          margin-bottom: 2rem;
        }
        .info-card h3 {
          margin-bottom: 2rem;
          font-size: 1.5rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .info-item p {
          color: var(--text-secondary);
        }
        .icon {
          font-size: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }
        .social-icon:hover {
          background: var(--accent-color);
          transform: translateY(-5px);
        }

        .contact-form {
          padding: 3rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          font-family: inherit;
          transition: var(--transition);
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-color);
          background: rgba(255,255,255,0.08);
          outline: none;
        }
        .submit-btn {
          width: 100%;
          background: var(--gradient-1);
          color: white;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          margin-top: 1rem;
          transition: var(--transition);
        }
        .submit-btn:hover {
          opacity: 0.9;
          transform: scale(0.98);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
