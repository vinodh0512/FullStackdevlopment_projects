const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Successfully connected to MongoDB 🍃'))
    .catch(err => console.error('MongoDB connection error ❌:', err));

// Product Schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

// --- CRUD ROUTES ---

// 1. CREATE: Add a new product
app.post('/api/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json({ success: true, data: savedProduct });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// 2. READ ALL: Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: products.length, data: products });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 3. READ ONE: Get product by ID
app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ success: false, error: 'Product not found' });
        res.status(200).json({ success: true, data: product });
    } catch (err) {
        res.status(400).json({ success: false, error: 'Invalid ID format' });
    }
});

// 4. UPDATE: Update product by ID
app.put('/api/products/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        if (!updatedProduct) return res.status(404).json({ success: false, error: 'Product not found' });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// 5. DELETE: Remove product by ID
app.delete('/api/products/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ success: false, error: 'Product not found' });
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n🚀 Product Management Server running on http://localhost:${PORT}`);
    console.log(`📦 MongoDB Status: Connecting...`);
});
