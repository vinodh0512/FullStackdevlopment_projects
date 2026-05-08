import React from 'react';

const About = () => {
  return (
    <div className="about-page fade-in">
      <header className="page-header">
        <h1>About <span>Us</span></h1>
        <p>The story behind LuminaBlog and our mission to inspire.</p>
      </header>

      <section className="about-content">
        <div className="about-grid">
          <div className="about-image glass">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" />
          </div>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Founded in 2024, LuminaBlog started as a small project to document the rapid changes in the tech world. What began as a personal journal has grown into a community of designers, developers, and thinkers.</p>
            <p>We believe that technology should be accessible, beautiful, and purposeful. Our goal is to provide high-quality content that not only informs but also sparks creativity.</p>
            
            <div className="stats">
              <div className="stat-item">
                <h3>50K+</h3>
                <span>Monthly Readers</span>
              </div>
              <div className="stat-item">
                <h3>200+</h3>
                <span>Published Articles</span>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <span>Expert Contributors</span>
              </div>
            </div>
          </div>
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

        .about-content {
          padding: 4rem 0;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .about-image {
          padding: 1rem;
          height: 500px;
        }
        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
        .about-text h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .about-text p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }
        .stat-item h3 {
          font-size: 2rem;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stat-item span {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-image {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
