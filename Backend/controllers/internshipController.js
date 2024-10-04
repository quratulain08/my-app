const Internship = require('../model/internship');

const getInternships = async (req, res) => {
    try {
        const internships = await Internship.find();
        res.status(200).json(internships);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createInternship = async (req, res) => {
    try {
        const internship = await Internship.create(req.body);
        res.status(201).json(internship);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateInternship = async (req, res) => {
    try {
        const internship = await Internship.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(internship);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteInternship = async (req, res) => {
    try {
        await Internship.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Internship deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getInternships, createInternship, updateInternship, deleteInternship };
