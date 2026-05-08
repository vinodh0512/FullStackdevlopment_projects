const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce_db')
    .then(() => console.log('MongoDB connected for E-commerce Backend 🛍️'))
    .catch(err => console.error('Connection error:', err));

// Product Schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    rating: { type: Number, default: 0 }
});

const Product = mongoose.model('Product', productSchema);

// --- API ROUTES ---

// GET: All Products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Add Product
app.post('/api/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Seed Initial Data
app.get('/api/seed', async (req, res) => {
    const products = [
        { name: 'Ultra Wireless Headset', price: 199.99, description: 'Premium sound quality with noise cancellation.', category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', rating: 4.5 },
        { name: 'Mechanical RGB Keyboard', price: 129.99, description: 'Satisfying clicks and customizable lighting.', category: 'Accessories', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80', rating: 4.8 },
        { name: 'Smart Fitness Watch', price: 249.99, description: 'Track your health and workouts in style.', category: 'Wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', rating: 4.2 }
    ];
    await Product.deleteMany({});
    await Product.insertMany(products);
    res.json({ message: 'Database seeded with sample products' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
