const express = require('express');
const router = express.Router();

function validateProductData(product) {
    // Get all products (Useful for loading checkout screens)
router.get('/', (req, res) => {
    res.json(global.products);
    });
}

function addtoCart(product) {
    // Add product to cart (Useful for POS checkout)
    const existingProduct = global.products.find(p => p.id === product.id);
    if (!existingProduct) {
        return { success: false, message: "Product not found" };
    }
    if (existingProduct.stock < product.quantity) {
        return { success: false, message: "Insufficient stock" };
    }
    existingProduct.stock -= product.quantity;
    return { success: true, message: "Product added to cart", product: existingProduct };
}   

// Get a single product by ID (Useful for barcode scanner lookups)
router.get('/:id', (req, res) => {
    const product = global.products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});

// Add a new product to inventory
router.post('/', (req, res) => {
    const { name, price, stock } = req.body;
    const newProduct = {
        id: global.products.length + 1,
        name,
        price: parseFloat(price),
        stock: parseInt(stock)
    };
    global.products.push(newProduct);
    res.status(201).json(newProduct);
});

module.exports = router;
