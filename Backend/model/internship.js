const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String },
    location: { type: String },
    duration: { type: String }
});

module.exports = mongoose.model('Internship', InternshipSchema);
