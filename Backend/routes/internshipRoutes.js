const express = require('express');
const { getInternships, createInternship, updateInternship, deleteInternship } = require('../controllers/internshipController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// CRUD Internship Routes
router.route('/')
    .get(getInternships)
    .post(protect, admin, createInternship);

router.route('/:id')
    .put(protect, admin, updateInternship)
    .delete(protect, admin, deleteInternship);

module.exports = router;
