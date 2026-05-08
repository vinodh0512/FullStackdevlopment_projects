import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart, Star, Eye, Tag, Smartphone, Headphones, Watch } from 'lucide-react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Trying to fetch from local backend
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Backend not reachable, using mock data", error);
      // Fallback mock data if backend isn't running
      setProducts([
        { _id: '1', name: 'Ultra Wireless Headset', price: 199.99, description: 'Premium sound quality with noise cancellation.', category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', rating: 4.5 },
        { _id: '2', name: 'Mechanical RGB Keyboard', price: 129.99, description: 'Satisfying clicks and customizable lighting.', category: 'Accessories', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80', rating: 4.8 },
        { _id: '3', name: 'Smart Fitness Watch', price: 249.99, description: 'Track your health and workouts in style.', category: 'Wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', rating: 4.2 },
        { _id: '4', name: 'Pro Gaming Mouse', price: 79.99, description: 'Ergonomic design for long gaming sessions.', category: 'Accessories', image: 'https://images.unsplash.com/photo-1527814050087-37a3c71cc0ad?auto=format&fit=crop&w=800&q=80', rating: 4.6 }
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
          <div className="nav-icons">
            <div className="cart-icon">
              <ShoppingCart size={24} />
              <span className="cart-count">3</span>
            </div>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>Modern Tech <span>Essentials</span></h1>
          <p>Curated collection of the finest gadgets and accessories for your digital lifestyle.</p>
        </div>
      </header>

      <main className="container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <div className="categories">
            <span className="active">All</span>
            <span>Electronics</span>
            <span>Accessories</span>
            <span>Wearables</span>
          </div>
        </div>

        {loading ? (
          <div className="loader">Loading products...</div>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <div key={product._id} className="product-card">
                <div className="product-image" style={{backgroundImage: `url(${product.image})`}}>
                  <div className="overlay">
                    <button className="icon-btn"><Eye size={20} /></button>
                    <button className="icon-btn"><Tag size={20} /></button>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="rating">
                    <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    <span>{product.rating}</span>
                  </div>
                  <div className="footer">
                    <span className="price">${product.price}</span>
                    <button className="add-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="store-footer">
        <div className="container">
          <p>&copy; 2026 LuminaStore Experiment. Built with MERN Stack.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
