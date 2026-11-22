const express = require('express');
const router = express.Router();

// Process Checkout transaction
router.post('/checkout', (req, res) => {
    const { items, paymentMethod } = req.body; 
    // Format expected: items = [{ productId: 1, quantity: 2 }, { productId: 2, quantity: 1 }]

    if (!items || items.length === 0) {
        return res.status(404).json({ message: "No items present in cart" });
    }

    let subtotal = 0;
    const orderItems = [];

    // Verify stock and calculate dynamic pricing
    for (let cartItem of items) {
        const product = global.products.find(p => p.id === cartItem.productId);
        
        if (!product) {
            return res.status(404).json({ message: `Product ID ${cartItem.productId} not found.` });
        }

        if (product.stock < cartItem.quantity) {
            return res.status(400).json({ message: `Insufficient stock for ${product.name}.` });
        }

        // Deduct inventory stock
        product.stock -= cartItem.quantity;

        const itemTotal = product.price * cartItem.quantity;
        subtotal += itemTotal;

        orderItems.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: cartItem.quantity,
            total: itemTotal
        });
    }

    const taxRate = 0.08; // 8% sales tax
    const tax = subtotal * taxRate;
    const totalAmount = subtotal + tax;

    const finalOrder = {
        orderId: global.orders.length + 1,
        items: orderItems,
        subtotal: parseFloat(subtotal.toFixed(2)),
        tax: parseFloat(tax.toFixed(2)),
        total: parseFloat(totalAmount.toFixed(2)),
        paymentMethod: paymentMethod || 'Cash', // Cash, Card, Mobile, etc.
        timestamp: new Date()
    };

    global.orders.push(finalOrder);
    res.status(201).json({ message: "Order processed successfully!", order: finalOrder });
});

// Fetch historical order reports
router.get('/history', (req, res) => {
    res.json(global.orders);
});

module.exports = router;
