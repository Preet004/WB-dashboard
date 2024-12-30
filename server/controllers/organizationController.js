const Organization = require('../models/Organization');

exports.createOrganization = async (req, res) => {
  try {
    const organization = new Organization(req.body);
    await organization.save();
    res.status(201).json(organization);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find().populate({
      path: 'teams',
      populate: { path: 'members' },
    });
    res.status(200).json(organizations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
