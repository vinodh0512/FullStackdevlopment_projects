import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart, Star, Eye, Heart, Plus } from 'lucide-react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Backend not reachable, using mock data", error);
      setProducts([
        { _id: '1', name: 'Ultra Wireless Headset', price: 199.99, description: 'Premium sound quality with noise cancellation.', category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', rating: 4.8 },
        { _id: '2', name: 'Mechanical RGB Keyboard', price: 129.99, description: 'Satisfying clicks and customizable lighting.', category: 'Accessories', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80', rating: 4.9 },
        { _id: '3', name: 'Smart Fitness Watch', price: 249.99, description: 'Track your health and workouts in style.', category: 'Wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', rating: 4.5 },
        { _id: '4', name: 'Pro Gaming Mouse', price: 79.99, description: 'Ergonomic design for long gaming sessions.', category: 'Accessories', image: 'https://images.unsplash.com/photo-1527814050087-37a3c71cc0ad?auto=format&fit=crop&w=800&q=80', rating: 4.7 }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ecommerce-app">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">Lumina<span>Store</span></div>
          <div className="nav-actions">
            <div className="cart-icon">
              <ShoppingCart size={22} />
              <span className="cart-count">2</span>
            </div>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>Next-Gen Tech <br /><span>for the Modern World</span></h1>
          <p>Experience the intersection of high-performance engineering and sophisticated design.</p>
        </div>
      </header>

      <main className="container">
        <div className="section-header">
          <h2>Our Collection</h2>
          <div className="categories">
            <span className="active">All</span>
            <span>Audio</span>
            <span>Input</span>
            <span>Smart Devices</span>
          </div>
        </div>

        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
            <p>Gathering the best for you...</p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <div key={product._id} className="product-card">
                <div className="product-image-container">
                  <div className="product-image" style={{backgroundImage: `url(${product.image})`}}></div>
                  <div className="product-badges">
                    <span className="badge">New Arrival</span>
                  </div>
                  <div className="overlay-actions">
                    <button className="action-btn"><Heart size={18} /></button>
                    <button className="action-btn"><Eye size={18} /></button>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category-tag">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="rating-container">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "#f59e0b" : "transparent"} color="#f59e0b" />
                      ))}
                    </div>
                    <span className="rating-value">{product.rating}</span>
                  </div>
                  <div className="product-footer">
                    <span className="price-tag">${product.price}</span>
                    <button className="buy-btn">
                      <Plus size={18} /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Lumina<span>Store</span></div>
            <p>Elevating your daily tech experience since 2024.</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 LuminaStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
