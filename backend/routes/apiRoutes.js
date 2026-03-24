const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Contact = require('../models/Contact');

// ==== BOOKING ROUTES ====
router.post('/bookings', async (req, res, next) => {
    try {
        const newBooking = new Booking(req.body);
        const savedBooking = await newBooking.save();
        res.status(201).json({ success: true, message: 'Booking submitted successfully!', data: savedBooking });
    } catch (error) {
        console.error('Booking save error:', error);
        res.status(500).json({ success: false, message: 'Failed to save booking', error: error.message });
    }
});

// ==== CONTACT ROUTES ====
router.post('/contacts', async (req, res, next) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!', data: savedContact });
    } catch (error) {
        console.error('Contact save error:', error);
        res.status(500).json({ success: false, message: 'Failed to send message', error: error.message });
    }
});

// ==== FETCH ROUTES (For testing via Postman/Browser) ====
router.get('/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
