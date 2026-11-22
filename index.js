const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Essential for parsing JSON payloads
app.use(express.static(path.join(__dirname, 'client', 'dist'))); // Serve static files from the 'public' directory
// Mock In-Memory Database (For quick testing; swap with MySQL/Sequelize/MongoDB//PostgreSQL later)// Need to replace this with a proper database connection and ORM for production use
// Use posgresql with Sequelize or TypeORM for a more robust solution
// Mock Data below is for testing purposes only. In a real application, you would fetch this data from your database.
// Middleware to simulate a database connection and provide mock data for products and orders. In a production environment, replace this with actual database queries using an ORM or raw SQL queries.
// Use db.js to connect to PostgreSQL and perform CRUD operations. Ensure that the database is properly set up and the connection string is correct in the .env file.

global.products = [
    { id: 1, name: "Espresso", price: 3.50, stock: 100 },
    { id: 2, name: "Croissant", price: 2.80, stock: 50 },
    { id: 3, name: "Iced Latte", price: 4.20, stock: 80 }
];
global.orders = [];

// Import Routes
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Mount Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/checkout', orderRoutes); // Checkout route is part of orderRoutes


// Additional Endpoints for Testing and Debugging
//app.require('./routes/orderRoutes')(app); // Ensure the checkout route is accessible

app.addListener('checkout', orderRoutes);

app.addListener('products', productRoutes);
app.get('/api/products', (req, res) => {
    res.json(global.products);
});

app.get('/api/orders', (req, res) => {
    res.json(global.orders);
}); 

app.get('/api/checkout', (req, res) => {
    res.json({ message: "Use POST /api/checkout to process an order." });
}); 

app.get('*splat', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
// Root Endpoint
app.get('/', (req, res) => {
    res.send('POS Backend Server is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

