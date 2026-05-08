const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mock database
let users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" }
];

// GET Method: Home route
app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: sans-serif; padding: 2rem; background: #f4f4f9; height: 100vh;">
            <h1 style="color: #333;">Node.js HTTP Server</h1>
            <p>Status: <span style="color: green; font-weight: bold;">Online</span></p>
            <div style="margin-top: 2rem;">
                <a href="/users" style="padding: 0.5rem 1rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 4px;">View All Users</a>
            </div>
            <div style="margin-top: 2rem; border-top: 1px solid #ccc; padding-top: 1rem;">
                <h3>API Endpoints:</h3>
                <ul>
                    <li><code>GET /users</code> - Fetch all user details</li>
                    <li><code>POST /users</code> - Add new user (requires JSON body)</li>
                </ul>
            </div>
        </div>
    `);
});

// GET Method: Fetch all users
app.get('/users', (req, res) => {
    console.log('GET /users request received');
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
});

// POST Method: Add new user
app.post('/users', (req, res) => {
    const { name, email, role } = req.body;

    console.log('POST /users request received:', req.body);

    // Basic validation
    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Please provide both name and email"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        role: role || "User"
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User added successfully",
        data: newUser
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📡 Handling GET and POST requests for User Details\n`);
});
