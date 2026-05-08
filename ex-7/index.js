const express = require('express');
const app = express();
const PORT = 5000;

// Middleware: JSON Parser
app.use(express.json());

// Custom Middleware: Request Logger
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
    next();
};

// Custom Middleware: Basic Validation for POST/PUT
const validateProduct = (req, res, next) => {
    const { name, price, stock } = req.body;
    if (req.method === 'POST' || req.method === 'PUT') {
        if (!name || price === undefined || stock === undefined) {
            return res.status(400).json({ 
                success: false, 
                error: "Missing required fields: name, price, and stock are mandatory." 
            });
        }
    }
    next();
};

app.use(requestLogger);

// Mock Inventory Database
let inventory = [
    { id: 1, name: "Mechanical Keyboard", price: 89.99, stock: 45, rating: 4.8 },
    { id: 2, name: "Gaming Mouse", price: 49.99, stock: 120, rating: 4.5 },
    { id: 3, name: "Ultrawide Monitor", price: 450.00, stock: 15, rating: 4.9 }
];

// --- ROUTES ---

// 1. GET: Home / Status
app.get('/', (req, res) => {
    res.json({
        message: "Inventory Management API is Live",
        endpoints: {
            getAllItems: "GET /api/inventory",
            getItem: "GET /api/inventory/:id",
            addItem: "POST /api/inventory",
            updateItem: "PUT /api/inventory/:id",
            deleteItem: "DELETE /api/inventory/:id"
        }
    });
});

// 2. GET: List all items
app.get('/api/inventory', (req, res) => {
    res.status(200).json({
        success: true,
        count: inventory.length,
        data: inventory
    });
});

// 3. GET: Single item by ID
app.get('/api/inventory/:id', (req, res) => {
    const item = inventory.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ success: false, error: "Item not found" });
    
    res.status(200).json({
        success: true,
        data: item
    });
});

// 4. POST: Add new item
app.post('/api/inventory', validateProduct, (req, res) => {
    const { name, price, stock, rating } = req.body;
    
    const newItem = {
        id: inventory.length > 0 ? Math.max(...inventory.map(i => i.id)) + 1 : 1,
        name,
        price,
        stock,
        rating: rating || 0
    };

    inventory.push(newItem);
    res.status(201).json({
        success: true,
        message: "Product added to inventory",
        data: newItem
    });
});

// 5. PUT: Update existing item
app.put('/api/inventory/:id', validateProduct, (req, res) => {
    const itemIndex = inventory.findIndex(i => i.id === parseInt(req.params.id));
    
    if (itemIndex === -1) return res.status(404).json({ success: false, error: "Item not found" });

    const updatedItem = {
        ...inventory[itemIndex],
        ...req.body,
        id: inventory[itemIndex].id // Preserve original ID
    };

    inventory[itemIndex] = updatedItem;
    res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: updatedItem
    });
});

// 6. DELETE: Remove item
app.delete('/api/inventory/:id', (req, res) => {
    const itemIndex = inventory.findIndex(i => i.id === parseInt(req.params.id));
    
    if (itemIndex === -1) return res.status(404).json({ success: false, error: "Item not found" });

    const deletedItem = inventory.splice(itemIndex, 1);
    res.status(200).json({
        success: true,
        message: "Product removed from inventory",
        data: deletedItem[0]
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n📦 Inventory REST API running at http://localhost:${PORT}`);
    console.log(`🛠️ Middlewares: Logger and Validator active\n`);
});
