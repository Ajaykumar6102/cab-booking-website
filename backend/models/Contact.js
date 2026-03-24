const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phoneNumber: { type: String }, // Optional depending on which form is used
    email: { type: String, required: true },
    service: { type: String },
    budget: { type: String },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
