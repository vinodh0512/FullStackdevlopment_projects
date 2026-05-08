import React from 'react';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Explore how AI and edge computing are reshaping the landscape of modern web development.",
      category: "Technology",
      date: "Oct 12, 2026",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Designing for the Next Generation",
      excerpt: "Why minimal aesthetics and micro-interactions are becoming the standard for Gen Z interfaces.",
      category: "Design",
      date: "Oct 15, 2026",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Sustainable Tech: A Green Future",
      excerpt: "How hardware and software optimization can lead to a more sustainable digital ecosystem.",
      category: "Environment",
      date: "Oct 18, 2026",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="home-page fade-in">
      <header className="hero">
        <div className="hero-content">
          <h1>Insights on the <span>Digital Frontier</span></h1>
          <p>A collection of thoughts on technology, design, and everything in between.</p>
        </div>
      </header>

      <section className="featured-posts">
        <div className="section-title">
          <h2>Latest Stories</h2>
          <div className="line"></div>
        </div>
        <div className="posts-grid">
          {posts.map(post => (
            <div key={post.id} className="post-card glass">
              <div className="post-image" style={{backgroundImage: `url(${post.image})`}}>
                <span className="category">{post.category}</span>
              </div>
              <div className="post-info">
                <span className="date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="read-more">Read More &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .hero {
          padding: 12rem 0 6rem;
          text-align: center;
          background: radial-gradient(circle at top, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
        }
        .hero-content h1 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .hero-content h1 span {
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-content p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .featured-posts {
          padding: 4rem 0;
        }
        .section-title {
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .section-title h2 {
          font-size: 2rem;
          white-space: nowrap;
        }
        .section-title .line {
          height: 1px;
          background: var(--glass-border);
          flex-grow: 1;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
        }
        .post-card {
          overflow: hidden;
          transition: var(--transition);
        }
        .post-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-color);
        }
        .post-image {
          height: 220px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--accent-color);
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .post-info {
          padding: 2rem;
        }
        .date {
          color: var(--text-secondary);
          font-size: 0.85rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .post-info h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .post-info p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        .read-more {
          background: transparent;
          color: var(--accent-color);
          font-weight: 600;
          font-size: 1rem;
          transition: var(--transition);
        }
        .read-more:hover {
          color: var(--accent-hover);
          padding-left: 5px;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .posts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
