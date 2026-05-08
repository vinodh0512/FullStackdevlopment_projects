-- SQL script to initialize the database
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    department VARCHAR(50),
    salary NUMERIC(10, 2),
    hire_date DATE DEFAULT CURRENT_DATE
);

-- Mock Data
INSERT INTO employees (first_name, last_name, email, department, salary) 
VALUES 
('Vinodh', 'T', 'vinodh@example.com', 'Engineering', 95000),
('John', 'Doe', 'john.doe@example.com', 'HR', 60000);
