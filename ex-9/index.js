const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// PostgreSQL Connection Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database 🐘');
});

// --- CRUD ROUTES ---

// 1. CREATE: Add a new employee
app.post('/employees', async (req, res) => {
    try {
        const { first_name, last_name, email, department, salary } = req.body;
        const newEmployee = await pool.query(
            "INSERT INTO employees (first_name, last_name, email, department, salary) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [first_name, last_name, email, department, salary]
        );
        res.status(201).json({ success: true, data: newEmployee.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, error: "Database error" });
    }
});

// 2. READ ALL: Get all employees
app.get('/employees', async (req, res) => {
    try {
        const allEmployees = await pool.query("SELECT * FROM employees ORDER BY id ASC");
        res.status(200).json({ success: true, count: allEmployees.rows.length, data: allEmployees.rows });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, error: "Database error" });
    }
});

// 3. READ ONE: Get employee by ID
app.get('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await pool.query("SELECT * FROM employees WHERE id = $1", [id]);
        
        if (employee.rows.length === 0) {
            return res.status(404).json({ success: false, error: "Employee not found" });
        }
        
        res.status(200).json({ success: true, data: employee.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, error: "Database error" });
    }
});

// 4. UPDATE: Update employee details
app.put('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, email, department, salary } = req.body;
        
        const updateEmployee = await pool.query(
            "UPDATE employees SET first_name = $1, last_name = $2, email = $3, department = $4, salary = $5 WHERE id = $6 RETURNING *",
            [first_name, last_name, email, department, salary, id]
        );

        if (updateEmployee.rows.length === 0) {
            return res.status(404).json({ success: false, error: "Employee not found" });
        }

        res.status(200).json({ success: true, message: "Employee updated", data: updateEmployee.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, error: "Database error" });
    }
});

// 5. DELETE: Remove an employee
app.delete('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteEmployee = await pool.query("DELETE FROM employees WHERE id = $1 RETURNING *", [id]);
        
        if (deleteEmployee.rows.length === 0) {
            return res.status(404).json({ success: false, error: "Employee not found" });
        }

        res.status(200).json({ success: true, message: "Employee deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, error: "Database error" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n👨‍💼 Employee Management API running on http://localhost:${PORT}`);
    console.log(`🔗 Database: Connecting to PostgreSQL...`);
});
