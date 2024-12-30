const express = require('express');
const router = express.Router();
const { createOrganization, getOrganizations } = require('../controllers/organizationController');

// Route to create a new organization
router.post('/', createOrganization);

// Route to get all organizations
router.get('/', getOrganizations);

module.exports = router;
